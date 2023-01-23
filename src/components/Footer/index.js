import Image from "next/image";
import logoFooter from "../../assets/image/logo1.png";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  GlobeHemisphereWest,
  Phone,
  EnvelopeSimple,
} from "phosphor-react";
import { Footer_ } from "./style";
import { PageRigths } from "./pageRigths";

export default function Footer() {
  return (
    <>
      <Footer_>
        <Image src={logoFooter} />
        <div>
          <div className="contactInfos">
            <button>
              <GlobeHemisphereWest size={32} color={"#B91C1C"} weight="light" />
            </button>
            <div>
              <p>Rua Codelândia, 1367</p>
              <h3>Cafelândia, SP</h3>
            </div>
          </div>
          <div className="contactInfos">
            <button>
              <Phone size={32} color={"#B91C1C"} weight="light" />
            </button>
            <div>
              <h3>+55 14 9999-9999</h3>
            </div>
          </div>
          <div className="contactInfos">
            <button>
              <EnvelopeSimple size={32} color={"#B91C1C"} weight="light" />
            </button>
            <div>
              <h3>centropaulasouza@etec.sp.gov.brP</h3>
            </div>
          </div>
        </div>
        <div className="aboutInfo">
          <h3>Sobre a Etec Cafelândia</h3>
          <p>
            Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
            Moreira Martins Aguiar se destaca no ensino médio e técnico,
            recebendo constantemente menções e congratulações em todo o estado
            de São Paulo.
          </p>
          <div className="socialMediaButtons">
            <button>
              <InstagramLogo size={32} color={"#B91C1C"} weight="light" />
            </button>
            <button>
              <FacebookLogo size={32} color={"#B91C1C"} weight="light" />
            </button>
            <button>
              <LinkedinLogo size={32} color={"#B91C1C"} weight="light" />
            </button>
          </div>
        </div>
      </Footer_>
      <PageRigths>
        <p>
          Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os
          direitos reservados.
        </p>
      </PageRigths>
    </>
  );
}
