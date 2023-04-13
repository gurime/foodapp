import React from 'react'
import navlogo from '../pages/img/chichdesign.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar = () => {
const router = useRouter()
return (
<>
<div className="nav">
<Image onClick={() => router.push('/')} src={navlogo} height={100} alt='...' priority />




<div className="navlinks">
<Link href="/">Home</Link>
<Link href="#!">Pizza</Link>
<Link href="#!">Steak</Link>
<Link href="#!">Fries</Link>
<Link href="#!">Chili</Link>

</div>
</div>
</>
)
}

export default Navbar