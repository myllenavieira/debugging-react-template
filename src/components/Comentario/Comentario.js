import React from 'react'
import { Comentario } from './styled'

export const Comentarios = (props) => {
    return (
        <Comentario>
            <input 
            placeholder="Adicionar comentario" 
            value={props.comentario.comentario && props.comentario}
            onChange={props.onChangeComentario}
            />
            <button onclick={props.adicionaComentario}>
            Comentar Post</button>
            <p>{props && props.comentario}</p>
        </Comentario>
    )
}
