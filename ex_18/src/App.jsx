import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [cards, setCards] = useState([])


  const ex = async () => {

    let a = await fetch("https://jsonplaceholder.typicode.com/posts")

    let data = await a.json()

    setCards(data)
    
    // console.log(data)
  }

  useEffect(() => {
    ex()
  }, [])

  return (
    <>
      <div className="container">
        {cards.map((card) => {
          return <div key={card.id} className='gg'>
            <p>{card.title}</p>
            <p>{card.body}</p>
            <p>{card.userId}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
