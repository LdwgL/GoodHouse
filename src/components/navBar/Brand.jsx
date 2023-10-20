import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Brand() {
  return (
    <>
   <Navbar className="bg-body-tertiary"  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img id='house'
              alt=""
              src="house.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Good House
          </Navbar.Brand>
        </Container>
      </Navbar>
 </>
  );
}

export default Brand;