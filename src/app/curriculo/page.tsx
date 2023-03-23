import Image from "next/image";

export default function Curriculum() {
  return (
    <div>
      <section className="relative">
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold text-center min-w-[250px]">Meu currículo</h1>
        </div>

        <div className="w-full h-80 md:h-[400px] lg:h-[550px] xl:h-[650px] relative">
          <Image src="/curriculum-background.jpg" alt="Curriculum background" fill className="object-cover brightness-[40%]" />
        </div>
      </section>

      <section className="">
        <div className="relative xl:max-w-[1400px] xl:h-[2000px] mx-auto">
          <Image src="/my-curriculum.png" alt="My curriculum" fill className="object-cover" />
        </div>
      </section>
    </div>
  );
}
