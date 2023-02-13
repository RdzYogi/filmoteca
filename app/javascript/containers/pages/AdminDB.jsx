import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Label from '../../components/adminDB/label'
import Input from '../../components/adminDB/input'

function AdminDB() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12 text-justify'>
        <section className="bg-white">
          <h2 className="text-center text-2xl font-bold">Admin Database</h2>
          <h2>Cycle</h2>
          <div> {/* Name */}
            <Label
              for="name" label="name"
            />
            <Input
              type="text"
              id="name"
              defaultValue="name"
              placeholder=""
            />
          </div>
          <div> {/* Description */}
            <Label
              for="description" label="description"
            />
            <Input
              type="text"
              id="description"
              defaultValue="description"
              placeholder=""
            />
          </div>
          <div> {/* Quote */}
            <Label
              for="quote" label="quote"
            />
            <Input
              type="text"
              id="quote"
              defaultValue="quote"
              placeholder=""
            />
          </div>
          <div> {/* img url */}
            <Label
              for="imgUrl" label="Upload file"
            />
            <Input
              type="file"
              id="imgUrl"
              defaultValue=""
            />
          </div>
          <div>{/* start date & end date */}

          </div>
          <div> {/* color */}
            <Label
              for="color" label="Pick a colour"
            />
            <Input
              type="text"
              id="color"
              defaultValue=""
            />
          </div>

          <div> {/* slug */} </div>
          <div> {/* movies */} </div>
          <div> {/* sessions */} </div>

          <button type="submit" className="py-3 px-5 w-32 flex m-auto justify-center sm:m-0 font-medium text-center text-white rounded-sm bg-button-submit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-button-submit">Enviar</button>
        </section>
      </div>
      <Footer/>
    </Layout>
  )
}

export default AdminDB
