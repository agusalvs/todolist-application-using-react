import React, {useState} from "react";

//create your first component
const Home = () => {

	//declaracion de estados
	// espacio de memoria, la funcion que actualiza elvalor inicial
	const[activity, setActivity]=useState("")//1. creamos un estado del input activity
	const[data, setData]=useState([])//2. creamos un estado del array activity

	// //3.vinculamos la funcion
	// //e es un evento nativo de js
	// function handleActivity(e) { //lleva una e(event) como parámetro que es un evento
	// 	console.log(e.target.value); //traer el valor del evento como objeto
	// 	setActivity(e.target.value); //estoy guardando en mi espacio de memoria activity lo que se ingrese en el input
	// 	// setData(e.target.value);
	// }
	// console.log(activity);

	//Función para guardar datos en el array
	// 4. procesamos todos los datos del formulario
	function sendData(e) {
		if (e.key === "Enter"){
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
		setData([...data, activity]) //spread operator
		setActivity("")
	} 
	}
	console.log(data);

	//we loop through the data array using the JavaScript map() function
	// const listItems = data.map((item, index) =>
  	// <li key={item}>{item} <button onClick={() => remove(index)}>X</button></li>
	// );

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
			<div className="container mx-auto mt-4">

				<div className="mx-auto p-4" style={{borderRadius:"20px",backgroundColor: "RGB(134, 185, 176)", width:"500px"}}>

					<label htmlFor="activity" className="form-label">Activity</label>

					{/*2. definimos el evento ochange en el input */}
					<input type="text" value={activity} className="form-control" id="activity" onChange={e=>setActivity(e.target.value)} onKeyDown={sendData}/>

					{/* hago una ul listando cada uno de los elementos */}
					<ul className="py-2 align-middle">{data.map((item, index) =>
						<li className="py-1" key={index}> 
						{item} 
							<button className="btn-close align-middle ms-2" aria-label="Close" style={{height:"5px", width:"5px"}} onClick={() => remove(index)}>
								<i className="fa fa-square-xmark"></i>
							</button>
						</li>
					)}</ul>
				</div>
			</div>
		</>
	);
};

// etiqueta <data.lenght>

export default Home;
