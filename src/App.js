import "bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "./components/Map/Map";
import Brand from "./components/navBar/Brand";
import Form from "./components/Form/Forms";
import Article from "./components/Articles/Article";


function App() {

const markers = [
  { position: [51.505, -0.09], title: 'Marker 1' },
  { position: [51.51, -0.1], title: 'Marker 2' },
    // Ajoutez d'autres marqueurs ici
];


  return (
    <>
      <Brand />
      <div className="mainContainer" style={{ display: "flex" }}>
        <MapContainer markers={markers} />
        <Form />
        <Article/>
        
      </div>
    </>
  );
}

export default App;
