import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import logo from '../assets/images/logo.png' 
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CX data</title>
        <meta name="description" content="CX data - Ajudando a manter o seu cliente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] to-[#2BCA24]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div>
            <Image
              src="/../assets/images/logo.png"
              className="h-14 w-14 rounded-full"
              alt="Logo"
              width={100}
              height={56}
            />
            <img src="assets/images/logo.png"></img>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/90 p-4 text-grey hover:bg-white/100"
            >
              <div className="text-lg">
                Saiba onde seu cliente abandona a jornada
              </div>

              <button type="button">Conheça mais!</button>
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl"
            >
              <img className="rounded-xl" src="./assets/images/logo.png"></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
