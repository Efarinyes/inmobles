import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Formulari = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #E1E1E1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`;

const useFiltre = () => {

    const [ categoria, guardarCategoria ] = useState('');


    const resultat = useStaticQuery(graphql`
        query {
            allStrapiCategories {
                nodes {
                    nom
                    id
                }
            }
        }
    
    `);
    const categories = resultat.allStrapiCategories.nodes;
    // console.log(categories);

    const FiltreUI = () => (
        <Formulari>
            <Select
                onChange= {e => guardarCategoria(e.target.value)}
                value= {categoria}
            >
                <option value=""> -- Tria Categoria -- </option>
                { categories.map(opcio  => (
                    <option key= {opcio.id} value = {opcio.nom} > {opcio.nom} </option>
                ))}
            </Select>
        </Formulari>
    )
    return {
        categoria,
        FiltreUI
    }
};
 
export default useFiltre;