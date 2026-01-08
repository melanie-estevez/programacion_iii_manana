import { useState } from "react";

export default function Textiput(){
  const [text,setText] = useState("")
  return (
    <div>
      <p>Nombre del cliente:</p>
      <input
        type="text"
        value={text}
        onChange={e => setText( e.target.value)}
        placeholder="Nombre del cliente"
      />
    </div>
  )
}