import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import useInmobles from '../hooks/useInmobles';
import InmoblePreview from './inmoblePrview';
import llistatInmoblesCSS from '../css/llistatInmobles.module.css';
import useFiltre from '../hooks/useFiltre';



const LlistatInmobles = () => {

    const resultat = useInmobles();
    const [ inmobles ] = useState(resultat);
    const [ filtrades, guardarFiltrades ] = useState([]);

    // Filtrem per categories
    const {categoria, FiltreUI } = useFiltre();

    console.log(categoria);

  useEffect( () => {
     if (categoria) {
        const filtre = inmobles.filter( inmoble => inmoble.categoria.nom === categoria);
        guardarFiltrades(filtre);
     } else {
        guardarFiltrades(inmobles);
     }
  }, [categoria, inmobles]);

    return ( 
        <>
            <h2
                css= {css`
                    margin-top: 5rem;
                `}
            
            > El que tenim per vosaltres </h2>
            {FiltreUI()}

            <ul className= {llistatInmoblesCSS.inmobles}>
                { filtrades.map( inmoble => (
                    <InmoblePreview 
                        key= {inmoble.id}
                        inmoble = {inmoble}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default LlistatInmobles;
