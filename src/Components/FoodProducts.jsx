import React from 'react'
import { Link } from 'react-router-dom'
import {data} from '../data/db'
import '../Css/FoodDetails.css'
const FoodProducts = () => {
return (
<>
<div className='menu-search-box'>
<h1>Our meals</h1>
</div>
<div className='grid-container'>

{Object.entries(data).map(([id, { price, imgurl,item }]) => (
<div key={id} className="card">
<Link to={`/itemDetails/${id}`}>
<img   src={imgurl} alt='...'/>
</Link>
<div className='card-content'>

<div className="card-title">{item}</div>
<div className="card-price">{price}</div>
</div>
</div>
))}
</div>
</>
)
}

export default FoodProducts