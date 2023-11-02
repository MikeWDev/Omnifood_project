import { Meal1, Meal2 } from "../assets/img/imgIndex";
import DietList from "../components/dietList";
import MealCard from "../components/mealCard";
const SectionMeals = () => {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        <MealCard
          imgSrc={Meal1}
          alt="Japanese Gyozas"
          tagClass="tag--vegetarian"
          ndTagClass=""
          ndTagText=""
          tagText="Vegetarian"
          mealTitle="Japanese Gyozas"
          caloriesNo="650"
          nutriNo="74"
          ratingStars="4.9"
          ratingNo="537"
        />

        <MealCard
          imgSrc={Meal2}
          alt="Avocado Salad"
          tagClass="tag--vegan"
          tagText="Vegan"
          ndTagClass="tag--vegetarian"
          ndTagText="Paleo"
          mealTitle="Avocado Salad"
          caloriesNo="400"
          nutriNo="92"
          ratingStars="4.8"
          ratingNo="441"
        />
        <DietList />
      </div>

      <div className="container all-recipes">
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
};

export default SectionMeals;
