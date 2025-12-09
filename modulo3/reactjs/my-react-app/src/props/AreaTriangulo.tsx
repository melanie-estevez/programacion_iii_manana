import { useState } from 'react';

export default function AreaTriangulo() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Resultado: ${(base * altura)/2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={(e) => setBase(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
      />
      <button type="submit">Enviar</button>
    </form>
    
  );
}