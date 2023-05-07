import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/images/logo.png";
import Dashboard from "./../assets/images/dashboard.png";
import Image1 from "./../assets/images/image1.png";
import Image2 from "./../assets/images/image2.png";
import Image3 from "./../assets/images/image3.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CX data</title>
        <meta name="description" content="CX data - Ajudando a manter o seu cliente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#ffffff] to-[#2BCA24]">
        <div className="container flex flex-col items-center justify-center gap-20 px-4 py-12 ">
          <div>
            <Image
              src={Logo}
              className=""
              alt="Logo"
              width={300}
              height={56}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 justify-center">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray/100 p-4 text-grey hover:bg-gray/200 justify-center"
            >
              <div className="text-2xl font-mono">
                <strong>Reter</strong> seus clientes pode ser <strong>simples</strong> com <strong>inteligência</strong>
              </div>

              <div className="text-sm font-mono">
                Solução de inteligência de dados para direcionar o seu sucesso do cliente
              </div>
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

          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:gap-3">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-grey"
            >
              <Image
                src={Image1}
                className=""
                alt="Imagem1"
                width={500}
                height={500}
              />
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-grey"
            >
              <div className="text-md label-feature font-bold text-center">
                Dados
              </div>
              <div>
                Com o CXdata você mapeia os pontos essenciais da jornada do cliente no seu produto e identifica o potencial da sua carteira
              </div>
              
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:gap-3">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-grey"
            >
              <div className="text-md label-feature font-bold text-center">
                Experiência segmentada
              </div>
              <div>
                Amplie sua visão de experiência do cliente. Segmente suas métricas e análises de acordo com o perfil do seu cliente
              </div>
              
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-grey"
            >
              <Image
                src={Image2}
                className=""
                alt="Imagem2"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 sm:grid-cols-2 md:gap-3">
            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-grey"
            >
              <Image
                src={Image3}
                className=""
                alt="Imagem3"
                width={500}
                height={500}
              />
            </div>

            <div
              className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-grey"
            >
              <div className="text-md label-feature font-bold text-center">
                Prevenção
              </div>
              <div>
                Direcione o seu atendimento à quem precisa de atenção utilizando a inteligência de alertas de cancelamentos
              </div>
            </div>
          </div>

          <div className="items-center justify-center text-center">
            <div className="text-lg text-white font-mono">
              Entre em contato e agende uma conversa
            </div>
            <Link target="_blank" href="https://forms.gle/pMuiGzLRmdSuXeGc6">
            <button type="submit" className="button-contact text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Contato</button>
            </Link>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
