import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingoliProdotti() {

    const { id } = useParams();
    const [prodotti, setProdotti] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProdotti(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    if (!prodotti) return <p className="text-center mt-5">Caricamento...</p>;

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                        <img
                            src={prodotti.image}
                            alt={prodotti.title}
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title mb-3">{prodotti.title}</h3>
                            <p className="card-text">{prodotti.description}</p>
                            <p className="fw-bold h5">{prodotti.price} $</p>
                            <p className="text-warning">⭐ {prodotti.rating.rate} / 5</p>
                            <button className="btn btn-primary mt-3">Aquista Ora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}