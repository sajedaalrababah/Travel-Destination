import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";




function Home (props){
    return(<>
        <Header></Header>
        <div className='contain'>
       
          {
            props.data.map((element)=>
              <Tours name={element.name} image={element.image}  />
            )
          }
        
     </div>

     <Footer></Footer>
     </>
    );
}
export default Home;
