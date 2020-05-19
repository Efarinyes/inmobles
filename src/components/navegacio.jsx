import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(Link)`
    color: #CCC;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
    &.pagina-activa {
        border-bottom: 2px solid #FFF;
        color: #FFF;
    }
`;
const Navegacio = () => {
    return ( 
        <Nav>
            <NavLink to = {'/'} activeClassName='pagina-activa'> Inici </NavLink>
            <NavLink to = {'/nosaltres'} activeClassName='pagina-activa'> Nosltres </NavLink>
            <NavLink to = {'/inmobles'} activeClassName='pagina-activa'> Inmobles </NavLink>
        </Nav>
     );
}
 
export default Navegacio;