import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { getDataApi } from "~/api/getdata";
import Character from "~/components/character/character";
import type { CharacterModel } from "~/models/models";

export default component$(() => {
  const useResource = useResource$(() => getDataApi())
  return(

    
    <div>
      <h1>Home Component</h1>
  
      <Resource 
        value={useResource}
        onPending={() => <p>Loading...</p>}
        onResolved={({ results }) => {  
          return (
            <ul class='main-grid' style={{
              display:'flex',
              flexWrap:'wrap',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'row',
              gap:'20px'
            }}>
              {
                results.map(( pj: CharacterModel ) => <Character
                  key={pj.id}
                  {...pj} />)
              }
            </ul>
          );
        }}
      />
    </div>
  )
})