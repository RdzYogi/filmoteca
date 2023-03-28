import React from "react";
import getDateObject from '../helpers/getDateObject'

function SubscriptionCard(props) {
  const subscription = props.subscription
  const subscriptionType = subscription.tipo
  const remaining_uses = subscription.remaining_uses
  if (subscription.end_date !== null){
    const dateObject = getDateObject(subscription.end_date)
    var date = dateObject.day+'/'+dateObject.month+'/'+dateObject.year
  }
  return (
    <div className="border-2 border-white-600">
      <ul>
        <li className='px-2 py-3'>Tipo de abono: <span className="font-bold">{subscriptionType}</span></li>
        {subscriptionType === 'abono' ?
        <li className='px-2 py-3'>Fecha de caducidad: <span className="font-bold">{date}</span></li>
          :
        <li className='px-2 py-3'>Usos restantes: <span className="font-bold">{remaining_uses}</span></li>
        }

      </ul>
    </div>
  );
}
export default SubscriptionCard
