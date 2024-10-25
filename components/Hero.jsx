import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between bg-[url('/HeroBg.webp')] bg-center bg-no-repeat bg-cover p-[10rem] bg-fixed">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="z-10 text-white text-center">
        <h1 className="text-7xl font-bold">KAIA</h1>
        <p className="text-7xl md:text-xl mt-4">Styling since 1913</p>
        <TypeAnimation
          sequence={[
            "Styling since 1913",
            1000,
            "Making Fashion Accessible",
            1000,
            "The Easy Way to Shop",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <a href="/explore" className="z-10 cursor-pointer">
        <button className="z-10 text-xl tracking-widest bg-black/50 text-white p-5 rounded-lg cursor-pointer">
          EXPLORE
        </button>
      </a>
    </div>
  );
}
