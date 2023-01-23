import vaca from "../../assets/image/vaca.png";
import agricultura from "../../assets/image/agricultura.png";
import cana from "../../assets/image/cana.png";
import computador from "../../assets/image/computador.png";
import despesas from "../../assets/image/despesas.png";
import financeiro from "../../assets/image/financeiro.png";
import vacina from "../../assets/image/vacina.png";
import processo from "../../assets/image/processo.png";

import CourseCard from "../CourseCard";
import { CourseCards_ } from "./style";

export default function CourseCards() {
  return (
    <CourseCards_>
      <h2>Cursos Técnicos</h2>
      <div className="coursesCards">
        <CourseCard
          src={vacina}
          content="ENFERMAGEM"
          route="cursos/enfermagem"
        />
        <CourseCard
          src={computador}
          content="DESENVOLVIMENTO DE SISTEMAS"
          route="cursos/desenvolvimento-de-sistemas"
        />
        <CourseCard
          src={processo}
          content="RECURSOS HUMANOS"
          route="cursos/recursos-humanos"
        />
        <CourseCard
          src={despesas}
          content="ADMINISTRAÇÃO"
          route="cursos/administracao"
        />
        <CourseCard
          src={cana}
          content="AÇÚCAR E ÁLCOOL"
          route="cursos/acucar-e-alcool"
        />
        <CourseCard
          src={agricultura}
          content="AGROPECUÁRIA"
          route="cursos/agropecuaria"
        />
        <CourseCard src={vaca} content="ZOOTECNIA" route="cursos/zootecnia" />
        <CourseCard
          src={financeiro}
          content="AGRONEGÓCIO"
          route="cursos/agronegocio"
        />
      </div>
    </CourseCards_>
  );
}
