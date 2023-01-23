import Image from "next/image";
import Link from "next/link";
import { CourseCard_ } from "./style";

export default function CourseCard(props) {
  return (
    <CourseCard_>
      <Link href={props.route} legacyBehavior>
        <a>
          <Image src={props.src} width={100} height={100} />
          <p>{props.content}</p>
        </a>
      </Link>
    </CourseCard_>
  );
}
