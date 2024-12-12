// import React, { useState } from 'react'

// const App = () => { 
//   // const submitHandler =(e)=>{
//   //   e.preventDefault()
//   //   console.log('submitHandler')
//   // }
//   const [username, setUsername] = useState('')
//   const submithandler=(e)=>{
//     e.preventDefault()
//     console.log(username)
//     setUsername('HVJH')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submithandler(e)
//       }} value={username} onChange={(e)=>{
//         setUsername(e.target.value)
//       }} >
//         <input   className='px-4 py-3' type="text" placeholder='placeholder is kbskdfbsd' />
//         <button>submit</button>
//       </form>

      
//     </div>
//   )
// }
// export default App


// import React,{useState} from 'react'

// const App = () => {

//   const [a, setA] = useState(10)
//   const decA=()=>{
//     console.log('chalgy')
//     setA(a-10)
//   }
//   const incA=()=>{
//     console.log('chalgya')
//     setA(a+10)
//   }
//   return (
//     <div>
//     <h1 className='text-7xl text-black bg-red-700'>value of a is {a}</h1>
//     <button onClick={incA} >increase</button>
//     <button onClick={decA}>deacrease</button>
//     </div>
//   )
// }

// export default

// import React from 'react'
// import Card from './components/Card'

// card bnana
// const App = () => {
//   const users =[
//       {
//         "name": "John Doe",
//         "age": 29,
//         "city": "New York",
//         "profession": "Software Engineer",
//         "profile_photo": "https://example.com/photos/john_doe.jpg"
//       },
//       {
//         "name": "Jane Smith",
//         "age": 34,
//         "city": "Los Angeles",
//         "profession": "Graphic Designer",
//         "profile_photo": "https://example.com/photos/jane_smith.jpg"
//       },
//       {
//         "name": "Michael Brown",
//         "age": 42,
//         "city": "Chicago",
//         "profession": "Product Manager",
//         "profile_photo": "https://example.com/photos/michael_brown.jpg"
//       },
//       {
//         "name": "Emily Davis",
//         "age": 25,
//         "city": "San Francisco",
//         "profession": "Marketing Specialist",
//         "profile_photo": "https://example.com/photos/emily_davis.jpg"
//       },
//       {
//         "name": "David Johnson",
//         "age": 38,
//         "city": "Seattle",
//         "profession": "Data Scientist",
//         "profile_photo": "https://example.com/photos/david_johnson.jpg"
//       }
//     ]
  
  
  
//   return (
//     <>
//       <div className='p-10'>
//         {users.map(function(elem){
//           return <Card username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photo={elem.profile_photo} profession={elem.profession}/>
//         })}
//       </div>
//     </>
//   )
// }

// export default App

// import axios from 'axios'
// import React, { useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   const getdata=async () => {
//     const response=await axios.get('https://picsum.photos/v2/list')
//     // console.log(response)
//     setData(response.data)
//     // console.log(data)
//   }
//   return (
//     <div className='p-10'>
//       <button onClick={getdata} className='bg-teal-700 w-full text-white font-semibold text-2xl px-5 py-5 rounded active:scale-90'> data nikal mc</button>
//       <div className='bg-gray-950 p-5 mt-5 text-2xl'>
//         {data.map(function(elem,idx){
//           return <div key={idx} className='bg-gray-500 w-full px-5 py-5 flex justify-center justify-between rounded mb-5'>
//               <img className='h-20'  src={elem.download_url} alt='Download' />
//               <h1>{elem.author}</h1>
//           </div>
//         })}
//         </div>
//     </div>
//   )
// }

// export default App

