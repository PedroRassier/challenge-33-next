import { PresentationCard_ } from "./style";

export default function PresentationCards(props) {
  return (
    <PresentationCard_>
      <div className="card" style={{ backgroundColor: "#353436" }}>
        <p>
          {" "}
          Mantida pelo governo do Estado de São Paulo, os cursos oferecidos –
          além de qualidade ímpar – são totalmente gratuitos, levando para toda
          a população um ensino de qualidade e a oportunidade de aprender uma
          profissão.
        </p>
      </div>
      <div className="card" style={{ backgroundColor: "#B91C1C" }}>
        <p>
          {" "}
          Contando com um corpo docente extremamente qualificado e estrutura
          física moderna, os cursos oferecidos nesta unidade se destacam pela
          qualidade de ensino, onde o aluno realmente aprende conteúdos
          relevantes, de maneira fácil e didática.{" "}
        </p>
      </div>
      <div className="card" style={{ backgroundColor: "#481A8F" }}>
        <p>
          {" "}
          Baseado em uma didática prática, os alunos são envolvidos em conteúdos
          que abordam as diversas realidades do mercado, formando assim mão de
          obra qualificada e proporcionando uma experiência diferenciada para o
          aluno.
        </p>
      </div>
    </PresentationCard_>
  );
}
