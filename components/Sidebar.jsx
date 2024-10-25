/* eslint-disable react/prop-types */
export default function Sidebar({ setMenu }) {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
        onClick={() => setMenu(false)}
      ></div>
      <div className="fixed top-0 right-0 w-fit h-full bg-[#fee7e6] shadow-lg z-50 px-5">
        <button className="lg:hidden text-4xl" onClick={() => setMenu(false)}>
          &times;
        </button>
        {/* Sidebar */}
        <div className="flex flex-col items-center justify-between h-full">
          <img
            src="/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="h-14 w-14"
          />
          <nav className="flex flex-col gap-5 items-center justify-center">
            <a
              href="/"
              className="font-[Bodoni] text-2xl hover:underline transition-all"
            >
              Home
            </a>
            <a
              href="/#shop"
              className="font-[Bodoni] text-2xl hover:underline transition-all"
            >
              Shop
            </a>
            <a
              href="/#collections"
              className="font-[Bodoni] text-2xl hover:underline transition-all"
            >
              Collections
            </a>
            <a
              href="/#wishlist"
              className="font-[Bodoni] text-2xl hover:underline transition-all"
            >
              Wishlist
            </a>
            <a
              href="/#bag"
              className="font-[Bodoni] tracking-widest text-2xl hover:underline transition-all"
            >
              Bag
            </a>
          </nav>
          <div></div>
        </div>
      </div>
    </>
  );
}
