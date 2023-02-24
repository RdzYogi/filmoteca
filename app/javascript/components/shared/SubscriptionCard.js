import React, {useState} from "react";

function SubscriptionCard(props) {

  const subscription = props.subscription
  return (
    <p className="text-base font-bold">{subscription}</p>
  );
}
export default SubscriptionCard
