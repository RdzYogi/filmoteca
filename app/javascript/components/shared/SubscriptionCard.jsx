import React from "react";

function SubscriptionCard(props) {

  const subscription = props.subscription
  const subscriptionType = subscription.tipo
  const remaining_uses = subscription.remaining_uses
  return (
    <div className="">
      <ul>
        <li className='list-disc'>Tipo de abono: {subscriptionType}</li>
        <li className='list-disc'>Usos restantes: {remaining_uses}</li>
      </ul>
    </div>
  );
}
export default SubscriptionCard
