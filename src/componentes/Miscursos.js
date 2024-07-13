import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MisCursos = () => {
    const [cursosMatriculados, setCursosMatriculados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCursos = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
        setCursosMatriculados(storedCursos);
    }, []);

    const eliminarCurso = (curso) => {
        const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar el curso: ${curso}?`);

        if (confirmar) {
            let cursos = cursosMatriculados.filter(c => c !== curso);
            localStorage.setItem('cursosMatriculados', JSON.stringify(cursos));
            setCursosMatriculados(cursos);
            alert('Has eliminado el curso: ' + curso);
        }
    };

    const verDetalles = (curso) => {
        localStorage.setItem('cursoActual', curso);
        navigate('/detallecurso');
    };

    return (
        <div className="cr-body">
            <header className="cr-header">
                <div className="cr-container">
                    <nav className="cr-nav">
                        <ul className="cr-ul">
                            <li className="cr-li"><Link to="/principal">Inicio</Link></li>
                            <li className="cr-li"><Link to="/cursos">Cursos</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="cr-mis-cursos">
                <div className="cr-container">
                    <h2 className="cr-h2">Mis Cursos Matriculados</h2>
                    <div id="cursos-matriculados">
                        {cursosMatriculados.length > 0 ? (
                            cursosMatriculados.map((curso, index) => (
                                <div key={index} className="cr-curso">
                                    <h3 className="cr-h3">{curso}</h3>
                                    <button className="cr-btn-detalle" onClick={() => verDetalles(curso)}>Ver Detalles</button>
                                    <button className="cr-btn-eliminar" onClick={() => eliminarCurso(curso)}>Eliminar</button>
                                </div>
                            ))
                        ) : (
                            <p>No estás matriculado en ningún curso.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MisCursos;
