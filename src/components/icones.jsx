import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const LlistaIcones = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;
    
    li {
        display: flex;
        img {
            margin-right: 3rem;
        }
    }
`;


const Icones = ( {banys, habitacions, parking } ) => {
    const { icones } = useStaticQuery(graphql`
       query {
        icones: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
                 edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)
   const imatgesIcones = icones.edges;
    return ( 
        <LlistaIcones>
            <li> 
                <img src= {imatgesIcones[2].node.publicURL} alt="Banys"/>
                <p> {banys} </p>
            </li>
            <li> 
                <img src= {imatgesIcones[1].node.publicURL} alt="Parking"/>
                <p> {parking} </p>
            </li>
            <li> 
                <img src= {imatgesIcones[0].node.publicURL} alt="Habitacions"/>
                <p> {habitacions} </p>
            </li>
        </LlistaIcones>
     );
};
 
export default Icones;
