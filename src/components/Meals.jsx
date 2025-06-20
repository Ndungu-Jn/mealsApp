import { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div key={idMeal} className="meal-item">
        <section className="card">
          <img src={strMealThumb} alt={strMeal} />
        </section>
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </div>
    );
  });
  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
