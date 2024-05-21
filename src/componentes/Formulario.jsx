import { useState } from "react";

export function Formulario (props){
    const fichaInicial={
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    const [ficha, setFicha]= useState(fichaInicial);
    const actualizarFicha=(valorNuevo, campo)=>{
        setFicha( {...ficha, [campo]: valorNuevo} );
        
    }
    const agregarInformacion=(e)=>{
        e.preventDefault();
        props.setInformaciones([...props.informaciones, ficha]);
        console.log(props.informaciones);
    }
    return(
        <>
        <form onSubmit={agregarInformacion}>
            <div className="container">
                <div>
                    <label htmlFor="name" >First Name</label>
                    <input type="text" id="name" onChange={(e)=>{actualizarFicha(e.target.value, "firstName" )}}  />
                </div>
                <div>
                    <label htmlFor="lastName" >Last Name</label>
                    <input type="text" id="lastName" onChange={(e)=>{actualizarFicha(e.target.value, "lastName" )}}/>
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" onChange={(e)=>{actualizarFicha(e.target.value, "email" )}}/>
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" onChange={(e)=>{actualizarFicha(e.target.value, "password" )}}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword" >Confirm<br/>Password</label>
                    <input type="password" id="confirmPassword" onChange={(e)=>{actualizarFicha(e.target.value, "confirmPassword" )}}/>
                </div>
            </div>
        <button>Enviar informacion</button>
        </form>
        </>
    )
}