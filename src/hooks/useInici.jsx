import { useStaticQuery, graphql } from 'gatsby';

const useInici = () => {

    const consulta = useStaticQuery(graphql`
        query {
            allStrapiPagines(filter: {nom: {eq: "Inici"}}) {
                nodes {
                    nom
                    contingut
                    id
                    imatge {
                        sharp: childImageSharp {
                            fluid(maxWidth: 1200 duotone: { highlight: "#222222", shadow: "#192550" opacity: 30}) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);
    return consulta.allStrapiPagines.nodes.map( inici => ({
        nom: inici.nom,
        contingut: inici.contingut,
        imatge: inici.imatge
    }));
    
};
 
export default useInici;
