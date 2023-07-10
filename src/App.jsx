import './App.css';
import Footer from './components/Footer/Footer';
import Navigator from './components/Navigator/Navigator';
import RoutesComponent from "./routes/RoutesComponent";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navigator></Navigator>
      <main>
        <RoutesComponent></RoutesComponent>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
