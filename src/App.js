import ReactDOM from "react-dom/client";
import Form from "./myComponents/Form";

export default function App(props) {
  return (
    <>
      <Form heading={"Make the Form"}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);