import ReactDOM from "react-dom/client";
// import Header from "./myComponents/Header";
import Calculator from "./pages/Calculator";

export default function App() {
  return (
    <>
      {/* <Header/> */}
      <Calculator />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);