import { NavLink, Link } from "react-router-dom";
import menu from '../Data/menu'

export default function AppHeader() {

    return (
        <header className="d-flex flex-column">

            <div className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Emporio.</h2>
                <nav className="d-flex gap-3">
                    {menu.map(item => (
                        <NavLink
                            to={item.path}
                            key={item.id}
                            className="nav-link"
                        >
                            {item.text}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="text-center mt-5">
                <h5 className="mt-5 Testo_title fst-italic">NUOVA COLLEZIONE 2026</h5>
                <h1>
                    LO STILE CHE CERCAVI, <span className="Testo_title fst-italic">FINALMENTE</span>
                </h1>
                <p className="mt-5">
                    Scopri migliaia di prodotti selezionati con cura.<br />
                    Dalla moda all'elettronica, tutto in un unico posto.
                </p>
            </div>

            <div>
                <nav className="d-flex justify-content-center gap-3 mb-5">
                    <Link to={menu[2].path} className="nav-midle">Esplora i prodotti</Link>
                    <Link to={menu[1].path} className="nav-midle">Chi siamo</Link>
                </nav>

            </div>

        </header>
    )
}