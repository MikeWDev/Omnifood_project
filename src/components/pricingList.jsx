const PricingList = ({ data }) => {
  return (
    <ul className="list">
      <li className="list-item">
        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
        <span>{data.howMany} + per day</span>
      </li>
      <li className="list-item">
        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
        <span>Order from + {data.orderTimes}</span>
      </li>
      <li className="list-item">
        <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
        <span>Delivery is free</span>
      </li>
      <li className="list-item">
        <ion-icon className="list-icon" name={`${data.checkMark}`}></ion-icon>
        <span>{data.access}</span>
      </li>
    </ul>
  );
};

export default PricingList;
