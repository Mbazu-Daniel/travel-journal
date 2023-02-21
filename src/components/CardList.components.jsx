import React from 'react'
import Card from './Card.components'
import data from "../data"
const CardList = () => {

  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item} />
    )
  })
  return (
    <div className='cardlist--box'>
      
     {cards}
    </div>
  )
}

export default CardList