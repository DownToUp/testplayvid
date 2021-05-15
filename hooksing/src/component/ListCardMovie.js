import React from 'react'
import CardMovie from './CardMovie'

function ListCardMovie({MoviesList}) {
   
    return (
        <>
           {MoviesList.map((Movie,key) =>{
            
               return (
               <div>
                   <CardMovie key={key} 
                   Movie={Movie}/>
               </div>
               )
           })}
           
           
        </>
    )
}

export default ListCardMovie
