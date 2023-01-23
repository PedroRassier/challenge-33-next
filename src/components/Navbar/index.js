import Legacy from "./NavOptions";
import { Nav_ } from "./style";

export default function Navbar() {
  return (
    <Nav_>
      <Legacy content="Início" route="/" />
      <Legacy content="Cursos" route="/cursos" />
      <Legacy content="Vagas" route="/" />
      <Legacy content="Noticias" route="/noticias" />
      <Legacy content="Contato" route="/contato" />
    </Nav_>
  );
}
