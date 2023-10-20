import Form from "react-bootstrap/Form";
import "./Form.css";
import Button from "./Button/Button";
function Formulaire() {
  return (
    <section
      style={{
        width: "50vw",
        background: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-around",
        }}
      >
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Location"
          style={{
            height: "45px",
            width: "300px",
            marginTop: "55px",
            marginRight: "50px",
            marginLeft: "40px",
          }}
        />

        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Location"
          style={{ height: "45px", width: "300px", marginTop: "54px" }}
        />
        <Button
          style={{
            display: "flex",
            width:"100px",
            marginTop:"52px",
            marginLeft:"40px"
          }}
        />
      </div>
    </section>
  );
}

export default Formulaire;
