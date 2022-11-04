import React from 'react'
export const Formulario = () => {

    const [nombre, setNombre] = React.useState("")
    const [apellido, setApellido] = React.useState("")
    const [lista, setLista] = React.useState([])
    const [id, setId] = React.useState(-1)

    const guardarDatos=(e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            alert("Ingrese otro nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese otro apellido")
            return
        }
        // console.log("agregando:"+nombre+""+apellido)
        setLista([
            ...lista,
            {nombre: nombre, apellido: apellido}
        ])
        //limpiar los estados
        e.target.reset()
        //limpiar los estados
        setNombre("")
        setApellido("")
    }

    const eliminarDatos=() => {
        if (id < 0) {
            alert("El ID ingresado no existe.")
            return
        }
        setLista(lista.filter((item,index)=>index+1 !== id))
        setId(-1)
        document.getElementById("Nombre").value ="";
        document.getElementById("Apellido").value ="";
        document.getElementById("ID").value ="";
    }
    
    const editarDatos=() => {
        if (id < 0) {
            alert("El ID ingresado no existe.")
            return
        }
        if (!nombre.trim()) {
            alert("Ingrese el nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese el apellido")
            return
        }
        setLista(lista.map((item,index)=>{
            if (index+1 === id) {
                return{nombre: nombre, apellido: apellido}
            }
            return item        
        }))
        document.getElementById("Nombre").value ="";
        document.getElementById("Apellido").value ="";
        document.getElementById("ID").value ="";
        
        setNombre("")
        setApellido("")
        setId(-1)
    }

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={guardarDatos}>
            <input onChange={(e)=>setNombre(e.target.value)} id= "Nombre" type="text" placeholder='Ingresar el nombre' />
            <input onChange={(e)=>setApellido(e.target.value)} id= "Apellido" type="text" placeholder='Ingresar el apellido' />
            <br></br>  
            <div>
                <button type='submit'>Enviar</button>
                <input onClick={eliminarDatos} type="button" value="Eliminar"/>                
                <h3>Lista de usuairos</h3>
                <ol>
                    {
                        lista.map((x, i)=>(<li key={i}>{x.nombre} {x.apellido}</li>))
                    }
                </ol>
            </div>
            <input onChange={(e)=>setId(+e.target.value)} id= "ID" type="number" placeholder='Ingresar el ID' />
            <input onClick={editarDatos} type="button" value="Editar"/>
        </form>
    </div>
  )
}

export default Formulario;
