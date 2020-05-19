import React from 'react';
import Icones from './icones';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

const Contingut = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    
    .preu {
        font-size: 2rem;
        color: #75AB00;
    }
    .comercial {
        margin-top: 4rem;
        border-radius: 1rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;

        p{
            margin: 0;

        }
    }

`;

export const consulta = graphql`
    query($id: String!) {
            allStrapiInmobles(filter: {id: {eq: $id}}) {
                nodes {
                    nom
                    parking
                    descripcio
                    habitacions
                    banys
                    preu
                comercial {
                    nom
                    telefon
                    email
                }
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

const Inmobles = ({ data: {allStrapiInmobles: {nodes}}}) => {

    const { nom, parking, descripcio, habitacions, banys, preu, comercial, imatge } = nodes[0];


    return ( 
        <Layout>
             <h1> { nom } </h1>
             <Contingut> 
                 <main>
                    <Image 
                        fluid= {imatge.sharp.fluid}
                    />
                    <p> {descripcio} </p>
                 </main>
                 <Sidebar>
                     <p className = 'preu'> { preu } €</p>
                     <Icones 
                        banys = {banys}
                        parking = { parking }
                        habitacions = { habitacions }
                    />
                    <div className = 'comercial'>
                        <h2> Contacte Comercial </h2>
                             <p> {comercial.nom}</p>
                             <p> Telefon: {comercial.telefon}</p>
                             <p> Correu: {comercial.email}</p>
                    </div>
                 </Sidebar>
             </Contingut>
        </Layout>
       
     );
}
 
export default Inmobles;
