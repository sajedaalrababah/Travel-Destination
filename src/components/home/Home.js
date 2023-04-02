import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
const data= require('../../data/db.json')



function Home (props){

    return(
        <>
     <Header></Header>
     <Tours mydata={data}></Tours>
     <Footer></Footer>
     </>
    );
}
export default Home;
