import React from "react";


function SubscriptionCard(props) {
  const subscription = props.subscription
  const subscriptionType = subscription.tipo
  const remaining_uses = subscription.remaining_uses
  return (
    <div className="border-2 border-white-600 mt-2">
      <ul>
        <li className='px-2 py-3'>Tipo de abono: <span className="font-bold">{subscriptionType}</span></li>
        {subscriptionType === "abono" ?
        <li className='px-2 py-3'>Fecha de expiración: <span className="font-bold">{subscription.end_date.slice(0,10)}</span>
        </li> : <li
        className='px-2 py-3'>Usos restantes: <span className="font-bold">{remaining_uses}</span></li>
      }
        </ul>
    </div>
  )};

export default SubscriptionCard
