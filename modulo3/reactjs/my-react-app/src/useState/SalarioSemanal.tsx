import { useState } from "react";
 
export default function SalarioSemanal(){
    const [horasTrabajadas, setHoras] = useState(0);
    const [valorHora, setHora]=useState(0);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Salario: ${(horasTrabajadas * valorHora)}`)
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Horas Trabajadas"
              onChange={(e)=> setHoras(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Valor Hora"
              onChange={(e)=> setHora(Number(e.target.value))}
            />
            <button type="submit">Enviar</button>
        </form>
    )

}