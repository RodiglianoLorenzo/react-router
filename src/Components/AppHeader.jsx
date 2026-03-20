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

        </header>
    )
}