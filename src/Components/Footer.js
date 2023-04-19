import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footLogo from '../pages/img/chichdesign.png'

const scrollTo = () =>{
window.scroll({top: 0,
behavior: "smooth"
})
}  



const Footer = () => {
return (
<>
<footer id="footer">


<div className="flex-footer">
<div className="footer-tablebox"> 
<div className="footer-headline">Get To Know Us</div>

<ul className="footer-navlink">
<li><Link href='#!'>Career</Link></li>

<li><Link href='#!' className="#!">About Chick-a-licious</Link></li>

<li><Link href='#!'>Investor Relations </Link></li>

<li><Link href='#!' >Advertise</Link></li>

<li><Link href='#!'>Company News</Link></li>

</ul>
</div>
{/*first tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Vegetables</div>
<ul className="footer-navlink">
<li><Link href='#!'>Carrots</Link></li>

<li><Link href='#!'>Broccoli</Link></li>

<li><Link href='#!'>Spinach</Link></li>

<li><Link href='#!'>Tomatoes</Link></li>

<li><Link href='#!'>Cucumbers</Link></li>
</ul>

</div>
{/*seconds tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Fruits</div>
<ul className="footer-navlink">
<li><Link href='#!'>Apples</Link></li>

<li><Link href='#!'>Bananas</Link></li>

<li><Link href='#!'>Oranges</Link></li>

<li><Link href='#!'>Strawberries</Link></li>

<li><Link href='#!'>Grapes</Link></li>
</ul>
</div>
{/*third tablebox stops here*/}
<div className="footer-tablebox" style={{borderRight:'none'}}> 
<div className="footer-headline">Help Center</div>

<ul className="footer-navlink" style={{borderBottom:'none'}}>
<li><Link  href='/footerpages/contact'>Contact Chick-a-licious</Link></li>

<li><Link  href='/footerpages/termsofuse'>terms of Use</Link></li>

<li><Link  href='/footerpages/privacy'>Privacy Policies </Link></li>

<li><Link  href='/footerpages/Cookie'>Cookie Policies</Link></li>

<li><Link href='/footerpages/sendfeedback'>Send Feedback</Link></li>

</ul>
</div>
{/*fourth tablebox stops here*/}


</div>



<p style={{color: '#fff', textAlign: 'center'}}>
&#169; Text or its affiliated companies. All rights reserved. 
</p>

<div className="footer-logo-box">

<Image width={100} onClick={scrollTo}  src={footLogo} alt="..." />

</div>
</footer>
</>
)
}

export default Footer