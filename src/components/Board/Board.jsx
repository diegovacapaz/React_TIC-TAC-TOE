import { useNavigate } from "react-router-dom";

const Board = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <section>

            </section>
            <button className="btn btn-white" type="button" onClick={()=> navigate("/")}>Volver</button>
        </>
    )
}

export default Board