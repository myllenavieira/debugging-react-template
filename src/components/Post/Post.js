import React from "react";
import { PostContainer } from "./styled";
import { Comentarios} from "../Comentario/Comentario.js";


export const Post = (props) => {
  return (
    <PostContainer className={"post-container"}>
      <p>{props.post && props.post.texto}</p>
      <button onClick={() => props.alterarCurtida()}>
        {props.post && props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagarPost()}>Apagar</button>
      
      {/* Exercício final de debug. Descomentar só depois de finalizar o debug de post*/}
      <Comentarios
        comentario={props.comentario}
        adicionaComentario={props.adicionaComentario}
        comentarioDoPost={props.post.comentario}
      />
    </PostContainer>
  );
};
