import './Tours.css';


function Tours(props){
    return(
        <>
      <main>
        <h3>{props.name}</h3>
        <img src={props.image} alt={props.name}></img>
        </main>
       
        </>
    )
}
export default Tours;