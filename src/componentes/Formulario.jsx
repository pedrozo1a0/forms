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
    
    const agregarInformacion=(e)=>{
        e.preventDefault();
        props.setInformaciones([...props.informaciones, ficha]);
        console.log(props.informaciones);
    }

    const [longCaracteresName, setLongCaracteresName]= useState(3);
    const [longCaracteresLastName, setLongCaracteresLastName]= useState(3);
    const [longCaracteresEmail, setLongCaracteresEmail]= useState(5);
    const [longCaracteresPassword, setLongCaracteresPassword]= useState(8);
    const [passwordValue, setPasswordValue]= useState("");
    const [confirmPasswordValue, setConfirmPasswordValue]= useState("");



    const actualizarFicha=(valorNuevo, campo)=>{
        setFicha( {...ficha, [campo]: valorNuevo} );
    }

    
    const actualizarInfoName=(valor, campo, longitud, callback)=>{
        callback(valor, campo, longitud);
        setLongCaracteresName(longitud);
    }
    const actualizarInfoLastName=(valor, campo, longitud, callback)=>{
        callback(valor, campo, longitud);
        setLongCaracteresLastName(longitud);
    }
    const actualizarInfoEmail=(valor, campo, longitud, callback)=>{
        callback(valor, campo, longitud);
        setLongCaracteresEmail(longitud)
    }
    
    const verificarPassword=(valor, campo, longitud, callback)=>{
        callback(valor, campo, longitud);
        setLongCaracteresPassword(longitud);
        setPasswordValue(valor);
        
    }

    const actualizarInfoPassword=(valor, campo,  callback)=>{
        callback(valor, campo, 0 );
        console.log(valor==ficha.password);
        setConfirmPasswordValue(valor);
    }

    return(
        <>
        <form onSubmit={agregarInformacion}>
            <div className="container">
                <div>
                    <label htmlFor="name" >First Name</label>
                    <input type="text" id="name" autoComplete="off" onChange={(e)=>{actualizarInfoName(e.target.value, "firstName", e.target.value.length, actualizarFicha  )}}  />
                    {longCaracteresName<2 ? <p>El campo debe tener por lo menos dos caracteres</p>  : ""}
                </div>
                <div>
                    <label htmlFor="lastName" >Last Name</label>
                    <input type="text" id="lastName" onChange={(e)=>{actualizarInfoLastName(e.target.value, "lastName", e.target.value.length, actualizarFicha )}}/>
                    {longCaracteresLastName<2 ? <p>El campo debe tener por lo menos dos caracteres</p>  : ""}
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" autoComplete="off" onChange={(e)=>{actualizarInfoEmail(e.target.value, "email", e.target.value.length, actualizarFicha )}}/>
                    {longCaracteresEmail<5 ? <p>El campo debe tener por lo menos cinco caracteres</p>  : ""}
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" onChange={(e)=>{verificarPassword(e.target.value, "password", e.target.value.length, actualizarFicha )}}/>
                    {longCaracteresPassword<8 ? <p>El campo debe tener por lo menos ocho caracteres</p>  : ""}
                </div>
                <div>
                    <label htmlFor="confirmPassword" >Confirm<br/>Password</label>
                    <input type="password" id="confirmPassword" onChange={(e)=>{actualizarInfoPassword(e.target.value, "confirmPassword", actualizarFicha)}}/>
                    {confirmPasswordValue===passwordValue  ? "" : <p>Password doesnt coincide</p>    }
                </div>
            </div>
        <button>Enviar informacion</button>
        </form>
        </>
    )
}