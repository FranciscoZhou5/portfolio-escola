import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "O que precisa saber para ser um Programador? (Mapa mental)",
      image: "/Quais são as oportunidades, desafios, habilidades, características, área de atuação de um programador full-stack_.png",
      link: "https://whimsical.com/quais-sao-as-oportunidades-desafios-habilidades-caracteristicas--E1aQE5DnQGyZvTFmUe86P9@2Ux7TurymMgXZo9EDEYN",
    },
  ];

  return (
    <>
      {/* <Header /> */}

      <main>
        <section className="relative">
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center min-w-[250px]">
              Portfolio de Francisco Zhou
            </h1>
          </div>

          <div className="w-full h-80 md:h-[400px] lg:h-[550px] xl:h-[650px] relative">
            <Image
              src="/home-background.jpg"
              alt="Home background"
              fill
              className="object-cover brightness-[40%] select-none"
              draggable="false"
            />
          </div>
        </section>

        <section className="p-8 bg-secundary h-[600px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center flex-col space-y-2">
              <h2 className="text-3xl font-bold"> Meus trabalhos </h2>

              <p className="text-weak"> Atividades feitas em aula em 2023 </p>
            </div>

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[680px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 place-items-center gap-8 mt-8">
              {projects.map(({ link, title, image }) => (
                <Link href={link} target="_blank" key={Math.random()} className="group max-w-[224px] xl:max-w-[288px] relative rounded-md">
                  <div className="absolute z-30 bottom-2 left-2 lg:bottom-3 lg:left-3 group-hover:-translate-y-2 duration-200">
                    <strong className="text-white">{title}</strong>
                  </div>

                  <div className="relative w-56 h-56 xl:w-72 xl:h-72">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover brightness-[40%] group-hover:brightness-75 duration-200 rounded-md"
                    />
                  </div>

                  <div
                    style={{
                      backgroundImage: "linear-gradient(to top, #0000006b 0%, rgba(33,32,46,0) 100%)",
                    }}
                    className="absolute z-10 bottom-0 left-0 xl:w-[288px] h-32 rounded-md"
                  ></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
