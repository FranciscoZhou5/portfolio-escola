import Image from "next/image";

export default function Home() {
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
            <Image src="/home-background.jpg" alt="Home background" fill className="object-cover brightness-[40%]" />
          </div>
        </section>

        <section className="p-8 bg-secundary h-[600px]">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold"> Meus trabalhos </h2>
          </div>

          <div></div>
        </section>
      </main>
    </>
  );
}
