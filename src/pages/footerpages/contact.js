import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const contact = () => {
return (
<>
<Navbar/>
<form className='formbox'>
<label htmlFor='fname'>First name</label>
<input type='text' id='fname'/>
<label htmlFor='lname'>Last name</label>
<input type='text' id='lname'/>
<label htmlFor='email'>Email</label>
<input type='email' id='email'/>
<textarea name="" id="" cols="50" rows="20">
</textarea>
<button type='submit'>Submit</button>
</form>
<Footer/>
</>
)
}

export default contact