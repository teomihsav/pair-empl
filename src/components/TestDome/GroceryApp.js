import React, { useEffect } from 'react'

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = props => {
  const { onVote, dir, index } = props

  const plus = (props) => {
    onVote(props, index)
  };
  const minus = (props) => {
    // Call props.onVote to decrease the vote count for this product
    onVote(props, index)
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>{" "}
      <button onClick={() => plus('+')}>+</button>{" "}
      <button onClick={() => minus('-')}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  const [products, setProducts] = React.useState( props.products );
  const [click, clickSet] = React.useState(false);

  const onVote = (dir, index) => {
    // Update the products array accordingly ...
    let res = products.map((el, i) => {
      if (i === index) {
        if (dir === '+') setProducts(products[i].votes += 1)
        if (dir === '-') setProducts(products[i].votes -= 1)
      }
    })
    setProducts(products)
    clickSet(!click)
  };

  return (
    <ul>
      {/* Render an array of products, which should call onVote when + or - is clicked */
        products.map((el, index) => <Product key={el.name} name={el.name} votes={el.votes} onVote={onVote} index={index} />)
      }
    </ul>
  );
}


const GroceryAppMain = () => {
  return (
    <div>
      <GroceryApp
        products={[
          { name: "Oranges", votes: 0 },
          { name: "Bananas", votes: 0 }
        ]}
      />
    </div>
  )
}

export default GroceryAppMain