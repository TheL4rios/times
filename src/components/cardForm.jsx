import React, { useState } from 'react';

export const CardForm = ({ setNewTime, setTimes }) => {

    const [showError, setShowError] = useState(false);
    const [data, setData] = useState({
        name: '',
        time: 0,
        description: ''
    });

    const handleCancel = (e) => {
        e.preventDefault();
        setNewTime(false);
    }

    const handleSave = (e) => {
        e.preventDefault();
        
        if (!data.name || !data.time) {
            setShowError(true);
            return;
        }
        setTimes(time => [...time, {
            ...data,
            _id: new Date().getTime()
        }]);
        setShowError(false);
        setNewTime(false);
    }

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        });
    }

    return (
        <div className="card bg-card mb-5 animate__animated animate__bounceInDown">
            <div className="card-body">
                {
                    showError && <div className="alert alert-danger" role="alert">
                        Asegurese de llenar todos los campos
                    </div>
                }
                <form className="" onSubmit={ handleSave }>
                    <div className="form-row form-group">
                        <div className="col-6">
                            <input autoComplete="off" type="text" className="form-control" placeholder="Nombre del proyecto" name="name" onChange={ handleChange }/>
                        </div>
                        <div className="col-6">
                            <input  autoComplete="off" type="number" step="any" className="form-control" placeholder="Tiempo" name="time" onChange={ handleChange }/>
                        </div>
                    </div>
                    
                    <div className="form-row form-group">
                        <div className="col-12">
                            <textarea  autoComplete="off" type="text" className="form-control" placeholder="Descripción" name="description" onChange={ handleChange }/>
                        </div>
                    </div>

                    <div className="form-row form-group">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-secondary" onClick={ handleCancel }>Cancelar</button>
                            <button className="btn btn-primary ml-2">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
