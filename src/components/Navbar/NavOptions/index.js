import Link from "next/link";
import { NavOption_ } from "./style";

export default function Legacy(props) {
  return (
    <Link href={props.route} legacyBehavior>
      <NavOption_>{props.content}</NavOption_>
    </Link>
  );
}
