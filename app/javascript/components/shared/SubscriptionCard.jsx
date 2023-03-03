import React from "react";

function SubscriptionCard(props) {

  const subscription = props.subscription
  const subscriptionType = subscription.tipo
  const remaining_uses = subscription.remaining_uses
  return (
    <div className="border-solid border-1 border-white">
      <ul>
        <li className='px-2 py-3'>Tipo de abono: {subscriptionType}</li>
        <li className='px-2 py-3'>Usos restantes: {remaining_uses}</li>
      </ul>
    </div>
  );
}
export default SubscriptionCard
