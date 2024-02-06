/* eslint-disable no-unused-vars */
//import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
 // const [count, setCount] = useState(0)
  let myObj  = {
    username: 'Kamlesh',
    age: 21
  }

  let newArr = [1,2,3]

  return (
   
      <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     
       <Card username="chai aur code" btnText = 'Click Me' />
       <Card username="chai aur react" btnText = 'Visit Me' />
    </>
  )
}

export default App
