import { Container } from "react-bootstrap";
import BootstrapCarousel from './AutoCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainBootstrap() {
  return (

      <main style={{ padding: "20px", margintop: "20px", backgroundColor: "lightblue" }}>     
                <BootstrapCarousel />         
      </main> 

  );
}

export default MainBootstrap;
