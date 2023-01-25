import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import docx4js from "docx4js"
import { Buffer } from "buffer";



function Admin() {
  const [selectedFile, setSelectedFile] = useState()
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [outputString, setOutputString] = useState("")
  window.Buffer = window.Buffer || Buffer;

  // Triggered when the file is selected
  //
  useEffect(() => {
    if (isFilePicked) {
      // Read the file
      docx4js.load(selectedFile).then(function (docx) {

        // Select only the text information
        // console.log(docx.officeDocument.content("w\\:body")["0"].children)
        let output = ""

        // Map over the text information and return the text with paragraph information
        const body = docx.officeDocument.content("w\\:body")["0"].children
        Object.keys(body).forEach(key => {
          body[key].children.forEach(child => {
            if (child.name === "w:r"){
              Object.keys(child.children).forEach(childKey => {
                if (child.children[childKey].name === "w:t") {
                  output = output + child.children[childKey].children[0].data
                }
              })
            }
          })
          output = output + "\n"
        })
        console.log(output);

        // // Map over the text information and return the text without paragraph information
        // const text = docx.officeDocument.content("w\\:t")
        // Object.keys(text).forEach(key => {
        //   if (text[key].type === "tag") {
        //     // console.log(text[key].attribs)

        //     // If the text is a new line, add a new line
        //     if (text[key].attribs["xml:space"] === "preserve") {
        //       output = output + " "
        //     }

        //     text[key].children.forEach(child => {
        //       output = output + child.data
        //     })
        //     // console.log("output", test);
        //   }
        // } )
        // // console.log(output);
        // setOutputString(output)
      })
      // debugger
    }
  }, [selectedFile])

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
      </div>
      <Footer/>
    </Layout>
  )
}

export default Admin
