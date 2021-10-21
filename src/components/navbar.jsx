import React from 'react';

export const Navbar = ({ totalTime, handleNewTime, handleClean }) => {
    return (
        <div className="container">
            <ul className="nav justify-content-end mb-5">
                <li className="nav-item m-2 d-flex align-items-center">
                    <span className="badge badge-success" style={{ fontSize: '20px' }}>Tiempo total: {totalTime}</span>
                </li>
                <li className="nav-item m-2">
                    <button className="btn btn-primary" onClick={handleNewTime}>Nuevo</button>
                </li>
                <li className="nav-item m-2">
                    <button className="btn btn-danger" onClick={ handleClean }>Limpiar</button>
                </li>
            </ul>
        </div>
    );
}
