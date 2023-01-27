import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import docx4js from "docx4js"
import { Buffer } from "buffer";



function Admin() {
  const [selectedFile, setSelectedFile] = useState()
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [isFileProcessed, setIsFileProcessed] = useState(false);
  const [outputString, setOutputString] = useState("")
  const [output, setOutput] = useState([])

  const [days, setDays] = useState([])
  window.Buffer = window.Buffer || Buffer;

  // Triggered when the file is chosen
  useEffect(() => {
    if (isFilePicked) {
      // Read the file
      docx4js.load(selectedFile).then(function (docx) {

        // Return the body of the document
        // console.log(docx.officeDocument.content("w\\:body"))
        let output = ""

        // Map over the body information and return the text with paragraph information
        // To take into account new lines
        const body = docx.officeDocument.content("w\\:body")["0"].children
        Object.keys(body).forEach(key => {
          body[key].children.forEach(child => {
            // Check if the child is a paragraph
            if (child.name === "w:r"){
              // Map over the paragraph and return the text
              Object.keys(child.children).forEach(childKey => {
                // Check if the child is a text node
                if (child.children[childKey].name === "w:t") {
                  output = output + child.children[childKey].children[0].data
                }
              })
            }
          })
          // Add a new line after each paragraph
          output = output + " \n "
        })
        // console.log(output);
        // Save the output string to the state
        setOutputString(output)
        setIsFileProcessed(true)
      })
    }
  }, [selectedFile])

  // Separate each movie description
  const splitMovieDescription = (desc) => {
    const descRegex = /\r?\n/
    let outputDescription = []
    desc.split(descRegex).forEach((item, index) => {
      item = item.trim()
      if (item !== "") {
        // console.log([item]);
        outputDescription = [...outputDescription,
          <form className='text-lg pt-2 min-w-full'>
              <textarea rows={item.length/100} className='min-w-full' defaultValue={item} key={index}></textarea>
          </form>
      ]
      }
    })
    // console.log(outputDescription)
    return outputDescription
  }

  // process each day
  const splitDayByCinema = (day) => {
    const hallRegex = /(\d{2}\S\d{2}\s\S\s\w*\s\d*\s\S)/
    // console.log(day.split(hallRegex));
    return(
      day.split(hallRegex).map((item, index) => {
        if (index % 2 === 0) {
          // Description of the movie
          return <div key={index}>{splitMovieDescription(item)}</div>
        } else {
          // The hall and the time
          return (
            <form className='text-2xl pt-5 pb-2'>
              <input defaultValue={item} key={index}></input>
            </form>
          )
        }
      })
    )
  }

  // Triggered after the file is processed
  useEffect(() => {
    // Check is necessary to avoid triggering the effect on the first render
    if (isFileProcessed) {
      // Regex to split into days
      // console.log(outputString);
      const daysRegex = /(\S*\s\d{1,2}\sde\s\w*\s)/
      const days = outputString.split(daysRegex)
      setDays(days)
      // console.log(days)
      days.forEach((day,index) => {
        if (index % 2 === 0) {
          // The contents of the day
          setOutput(output => [...output, <div className='max-w-7xl mx-auto' key={index}>{splitDayByCinema(day)}</div>]);
        } else {
          // The exact date
          setOutput(output => [...output,
            <form className='text-4xl max-w-7xl mx-auto pt-10 pb-5'>
              <input defaultValue={day} key={index}></input>
            </form>
        ]);
        }
      })
    }
  }, [outputString])

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
	};
  return (
    <Layout>
      <Navbar/>
      <div className="pt-20">
        <input type="file" name="file" onChange={changeHandler} />
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
        {output}
      </div>
      <Footer/>
    </Layout>
  )
}

export default Admin
