import { component$ } from "@builder.io/qwik";
import type { CharacterModel } from "~/models/models";

export default component$(({id, name, image}: CharacterModel) => {
  // console.log(character)
  return (
    <div>
      <span>{id}</span>
      <h2>{name}</h2>
      <img src={image} />  
    </div>
  )
})