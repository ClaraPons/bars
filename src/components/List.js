import React from 'react'

import { useContext } from 'react'
import { MapContext } from '../contexts.js/Map'


const List = () => {

    const {bars, setBars} = useContext(MapContext)

    // console.log(bars);

  return (
    <aside className='w-[30%] h-[100vh] overflow-y-auto'>
        <h1 className='text-center my-5 font-semibold text-4xl'>Liste des bars</h1>
        {bars.map(bar => {
            return (
                <div className='flex flex-col items-center border-2 p-5 border-gray-200 my-2 rounded mx-2'>
                <h3 className='my-3 text-teal-500 font-semibold text-2xl'>{bar.name}</h3>
                <p className='mb-3 text-lg'>{bar.address}</p>
                <p className='font-bold text-lg'>Price : {bar.price} $</p>
                </div>
            )
        })}
    </aside>
    
  )
}

export default List