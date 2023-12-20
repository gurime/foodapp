import Link from 'next/link'
import React from 'react'

const Card = ({post}) => {
  const {frontmatter} = post ?? {}; 
return (
<>
{frontmatter && ( 
<div className="card" >
<img src={frontmatter.cover_image} alt="" />
<div className="authflex">
<p>{frontmatter.category}</p>

</div> 
<h2 className="card-title">{frontmatter.title}</h2>
<p className="card-content">{frontmatter.excerpt.slice((0,100))}...</p>
<div style={{display:'flex',placeItems:'center',justifyContent:'space-between',padding:'0 1rem'}}>
<Link href={`/DetailsPage/${post.slug}`} className='slugbtn btn'>
  <button className="card-button" rel="noreferrer"> Delicious Food</button>
</Link>
<p style={{
color:'red'
}}>{frontmatter.price}</p>

</div>
</div>
)}
</>
)
}

export default Card