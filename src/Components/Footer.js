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

<li><Link href='#!' className="#!">About iTruth News</Link></li>

<li><Link href='#!'>Investor Relations </Link></li>

<li><Link href='#!' >Advertise</Link></li>

<li><Link href='#!'>Company News</Link></li>

</ul>
</div>
{/*first tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">News</div>

<ul className="footer-navlink">
<li><Link href='#!'>Finance</Link></li>

<li><Link href='#!'>Gaming</Link></li>

<li><Link href='#!'>Entertainment </Link></li>

<li><Link href='#!'>Fashion</Link></li>

<li><Link href='#!'>Education</Link></li>

</ul>
</div>
{/*seconds tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">World News</div>

<ul className="footer-navlink">
<li><Link href='#!'>Mexico</Link></li>

<li><Link href='#!'>South America</Link></li>

<li><Link href='#!'>Europe </Link></li>

<li><Link href='#!'>Asia</Link></li>

<li><Link href='#!'>Africa</Link></li>

</ul>
</div>
{/*third tablebox stops here*/}
<div className="footer-tablebox" style={{borderRight:'none'}}> 
<div className="footer-headline">Help Center</div>

<ul className="footer-navlink" style={{borderBottom:'none'}}>
<li><Link  href='#!'>Contact iTruth News</Link></li>

<li><Link  href='#!'>terms of Use</Link></li>

<li><Link  href='#!'>Privacy Policies </Link></li>

<li><Link  href='#!'>Cookie Policies</Link></li>

<li><Link href='#!'>Send Feedback</Link></li>

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