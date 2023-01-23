import Link from "next/link";
import NewsCard from "../NewsCard";
import { NewsCards_ } from "./style";

export default function NewsCards() {
  return (
    <NewsCards_>
      <h2>Notícias</h2>
      <div className="cards">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Link href="/noticias">
        <button>Ver mais notícias</button>
      </Link>
    </NewsCards_>
  );
}
