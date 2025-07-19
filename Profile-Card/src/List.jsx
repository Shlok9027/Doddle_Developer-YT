import React from 'react'

function List() {
 
    const fruits = ['mango', 'apple', 'banana', 'orange', 'graphes'];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(<ol>{listItems}</ol>);
  
}

export default List
