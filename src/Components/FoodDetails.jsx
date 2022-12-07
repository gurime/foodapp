import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/db';
import '../Css/FoodDetails.css'
import Navbar from '../Components/Navbar'
let FoodDetails = () => {
let {id} = useParams();
let food = data [id];
let{  
imgurl,
item, 
desc,
price,
servenumber,
servingsizenumber,
servingsizegrams,
calories,
caloriesfromfat,
totalfat,
totalfatperc,
satfat,
satfatgram,
transfat,
cholestrerolgram,
cholestrerolperc,
sodiumgram,
sodiumperc,
totalcarbohydrate,
totalcarbohydrateperc,
dietaryfiber,
dietaryfiberperc,
totalsugarperc,
protein,
vitamin,
calcium,
iron,
potassium,
potassiumperc,
vitaminperc,
calciumperc,
ironperc} = food;
    


return (
<>

<Navbar/>


<div style={{margin:"auto", maxWidth:"960px"}}>

<div className='hero-FoodDetails'>
<div className='hero-details-box'>
<h1 className='hero-FoodDetails-text'>{item}
<br className='hero-text-br'/>

</h1>
<p className='hero-FoodDetails-subtext'>
{desc}</p>

<div className='btn-price-box'>
<button className='hero-btn'>Add to Cart</button>
<p>{price}</p>
</div>
</div>

<div className='hero-FoodDetails-img'>
<img src={imgurl} alt='...'/></div>

</div>
{/**product item stops here */}
</div>
<div className="menu-details-box">
<h1 style={{textAlign:"center",borderBottom:"solid 1px"}}>Nutrition Facts</h1>


<h2 style={{fontWeight:"lighter"}}>Serving Size {servingsizenumber} oz. {servingsizegrams}</h2> 
<h2 style={{fontWeight:"lighter",borderBottom:"solid 15px",lineHeight:"35px"}}>
Servings Per Container : {servenumber}
</h2>
<h1 style={{borderBottom:"solid 5px",lineHeight:"50px",fontSize:"24px"}}>Amount Per Serving</h1>
<div className='calories-box'>
<h1> Calories {calories}</h1>
<h1>Calories From Fat {caloriesfromfat}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Total Fat {totalfat}</h1>
<h1>{totalfatperc}</h1>
</div>


<div style={{display:"flex",justifyContent:"space-around",borderBottom:"solid 5px"}}>
<h3 className='satfat' >Saturated Fat {satfat}</h3>
<h3 className='satgrams' >{satfatgram}</h3>
</div>

<div style={{display:"flex",justifyContent:"space-around",borderBottom:"solid 5px"}}>
<h3 className='transfat' >Trans Fat {transfat}</h3>
<h3 className='satgrams' >{satfatgram}</h3>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Cholestrerol {cholestrerolgram}</h1>
<h1>{cholestrerolperc}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Sodium {sodiumgram}</h1>
<h1>{sodiumperc}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Total Carbohydrate {totalcarbohydrate}</h1>
<h1>{totalcarbohydrateperc}</h1>
</div>


<div style={{display:"flex",justifyContent:"space-around",borderBottom:"solid 5px"}}>
<h3 className='satfat' >Dietary Fiber {dietaryfiber}</h3>
<h3 className='satgrams' >{dietaryfiberperc}</h3>
</div>

<div style={{display:"flex",justifyContent:"space-around",borderBottom:"solid 5px"}}>
<h3 style={{lineHeight:"50px"}} className='transfat' >Total Sugars {totalsugarperc}</h3>

</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Protein {protein}</h1>
<h1>{totalcarbohydrateperc}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Vitamin D {vitamin}</h1>
<h1>{vitaminperc}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Calcium {calcium}</h1>
<h1>{calciumperc}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Iron {iron}</h1>
<h1>{ironperc}</h1>
</div>

<div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid 5px"}}>
<h1 style={{lineHeight:"50px",fontSize:"24px"}}>Potassium {potassium}</h1>
<h1>{potassiumperc}</h1>
</div>


<h1 style={{borderBottom:"solid 1px",fontSize:"20px"}}>Not a significant source of added sugars.</h1>

<p style={{lineHeight:"27px",fontSize:"18px",padding:"0 1rem"}}>* The % Daily Value (DV) tells you how much a nutrient 
    in a serving of food contributes to a daily diet. 2,000
    calories a day is used for geneal nutrition advice.
</p>
</div>


</>


)
}

export default FoodDetails