import { Link } from 'react-router-dom';
import './Tours.css';
import Tour from "./tour/Tour";
const Tours = (props) => {


  return (
    <>
     {
      props.data.map(tour=>{
        return(
        <div key={tour.id }>
          <Link to ={`/city/${tour.id}`}>
            <Tour name={tour.name} image={tour.image}>
            </Tour>
          </Link>
        </div>)
      }

      )
     }
    </>
  );
}
export default Tours;