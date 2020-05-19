import React from 'react';
import Icones from './icones';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';



const Boto = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75AB00;
    width: 100%;
    color: #FFF;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`

    border: solid 1px #E1E1E1;
    img {
        max-width: 100%;
    }
`;

const Contingut = styled.div`

    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .preu {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const InmoblePreview = ({inmoble}) => {

    const { nom, banys, parking, habitacions, preu, imatge } = inmoble;

    return (  
        <Card>
            <Image 
                fluid = {imatge.sharp.fluid}
            />

            <Contingut>
                <h3> {nom} </h3>
                <p className = 'preu'> { preu } € </p>
                <Icones 
                    banys = {banys}
                    parking = { parking }
                    habitacions = { habitacions }
                 />
                <Boto to = { urlSlug(nom)}>
                    Més informació
                </Boto>
            </Contingut>
           
        </Card>
    );
}
 
export default InmoblePreview;
