/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const urlSlug = require('url-slug');

exports.createPages = async({ actions, graphql, reporter }) => {

    const resultat = await graphql(`
    
    query {
      allStrapiPagines {
        nodes {
          nom
          id
        }
      }
        allStrapiInmobles {
          nodes {
            nom
            id
          }
        }
      }
    
    `);
    // console.log(JSON.stringify(resultat.data.allStrapiInmobles));

    // Si no obtenim resultats
    if (resultat.errors) {
        reporter.panic('No hi ha resultats', resultat.errors);
    }
    // Amb el resultat positiu, generem els arxius estàtics 
    const pagines = resultat.data.allStrapiPagines.nodes;

    const inmoblesRes = resultat.data.allStrapiInmobles.nodes;
    // console.log(resultatInmobles);

    // Creant les pàgines
    pagines.forEach(pagina => {
        actions.createPage({
            path: urlSlug(pagina.nom),
            component: require.resolve('./src/components/pagines.jsx'),
            context: {
                id: pagina.id
            }
        });
    });

    // Es crean els Templates de Inmobles
    inmoblesRes.forEach(res => {
        actions.createPage({
            path: urlSlug(res.nom),
            component: require.resolve('./src/components/inmobles.jsx'),
            context: {
                id: res.id
            }
        });
    });

};