import Link from "next/link";
import { JobsDisplay_ } from "./style";

export default function JobsDisplay() {
  return (
    <JobsDisplay_>
      <div className="displayHeadline">
        <h2>Estágios e Empregos</h2>
      </div>
      <div className="jobsInfo">
        <article>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Publicado em 00/00/2000</p>
          <Link href="/" legacyBehavior>
            <a>Mais sobre a vaga</a>
          </Link>
        </article>
        <article>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Publicado em 00/00/2000</p>
          <Link href="/" legacyBehavior>
            <a>Mais sobre a vaga</a>
          </Link>
        </article>
        <article>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Publicado em 00/00/2000</p>
          <Link href="/" legacyBehavior>
            <a>Mais sobre a vaga</a>
          </Link>
        </article>
      </div>
    </JobsDisplay_>
  );
}
