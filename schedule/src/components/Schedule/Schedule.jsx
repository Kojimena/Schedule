import React from 'react';
import './Schedule.css';


const Schedule = () => { 

    return (
        <div>
          <h1>Horario</h1>
          <div className="grid">
          <div className="grid-item-hora">Hora</div>
            <div className="grid-item-dia">Lunes</div>
            <div className="grid-item-dia">Martes</div>
            <div className="grid-item-dia">Miercoles</div>
            <div className="grid-item-dia">Jueves</div>
            <div className="grid-item-dia">Viernes</div>



          </div>
        </div>
    );
}

export default Schedule;
