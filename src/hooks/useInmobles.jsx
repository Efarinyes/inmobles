import { graphql, useStaticQuery } from 'gatsby';

const useInmobles = () => {

    const resposta = useStaticQuery(graphql`
        query {
            allStrapiInmobles {
                nodes {
                    nom
                    descripcio
                    banys
                    habitacions
                    parking
                    preu
                    id
                categories {
                    nom
                    }
                comercial {
                    nom
                    telefon
                    email
                }
                imatge {
                    sharp: childImageSharp {
                        fluid( maxWidth: 600, maxHeight: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
    `);
    return resposta.allStrapiInmobles.nodes.map( inmoble => ({
        nom: inmoble.nom,
        descripcio: inmoble.descripcio,
        preu: inmoble.preu,
        habitacions: inmoble.habitacions,
        banys: inmoble.banys,
        parking: inmoble.parking,
        categoria: inmoble.categories,
        comercial: inmoble.comercial,
        id: inmoble.id,
        imatge: inmoble.imatge
    }));
};

export default useInmobles;