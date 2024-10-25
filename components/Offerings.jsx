import Countdown from "react-countdown";
export default function Offerings() {
  return (
    <div className="relative flex flex-col items-start justify-center z-20 min-h-screen bg-[url('/OfferingsSection.png')] bg-center bg-no-repeat bg-fixed bg-cover">
      <div className="bg-yellow-200/70 text-black p-12 w-3/4 min-h-full text-3xl">
        What&apos;s your vibe today?
        <br />
        Casual cool, Business sharp, or Weekend comfy?
        <br />
        <br />
        Tell us what you&apos;re feeling, and we&apos;ll help you find the
        perfect fit.
        <div className="mt-2 bg-cyan-300 rounded-lg p-5 w-fit mx-auto">
          <h3 className="text-2xl font-bold text-center">Sale ends in:</h3>
          <Countdown
            date={Date.now() + 1000 * 60 * 60 * 24 * 7}
            renderer={({ days, hours, minutes, seconds }) => (
              <span className="text-2xl">
                {days}d {hours}h {minutes}m {seconds}s
              </span>
            )}
          />
        </div>
      </div>
      <div className="absolute lg:right-[20%] right-[5%] flex flex-col gap-5">
        <div className="bg-white p-5 rounded-lg text-black text-2xl">MEN</div>
        <div className="bg-white p-5 rounded-lg text-black text-2xl">WOMEN</div>
        <div className="bg-white p-5 rounded-lg text-black text-2xl">KIDS</div>
      </div>
    </div>
  );
}
