import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='mr-3 text-xl bg-white text-black inline-block p-6 text-center rounded'>
        <img className='h-32 w-32 rounded-full mb3'src={props.photo} alt="" />
        <h1 className='text-2xl font-semibold md-4'>{props.username}</h1>
        <h4 className='text-blue-400'>{props.prof}</h4>
        <h2>{props.city},{props.age}</h2>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium '>add friend</button>
    </div>
  )
}

export default Card