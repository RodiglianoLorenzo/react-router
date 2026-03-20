import menu from "../Data/menu";
import { Link } from "react-router-dom";

export default function AppFooter() {

    return (
        <footer className="py-4">
            <div className="text-center text-light ">
                <h1>Pronto a fare Shopping?</h1>
                <p>Oltre 200 prodotti disponibili, aggiornati in tempo reale.</p>

                <Link to={menu[2].path} className="nav-footer">Vai al prodotti</Link>
            </div>
        </footer>
    )
}