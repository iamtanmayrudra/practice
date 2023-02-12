import ReactDOM from "react-dom/client";
// import Form from "./myComponents/Form";
import Alert from "./myComponents/Alert";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      {/* <Form heading={"Make the Form"}/> */}
      <Alert/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);