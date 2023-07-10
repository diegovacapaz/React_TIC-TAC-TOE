import "./Menu.css";
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate = useNavigate();

    return (
        <section className="header">
            <div>
                <p>Press the button to start</p>
                <button className="btn btn-white" type="button" onClick={()=> navigate("/game")}>Play</button>
            </div>
        </section>
    );
}

export default Menu;