import React, { useState } from 'react'
import Card from '../Components/Card'
import { movie_Data } from './Data'


/*

map, filter and reduce
*/
//usestate-it renders the component again
export default function () {
  const [search, setSearch] = useState("");

  return (
    <div className="home">

      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <input className='w-50' type="text" onChange={(e) => { setSearch(e.target.value) }} />
        </div>
      </div>


      <div className='container mt-5 cards_container'>

        {
          movie_Data.map((val, i) => {
            if ((val.name).includes(search)) {
              return (
                <Card name={val.name} time={val.time} img={val.img} description={val.description} links={val.links} key={i} />
              )
            }
          }
          )
        }</div>
    </div>

  )
}