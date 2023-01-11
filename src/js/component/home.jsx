import React, {useState} from "react";

//create your first component
const Home = () => {

	//declaracion de estados
	// espacio de memoria, la funcion que actualiza elvalor inicial
	const[activity, setActivity]=useState("")//1. creamos un estado del input activity
	const[data, setData]=useState([])//2. creamos un estado del array activity

	//3.vinculamos la funcion
	//e es un evento nativo de js
	function handleActivity(e) { //lleva una e(event) como parámetro que es un evento
		console.log(e.target.value); //traer el valor del evento como objeto
		setActivity(e.target.value); //estoy guardando en mi espacio de memoria activity lo que se ingrese en el input
		// setData(e.target.value);
	}
	console.log(activity);

	//Función para guardar datos en el array
	// 4. procesamos todos los datos del formulario
	function sendData(e) {
		if (e.key === "Enter"){
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
		setData([...data, activity])} //spread operator
	}
	console.log(data);

	//we loop through the data array using the JavaScript map() function
	const listItems = data.map((item, index) =>
  	<li key={item}>{item} <button onClick={() => remove(index)}>X</button></li>
	);

	//función para eliminar item en array
	const remove = (id) => {
		setData (data.filter((item, index) => {
			return index !== id;
		  }),
		);
		console.log(id);
	  };
	
	
	return (
		<>
		<div className="container">
  			<div className="mb-3">
    			<label htmlFor="activity" className="form-label">Activity</label>
    			{/*2. definimos el evento ochange en el input */}
				<input type="text" className="form-control" id="activity" onChange={handleActivity} onKeyDown={sendData}/>
				{/* hago una ul listando cada uno de los elementos */}
				<ul>{listItems}</ul>
  			</div>
		</div>
		</>
	);
};

// etiqueta <data.lenght>

export default Home;
