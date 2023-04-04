import './Tours.css';
import Tour from "./tour/Tour";
const Tours = (props) => {


  return (
    <>
      <section className="tour section">
        <div className="container">
          <Tour name={props.name} image={props.image} id={props.id} />
          
        </div>
      </section>
    </>
  );
}
export default Tours;