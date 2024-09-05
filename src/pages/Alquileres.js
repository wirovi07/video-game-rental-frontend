// src/components/Alquileres.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Crea una instancia de axios para configurar la base URL
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Asegúrate de que esta URL sea la correcta para tu backend
});

const Alquileres = () => {
    const [alquileres, setAlquileres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlquileres = async () => {
            try {
                const response = await api.get('/alquileres');
                setAlquileres(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAlquileres();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Alquileres</h1>
            <ul>
                {alquileres.map(alquiler => (
                    <li key={alquiler.id}>{alquiler.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Alquileres;
