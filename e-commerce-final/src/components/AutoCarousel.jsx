import { Carousel } from 'react-bootstrap';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function BootstrapCarousel() {
  return (
    <div className="container my-4">
      <Carousel fade interval={3000} pause={false}>
        {images.map((imagen, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 img-fluid rounded"
              src={imagen}
              alt={`Imagen ${index}`}
              style={{ objectFit: 'cover', height: '400px' }} // puedes ajustar la altura
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;