import React from 'react';
// import Icones from './icones';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import LlistatInmobles from './llistatInmobles';

const ContingutPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const consulta = graphql`
        query ($id: String!) {
            allStrapiPagines(filter: {id: {eq: $id}}) {
                nodes {
                    nom
                    contingut
                    imatge {
                        sharp: childImageSharp {
                            fluid(maxWidth: 1200) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
            
                }
            }
        }
`;

const Inmobles = ({ data: {allStrapiPagines: {nodes}}}) => {
    
    const { nom, contingut, imatge } = nodes[0];
   


    return ( 
        <Layout>
             <main className='contenedor'>
                <h1> { nom } </h1>
                <ContingutPagina>

                    <Image 
                        fluid= {imatge.sharp.fluid}
                    />
                    <p> {contingut} </p>    
                </ContingutPagina> 
            </main>
            { nom === 'Inmobles' && (
                <LlistatInmobles />
            )}
        </Layout>
       
     );
}
 
export default Inmobles;
