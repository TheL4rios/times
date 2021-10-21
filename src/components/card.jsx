import React from 'react';

export const Card = ({ _id, name, description, time, handleRemove }) => {
    return (
        <div className="card bg-card my-3 animate__animated animate__zoomIn">
            <div className="card-body">
                <button className="btn btn-danger btn-close" onClick={ () => handleRemove(_id) }>X</button>
                <div className="d-flex flex-column" style={{ width: 'fit-content' }}>
                    <span style={{ width: 'fit-content' }} className="badge badge-primary">{ time }</span>
                    <span><strong>Nombre:</strong> { name }</span>
                    {
                        description && <span><strong>Descripción:</strong> { description }</span>
                    }
                </div>
            </div>
        </div>
    );
}
