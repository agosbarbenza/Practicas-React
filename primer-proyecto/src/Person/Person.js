//primero hay que importar react:
import React from 'react';
import './Person.css';
const person = (props)=>{ //sintaxis recomendada para hacer funciones.
return (
<div className="Person">
<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</div>
)
}

export default person;