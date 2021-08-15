import Head from "next/head";
import Calculator from "../components/Calculator";
import Image from "next/image";
import Logo from "../public/logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tip Calculator</title>
      </Head>
      <div className="flex flex-col justify-center items-center py-7 md:py-10 min-h-screen">
        <div className="mb-7 md:mb-10">
          <Image src={Logo} alt="Splitter logo" />
        </div>
        <Calculator />
      </div>
    </>
  );
}
