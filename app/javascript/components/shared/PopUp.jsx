import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PopUp({status, responseStatus}) {
  const navigate = useNavigate()
  useEffect(() => {
    const popup = document.getElementById("prompt")
    // console.log(status)
    if (popup === null) return
    popup.classList.add("hidden")
    popup.style.top = "0px"
    popup.style.left = "0px"
    popup.style.top = 20 + "%"
    popup.style.left = 50 + "%"
    popup.style.transform = "translateX(-50%)"
    setPopUp(status)
  }, [status])

  const setPopUp = (status) => {
    const popup = document.getElementById("prompt")
    if (popup === null) return
    const promptMessage = document.getElementById("prompt-message")
    switch (status[0]) {
      case 'name':
        promptMessage.innerText = 'El nombre no puede estar vacío'
        displayPopup()
        break;
      case 'email':
        promptMessage.innerText = 'El email no puede estar vacío'
        displayPopup()
        break;
      case 'emailNotValid':
        promptMessage.innerText = 'El email no es válido'
        displayPopup()
        break;
      case 'emailConfirmation':
        promptMessage.innerText = 'La confirmación del email no puede estar vacía'
        displayPopup()
        break;
      case 'subject':
        promptMessage.innerText = 'Tienes que elegir un asunto'
        displayPopup()
        break;
      case 'message':
        promptMessage.innerText = 'El mensaje no puede estar vacío'
        displayPopup()
        break;
      case 'notSameEmails':
        promptMessage.innerText = 'Los emails no coinciden'
        displayPopup()
        break;
      case 'Message sent successfully':
        promptMessage.innerText = 'Mensaje enviado'
        displayPopup()
      break;
      case 'Message not sent':
        promptMessage.innerText = 'Ha surgido un error, por favor inténtelo de nuevo'
        displayPopup()
      break;
      case "Compra realizada con éxito":
        promptMessage.innerText = "Compra realizada con éxito"
        displayPopup()
      break;
      default:
        break;
    }
  }

  const displayPopup = () => {
    const popup = document.getElementById("prompt")
    popup.classList.remove("hidden")
    setTimeout(() => {
      popup.classList.add("hidden")
      if(responseStatus === 'Created') {
        navigate('/')
      }
    }, 3000);
  }
  const handlePopupClick = () => {
    const popup = document.getElementById("prompt")
    popup.classList.add("hidden")
    if(responseStatus === 'Created') {
      navigate('/')
    }
  }
  return (
    <div id="prompt" className='h-20 w-fit max-w-1/2 bg-black flex flex-col justify-around fixed transition-all duration-300'>
      <p id="prompt-message" className='text-white text-center mx-5'></p>
      <button onClick={handlePopupClick} className='w-fit self-center px-2 border border-white text-white'>Ok</button>
    </div>
  )
}

export default PopUp
