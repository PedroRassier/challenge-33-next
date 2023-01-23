import { Header_ } from "./style";
import Image from "next/image";
import logoHeader from "../../assets/image/logo1.png";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <Header_>
      <Image src={logoHeader} width={180} height={52} />
      <Navbar />
    </Header_>
  );
}
