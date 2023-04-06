
import './Tour.css'

const Tour= (props)=>{
return(
<>
<div className='card'>
<h1>{props.name}</h1>

<img src={props.image} alt={props.name} />
</div>
         
      
</>

)

}
export default Tour;
