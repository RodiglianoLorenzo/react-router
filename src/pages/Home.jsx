import { NavLink, Link } from "react-router-dom";
import menu from '../Data/menu'

export default function Home() {

    return (
        <>
            <main>
                <div className="Home_main">
                    <div className="text-center mt-5 ">
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
                </div>

                <div className="container py-5">
                    <div className="row g-4">

                        <div className="col-12 col-md-4">
                            <div className="card h-100 text-center shadow-sm border-0">
                                <div className="card-body ">
                                    <div className="fs-1 mb-3">🚀</div>
                                    <h5 className="card-title">Spedizione Rapida</h5>
                                    <p className="card-text">
                                        Consegna in 24/48 ore su tutti gli ordini. Spedizione gratis sopra i 49€
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card h-100 text-center shadow-sm border-0">
                                <div className="card-body">
                                    <div className="fs-1 mb-3">🔒</div>
                                    <h5 className="card-title">Pagamenti Sicuri</h5>
                                    <p className="card-text">
                                        Transazioni protette con crittografia SSL di ultima generazione.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card h-100 text-center shadow-sm border-0">
                                <div className="card-body">
                                    <div className="fs-1 mb-3">↩️</div>
                                    <h5 className="card-title">Resi Gratuiti</h5>
                                    <p className="card-text">
                                        Non sei soddisfatto? Resi gratuiti entro 30 giorni dall'acquisto
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}