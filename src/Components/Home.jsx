import React from 'react'
import Navbar from './Navbar'
import "../Css/Home.css"
import FoodProducts from './FoodProducts'
import FeaturedFoodProducts from './FeaturedFoodProducts'

const Home = () => {
return (
<>
<Navbar/>
<FeaturedFoodProducts/>
<div style={{margin:"auto", maxWidth:"960px"}}>


<FoodProducts/>
</div>

</>
)
}

export default Home