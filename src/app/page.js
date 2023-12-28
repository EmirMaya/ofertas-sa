import MainComponent from "@/components/layout/MainComponent";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <MainComponent />

      <section className="my-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <h2 className="p-2 mb-8 text-center w-full bg-rose-500 text-white font-bold text-xl">¡Ofertas!</h2>
        <div className="shadow-lg rounded-md mx-14">
          <Image className="w-full h-56 object-cover" src={'/dulce-de-leche.webp'} alt="item" width={500} height={500} />
          <div className="p-2 flex flex-col justify-center items-center">
            <h4 className="text-neutral-700 text-lg text-center mt-4">Dulce de leche la serenísima clásico 400g</h4>
            <p className="bg-rose-500 text-white font-semibold px-4 py-2 mt-4 rounded-sm">$ 1499,99</p>
          </div>
        </div>
        <div className="shadow-lg rounded-md mx-14">
          <Image className="w-full h-56 object-cover" src={'/atun.png'} alt="item" width={500} height={500} />
          <div className="p-2 flex flex-col justify-center items-center">
            <h4 className="text-neutral-700 text-lg text-center mt-4">Atún la campagnola natural 170g</h4>
            <p className="bg-rose-500 text-white font-semibold px-4 py-2 mt-4 rounded-sm">$ 1199,99</p>
          </div>
        </div>
        <div className="shadow-lg rounded-md mx-14">
          <Image className="w-full h-56 object-cover" src={'/jamon-cocido.jpg'} alt="item" width={500} height={500} />
          <div className="p-2 flex flex-col justify-center items-center">
            <h4 className="text-neutral-700 text-lg text-center mt-4">Jamón Cocido x kg</h4>
            <p className="bg-rose-500 text-white font-semibold px-4 py-2 mt-4 rounded-sm">$ 8499,99</p>
          </div>
        </div>
        <div className="shadow-lg rounded-md mx-14">
          <Image className="w-full h-56 object-cover" src={'/solomillo.jpg'} alt="item" width={500} height={500} />
          <div className="p-2 flex flex-col justify-center items-center">
            <h4 className="text-neutral-700 text-lg text-center mt-4">Solomillo de cerdo x kg</h4>
            <p className="bg-rose-500 text-white font-semibold px-4 py-2 mt-4 rounded-sm">$ 6399,99</p>
          </div>
        </div>
      </section>

    </>
  )
}
