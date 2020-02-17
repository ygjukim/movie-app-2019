import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

var favoliteFoodList = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1843-e1477360668451.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Bossam",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2013/11/DSC_2047-r-e1483111500205.jpg",
    rating: 4.8
  },
  {
    id: 3,
    name: "Gimbap",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_0406-1-e1536289445158.jpg",
    rating: 4.5
  }
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I like {name}.</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {favoliteFoodList.map(dish => {
        return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      })}
    </div>
  );
}

export default App;
