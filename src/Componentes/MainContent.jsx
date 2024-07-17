import React from 'react'
import MenuItem from './MenuItem'
import Inicio from './Inicio'
import Galeria from './Galeria'


export default function MainContent() {
  return (
    <div>
      <Inicio />   
      <Galeria></Galeria>         
      <MenuItem />
        
    </div>
  )
}
