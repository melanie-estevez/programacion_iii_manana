import {  useState } from "react";

export default function ToggleMessage(){
  const [visible, setVisible] = useState(true)
  return(
    <>
      <button onClick={()=>setVisible(!visible)}>Mostrar/Ocultar</button>
      {visible&&<p>Este vehiculo esta disponible</p>}
    </>
  )
}