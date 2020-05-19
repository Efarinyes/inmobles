import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

const ImatgeFons = styled(BackgroundImage)`

    height: 300px

`;


const Troba = () => {

    const { imatge } = useStaticQuery(graphql`
        query MyQuery {
          imatge: file(relativePath:{ eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(maxWidth: 1200 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
   // console.log(imatge);


    return ( 
        <ImatgeFons tag='section' fluid= {imatge.sharp.fluid} fadeIn='soft'>
            <div className={heroCSS.imatgebg} >
                <h3 className= {heroCSS.titol}>
                    Troba la teva Llar
                </h3>
                <p>Tota la nostra experiència al vostre servei</p>
            </div>
        </ImatgeFons>
    );
};
 
export default Troba;
