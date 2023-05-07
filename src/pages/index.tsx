import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/images/logo.png";
import Dashboard from "./../assets/images/dashboard.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CX data</title>
        <meta name="description" content="CX data - Ajudando a manter o seu cliente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] to-[#2BCA24]">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16 ">
          <div>
            <Image
              src={Logo}
              className=""
              alt="Logo"
              width={300}
              height={56}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/90 p-4 text-grey hover:bg-white/100"
            >
              <div className="text-lg">
                A cxdata é uma plataforma pensada para unificar o mapeamento da jornada  com inteligência de dados.
              </div>

              <button type="button">Conheça mais!</button>
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl"
            >
              <Image
                src={Dashboard}
                className=""
                alt="Dashboard"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:gap-3">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/90 p-4 text-grey hover:bg-white/100"
            >
              <div className="text-md">
                Dados
              </div>
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/90 p-4 text-grey hover:bg-white/100"
            >
              <div className="text-md">
                Experiência segmentada
              </div>
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/90 p-4 text-grey hover:bg-white/100"
            >
              <div className="text-md">
                Prevenção
              </div>
            </div>
          </div>

          <div>
            <div className="text-md">
              Principais atividades para auxiliá-lo a reter seus clientes
            </div>
            <div>
              - Definir pontos críticos da jornada e alinhar com as métricas e objetivos mais importantes para o seu negócio
            </div>
            <div>
              - Visualizar alertas e receber insights para criar planos de ação direcionados à etapa da jornada do cliente que estão mais longe das metas
            </div>
            <div>
              - Segmentar os perfis dos seus clientes e a parametrização de jornadas e objetivos direcionados
            </div>
          </div>

          <div className="items-center justify-center">
            <div className="text-md">
              Entre em contato e agende uma conversa
            </div>
            <Link target="_blank" href="https://forms.gle/pMuiGzLRmdSuXeGc6">
            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </Link>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
