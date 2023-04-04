import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from '../../data/db.json';



function Home (props){
    return(<>
         
        <div className='contain'>
        <Header></Header>
          {
           data.map((element)=>
              <Tours name={element.name} image={element.image}  />
            )
          }
        
     </div>

     <Footer></Footer>
     </>
    );
}
export default Home;
