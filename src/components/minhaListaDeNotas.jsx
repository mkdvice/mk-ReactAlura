import React, { Component } from 'react'
import CardNota from './CardNota'

// O método Array.of() cria um nova instância de Array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos

// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado

function minhaListaDeNotas() {
    return (
        <ul>
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
                return (
                    <li>
                        <div>{categoria}</div>
                        <CardNota />
                    </li>
                )
            })}
        </ul>
    )
}

export default minhaListaDeNotas
