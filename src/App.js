import ReactDOM from "react-dom/client";
// import Header from "./myComponents/Header";
import DarkMode from "./pages/DarkMode"

export default function App() {
  return (
    <>
      {/* <Header/> */}
      <DarkMode/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);