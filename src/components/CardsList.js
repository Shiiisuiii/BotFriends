import React from 'react';
import Card from './Card'

const CardArray = (props) => {
  const cardComponents = props.robots.map((user, i) => {
    return <Card key={i} id={props.robots[i].id} name={props.robots[i].name} email={props.robots[i].email} />
  }) 

  return (
    console.log(cardComponents),
    <div>
      {cardComponents}
    </div>
  )
}

export default CardArray;