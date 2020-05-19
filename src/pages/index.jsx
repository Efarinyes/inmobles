import React from 'react';
import Layout from '../components/layout';
import Troba from '../components/troba';
import LlistatInmobles from '../components/llistatInmobles';
import useInici from '../hooks/useInici';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';



const ImatgeFons = styled(BackgroundImage)`
    height: 500px;

`;

const Index = () => {

   const inici =  useInici();
  
   const { nom, contingut, imatge } = inici[0];



    return ( 
        <Layout>
            <ImatgeFons
                tag="section"
                fluid = { imatge.sharp.fluid }
                fadeIn='soft'
            >
                <div className= {heroCSS.imatgebg}>
                    <h1 className= {heroCSS.titol}> Les millors oportunitats que podràs trobar </h1>
                </div>
            </ImatgeFons>
            <main>
                <div css= {css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>
                     <h1> {nom} </h1>
                     <p css = {css`
                        text-align: center;
                     `}> { contingut }</p>
                </div>
            </main>
            <Troba />
           <LlistatInmobles />
        </Layout>
     );
}
 
export default Index;
