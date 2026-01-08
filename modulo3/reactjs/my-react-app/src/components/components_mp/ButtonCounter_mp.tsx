import {useState} from'react';

export default function ButtonCounter(){
    const[count, setCount] = useState(0);
    const increment = ()=> setCount(count + 1);
    const decrement = ()=> setCount(count > 0 ? count - 1 : 0);
    return (
        <div>
            <h3>{count} productos:</h3>
            <button onClick = {decrement}> - </button>
            <span>  {count}   </span>
            <button onClick = {increment}> + </button>
        </div>
    );
}