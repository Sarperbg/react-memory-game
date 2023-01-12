import React , { useState } from 'react'
import Card from './Card'
const Cards = () => {
    const [items, setItems] = useState([
        {id: 1 , img: '/img/animal1.png' , stat: ""},
        {id: 2 , img: '/img/animal2.png' , stat: ""},
        {id: 3 , img: '/img/animal3.png' , stat: ""},
        {id: 4 , img: '/img/animal4.png' , stat: ""},
        {id: 5 , img: '/img/animal5.png' , stat: ""},
        {id: 6 , img: '/img/animal6.png' , stat: ""},
        {id: 7 , img: '/img/animal7.png' , stat: ""},
        {id: 8 , img: '/img/animal8.png' , stat: ""},
        {id: 9 , img: '/img/animal9.png' , stat: ""},
        {id: 10 , img: '/img/animal10.png' , stat: ""},
        {id: 11 , img: '/img/animal11.png' , stat: ""},
        {id: 12 , img: '/img/animal12.png' , stat: ""},
        {id: 13 , img: '/img/animal13.png' , stat: ""},
        {id: 14 , img: '/img/animal14.png' , stat: ""},
        {id: 15 , img: '/img/animal15.png' , stat: ""},
        {id: 16 , img: '/img/animal16.png' , stat: ""},
      
    ])
    const [prev, setPrev] = useState(-1)
    function handleClick (id) {
        items[id].stat = "active"
    }
   return (
    <div className='container'>
        { items.map((item , index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick}/>
        )) }
    </div>
  )
}

export default Cards