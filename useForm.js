import { useState } from "react"



export const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState)

    const reset=()=>{
        setValues(initialState);
    }
    const handleInputChange=({target})=>{
        // console.log(target.name);
        setValues({
            ...values,
            [target.name]:target.value
            //estas diciendo que al arreglo values le agregues a descripcion el valor delo que se haya escrito en el formulario 
            //recordar que targe.value tiene lo que pusiste en el formlario 
        });
    }

    return [values, handleInputChange, reset];//regres un arreglo con valores y la funcion para nodificar esos valores del formulario
}

