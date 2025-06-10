
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/Iamges/img1.jpg"
import img2 from "../assets/Iamges/img2.jpg"
import img3 from "../assets/Iamges/img3.jpg"
function CarouselFade() {
    return (
        <div>

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img style={{height:"80vh"}}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white', fontFamily:"algerian", fontStyle:"italic"}}>J.R.R. Tolkien (The Lord of the Rings)</h3>
                        <p style={{fontSize:"25px", fontFamily:'Times New Roman, serif', color: 'white' }}>"All we have to decide is what to do with the time that is given us."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"80vh"}}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ fontFamily:"algerian", fontStyle:"italic"}}>C.S. Lewis (The Chronicles of Narnia)</h3>
                        <p style={{fontSize:"25px", fontFamily:'Times New Roman, serif'}}>"You are never too old to set another goal or to dream a new dream."</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"80vh"}}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontFamily:"algerian", color: 'white', fontFamily:"algerian", fontStyle:"italic"}}>J.K. Rowling (Harry Potter)</h3>
                        <p style={{ fontSize:"25px", fontFamily:'Times New Roman, serif', color: 'white' }}>"It is our choices, that show what we truly are, far more than our abilities."</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselFade;
