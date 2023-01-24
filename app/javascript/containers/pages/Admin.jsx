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
        const text = docx.officeDocument.content("w\\:t")
        let output = ""

        // Map over the text information and return the text
        Object.keys(text).forEach(key => {
          if (text[key].type === "tag") {
            // console.log(text[key].children[0].data)
            output = output + text[key].children[0].data
            // setOutputString(outputString + text[key].children[0].data)
            // console.log("output", test);
          }
        } )
        // console.log(output);
        setOutputString(output)
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
