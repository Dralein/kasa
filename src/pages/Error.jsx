/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";


const error404 = () => {
  return (
    <main>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>
      <p>Retourner sur la page d'accueil</p>
      </NavLink>
    </main>
  );
};

export default error404;