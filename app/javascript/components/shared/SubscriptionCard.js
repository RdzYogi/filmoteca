import React from "react";

function SubscriptionCard(props) {

  const subscription = props.subscription
  const subscriptionType = subscription.tipo
  const remaining_uses = subscription.remaining_uses
  return (
    <div className="box-border border border-black h-96 w-4/5 overflow-hidden">      <p className="text-base font-bold">Type: {subscriptionType}</p>
      <p className="text-base font-bold">Remaining uses: {remaining_uses}</p>
      <p className="text-base font-bold">Remaining: {remaining_uses}</p>
    </div>
  );
}
export default SubscriptionCard
