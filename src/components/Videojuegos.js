// src/components/Videojuegos.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Crea una instancia de axios para configurar la base URL
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Asegúrate de que esta URL sea la correcta para tu backend
});

const Videojuegos = () => {
    const [videojuegos, setVideojuegos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideojuegos = async () => {
            try {
                const response = await api.get('/videojuegos');
                setVideojuegos(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchVideojuegos();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Videojuegos</h1>
            <ul>
                {videojuegos.map(videojuego => (
                    <li key={videojuego.id}>{videojuego.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Videojuegos;
