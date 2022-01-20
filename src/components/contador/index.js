import React , { useState } from "react";

const contador = ({inicio}) => {
    const [valor, setRepositorio] = useState([
        { id: 1, name: "Repo-1"},
        { id: 2, name: "Repo-2"},
        { id: 3, name: "Repo-3"},
    ]);


    return (
            <ul>
                {valor.map(el => (
                    <li key={el.id}>{el.name}</li>
                ))}
            </ul>
    );
}
export default contador