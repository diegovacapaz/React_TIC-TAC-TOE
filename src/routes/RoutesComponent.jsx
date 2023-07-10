import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Board from "../components/Board/Board";
import Error404 from "../components/Error404/Error404";

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route index exact path="/" element={<Menu></Menu>}></Route>
                <Route index exact path="/game" element={<Board></Board>}></Route>
                <Route index exact path="/*" element={<Error404></Error404>}></Route>
            </Routes>
        </Router>
    );
}

export default RoutesComponent;