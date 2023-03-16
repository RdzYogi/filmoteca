import React, { useEffect, useState } from 'react'
import Layout from '../../hocs/layouts/Layout'

function AdminMsg() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    fetch("/api/v1/messages/", {
      method: "GET",
      headers: {headers: { "Content-Type": "application/json",}},
      })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        data.map((message, index) => {
            setMessages(prev => [...prev,
              <div id={message.id} key={index+"message"} className={'flex flex-col pb-3 w-1/2 border' + " border-black"}>
                <div className='ml-3'>
                  <div className='flex'>
                    <h1 className='font-bold mr-3'>Asunto:</h1>
                    <p>{message.subject}</p>
                  </div>
                  <div className='flex'>
                    <h1 className='font-bold mr-3'>Nombre usuario:</h1>
                    <p>{message.name}</p>
                  </div>
                  <div className='flex'>
                    <h1 className='font-bold mr-3'>Correo usuario:</h1>
                    <p>{message.email}</p>
                  </div>
                  <div className='flex'>
                    <h1 className='font-bold mr-3'>Mensaje:</h1>
                    <p>{message.message}</p>
                  </div>
                </div>
                <div className='flex justify-around mt-3'>
                  <button onClick={handleRead} className='bg-blue-200'>{message.read ? "Leido" : "Marcar leido"}</button>
                  <button onClick={handleDelete} className='bg-blue-200'>Borrar</button>
                </div>
              </div>
            ])
        })
      });
  }, [])

  const handleRead = (e) => {
    const msgId = e.target.parentNode.parentNode.id
    // console.log(e.target)
    e.target.innerText = "Leido"
    fetch(`/api/v1/messages/${msgId}`, {
      method: "PATCH",
      headers: {headers: { "Content-Type": "application/json",}},
      })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
      }
    );
  }
  const handleDelete = (e) => {
    const msgId = e.target.parentNode.parentNode.id
    const msgContainer = document.getElementById("message-container")
    const msg = document.getElementById(msgId)
    msgContainer.removeChild(msg)
    fetch(`/api/v1/messages/${msgId}`, {
      method: "DELETE",
      headers: {headers: { "Content-Type": "application/json",}},
      })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
      }
    );
  }

  return (
    <Layout>
      <div className="pt-40 pb-20">
        <h1 className="text-center text-2xl font-bold">Mensajes</h1>
        <div id="message-container" className="flex flex-col items-center gap-3">
          {messages}
        </div>
      </div>
    </Layout>
  )
}

export default AdminMsg
