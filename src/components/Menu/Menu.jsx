import "./Menu.css";
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate = useNavigate();

    return (
        <section className="header">
            <p>Press the button to start</p>
            <button className="btn btn-white" type="button" onClick={()=> navigate("/game")}>Play</button>
        </section>
    );
}

export default Menu;