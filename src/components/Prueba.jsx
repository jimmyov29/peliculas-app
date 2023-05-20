import { useState,useEffect } from "react";

export function Prueba() {
  const [likes, setLikes] = useState(0);
  const darLike=()=>{setLikes(likes + 1);}
  const quitarLike=()=>{setLikes(likes - 1);}

  useEffect(darLike,[]) /// useEffect lo que hace es estar escuchando si hay algun cambio en los componentes

  return (
    <div>
    <h1> Likes {likes}</h1>
      <button
        onClick={darLike}
      >
        Dar like
      </button>
      <button onClick={quitarLike}> Quitar likes
      </button>
    </div>
  );
}

export default Prueba;
