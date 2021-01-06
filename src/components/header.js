import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav id="top">
      <Link className="logo" to="#top">
        Latin Music Radio Online
      </Link>
      <Link to="#chat">Chat Online</Link>
      <Link to="#social">Social Media</Link>
      <Link to="#mixes">Mixes Oficiales</Link>
      <Link to="#contact">Contacto</Link>
      <Link>Radio Escuchas: num</Link>
    </nav>
  );
}
