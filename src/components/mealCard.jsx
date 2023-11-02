import MealTag from "./mealTag";

const MealCard = (props) => {
  return (
    <div className="meal">
      <img src={props.imgSrc} className="meal-img" alt={props.alt} />
      <div className="meal-content">
        <div className="meal-tags">
          <MealTag
            tagClass={`${props.tagClass}`}
            tagText={`${props.tagText}`}
          />
          <MealTag
            tagClass={`${props.ndTagClass}`}
            tagText={`${props.ndTagText}`}
          />
        </div>

        <p className="meal-title">{props.mealTitle}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
            <span>
              <strong>{props.caloriesNo}</strong> calories
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon
              className="meal-icon"
              name="restaurant-outline"
            ></ion-icon>
            <span>
              NutriScore &reg; <strong>{props.nutriNo}</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon className="meal-icon" name="star-outline"></ion-icon>
            <span>
              <strong>{props.ratingStars}</strong> rating ({props.ratingNo})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
