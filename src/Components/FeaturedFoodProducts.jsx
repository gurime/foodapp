import React from 'react'
import { Link } from 'react-router-dom'

import {  featured } from '../data/db'

const FeaturedFoodProducts = () => {
return (
<>


{Object.entries(featured).map(([id, { desc, imgurl,item,price }]) => (
<div key={id} className='hero'>

<div className='hero-details'>
<h1 className='hero-text'>{item}
<br className='hero-text-br'/>
Enjoy Every Bite
</h1>
<p className='hero-subtext'>
{desc}</p>

<div className='btn-price-box'>
<Link to={`/featuredItemDetails/${id}`}>
<button className='hero-btn'>More</button>
</Link>
<p>{price}</p>
</div>
</div>

<div className='product-img'>
<img   src={imgurl} alt='...'/>
</div>

</div>

))}


</>
)
}

export default FeaturedFoodProducts