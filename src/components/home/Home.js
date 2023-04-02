import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
const data= require('../../data/db.json')



function Home (props){

    return(
        <div className='contain'>
     <Header></Header>
     <Tours data={data}></Tours>
     <Footer></Footer>
     </div>
    );
}
export default Home;
