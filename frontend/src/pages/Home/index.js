import { useContext } from "react";
import { ApplicationContext } from "../../common/context";
import { switchPage } from "../../common/helpers";



import './home.css';
const Home = () => {

    const {contextMethods} = useContext(ApplicationContext);
    const { currentPage } = contextMethods;


    
    return (<> 

        <div className="home-container">
            <div className="home-content">
            
            {switchPage(currentPage)}


            
            </div>
        </div>
    </>)
   
}

export default Home;