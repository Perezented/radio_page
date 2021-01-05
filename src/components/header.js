import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Pagina Principal</Link>
      <Link to="/">Mixes Oficiales</Link>
      <Link to="/">Radio Escuchas: num</Link>
    </nav>
  );
}
