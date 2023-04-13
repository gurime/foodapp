import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Image from 'next/image'
import React from 'react'

import itfeed from '../img/chichdesign.png'

const sendfeedback = () => {
return (
<>
<Navbar/>
<div className='contact_title_img'>
<Image height={300} src={itfeed} priority  alt='...'/>
<p>
We appreciate you taking the time to get in touch with Chick-a-licious.  If you'd want us to route your comment
to the appropriate Chick-a-licious section, please give the following information:
</p>
</div>

<div style={{display:'grid'}}>
<div className='formbox'>
<label style={{
marginBottom:'10px',
fontSize:'20px'}} htmlFor="name">Full Name</label>
<input type="text" id="name" pwa2-uuid="EDITOR/input-A1A-0D8-40CCD-1CC" pwa-fake-editor=""/>
<label htmlFor="email" style={{
marginBottom:'10px',
fontSize:'20px'}}>Email</label>
<input type="email" id="name"/>
<label htmlFor="topic" style={{marginBottom:'1rem'}}> <br/>
 What is the subject of your inquiry or comment?</label>
<select name="state" id="topic"><option value="select a topic">Select a Topic</option>
<option value="general question">General Question</option>
<option value="opinion">Opinion</option>
<option value="contact editor">Contact Editor</option>
<option value="career opportunities">Career Opportunities</option>
<option value="about donations">About Donations</option>
<option value="advertising">About Advertising</option>
</select>
<label style={{marginBottom:'1rem'}} htmlFor="topic"> <br/> Message:</label>
<textarea name="" id="" cols="50" rows="20">
</textarea>
<button>Submit Comment</button>
</div>

</div>









<h1 style={{
borderBottom:'solid grey 1px',
textAlign:'center',
color:'gray',
fontSize:'20px'}}>Let's Connect</h1>
{/* <div className='feedback-block'>

 

<Image  style={{

margin:'1rem auto',
objectFit:'cover',
width:'100%',
height:'auto',
}}  src={feedbacimg} alt='...' />
</div> */}
<Footer/>
</>
)
}

export default sendfeedback