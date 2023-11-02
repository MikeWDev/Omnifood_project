const MealCard = (props) => {
  return (
    <div className="meal">
      <img src={Meal1} className="meal-img" alt="Japanese Gyozas" />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegetarian">Vegetarian</span>
        </div>
        <p className="meal-title">Japanese Gyozas</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
            <span>
              <strong>650</strong> calories
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon
              className="meal-icon"
              name="restaurant-outline"
            ></ion-icon>
            <span>
              NutriScore &reg; <strong>74</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon className="meal-icon" name="star-outline"></ion-icon>
            <span>
              <strong>4.9</strong> rating (537)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
