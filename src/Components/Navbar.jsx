import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Css/Navbar.css'
import logo from '../assets/food-logo.png'
const Navbar = () => {
const navlinksStyles =({isActive}) =>{
return{
color:isActive ? 'white' : 'black',
            
}
}


return (
<>
<div className="navbar">
<div className='logo' >
<Link style={{color:'white'}} to='/'>
<img style={{height:'34px'}} src={logo} alt="" /></Link>
</div>
<div style={{margin:"auto"}}>
<NavLink style={navlinksStyles} to='/'>Home</NavLink>
</div>
</div>
</>
)
}

export default Navbar