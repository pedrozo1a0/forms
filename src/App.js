import { useState } from "react"
import { Formulario } from "./componentes/Formulario";
import { Informacion } from "./componentes/Informacion";
import './App.css'
export function App(){
const [informaciones, setInformaciones]=useState([]);
    return(
        <div className="contenedor">
        <Formulario  informaciones={informaciones}
                    setInformaciones={setInformaciones}
        />
        {informaciones.map((info)=>{return(
        <Informacion      firstName={info.firstName} 
                        lastName={info.lastName}
                        email={info.email}
                        

        
        />)})}
        </div>
    )
}