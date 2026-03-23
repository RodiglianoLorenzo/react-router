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

    if (!prodotti) return <p>Caricamento...</p>;

    return (
        <div className="container mt-4">
            <h2>{prodotti.title}</h2>

            <img src={prodotti.image} alt={prodotti.title} width="200" />

            <p>{prodotti.description}</p>

            <p className="fw-bold">{prodotti.price} $</p>

            <p>⭐ {prodotti.rating.rate}</p>
        </div>
    );
}