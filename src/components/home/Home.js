import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";



function Home (props){
    return(<>
         
        
        <Header></Header>
        <main>
        <Tours data={props.data}></Tours>
        </main>
        
    

     <Footer></Footer>
     </>
    );
}
export default Home;
