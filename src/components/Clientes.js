// src/components/Clientes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Crea una instancia de axios para configurar la base URL
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Asegúrate de que esta URL sea la correcta para tu backend
});

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await api.get('/clientes');
                setClientes(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Clientes</h1>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>{cliente.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Clientes;
