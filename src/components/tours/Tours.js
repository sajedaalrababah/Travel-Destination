import './Tours.css';


function Tours(props){
    let data=props.data
    return(
      <main>{
        data.map((item)=>{
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name}></img>
                       
                    </div>
                )
            })
        }</main>
    )
}
export default Tours;