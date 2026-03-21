import { useEffect, useState } from "react";
import axios from "axios";


const endpoint = "https://fakestoreapi.com/products";

export default function Prodotti() {

    const [prodotti, setProdotti] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .then(res => setProdotti(res.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <main className="container mt-4">
            <div className="row">
                {prodotti.map(p => (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={p.id}>

                        <div className="card h-100 shadow-sm">

                            <img src={p.image} className="card-img-top p-3" alt={p.title} />

                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{p.title}</h6>

                                <p className="card-text small">
                                    {p.description.substring(0, 60)}...
                                </p>

                                <p className="fw-bold">{p.price} €</p>

                                <p className="small">⭐ {p.rating.rate}</p>

                                <button className="btn btn-primary mt-auto">
                                    Dettagli
                                </button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </main>
    )
}