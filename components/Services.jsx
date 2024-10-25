import { TbRulerMeasure } from "react-icons/tb";
import { GiLargeDress } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCycle } from "react-icons/gi";

export default function Services() {
  return (
    <div className="bg-cyan-200 grid grid-cols-1 lg:grid-cols-4 gap-5 p-12 z-30">
      <h2 className="col-span-1 lg:col-span-4 text-4xl text-center">
        Our Unique Offering
      </h2>
      <div className="flex items-center justify-center text-3xl gap-5">
        <TbRulerMeasure className="text-9xl text-cyan-500" />
        Free Alteration
      </div>
      <div className="flex items-center justify-center text-3xl gap-5">
        <GiLargeDress className="text-9xl text-cyan-500" />
        Free Alteration
      </div>
      <div className="flex items-center justify-center text-3xl gap-5">
        <CiDeliveryTruck className="text-9xl text-cyan-500" />
        Express Delivery
      </div>
      <div className="flex items-center justify-center text-3xl gap-5">
        <GiCycle className="text-9xl text-cyan-500" />
        Easy exchange and Returns
      </div>
    </div>
  );
}
