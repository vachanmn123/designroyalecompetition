"use client";

import { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#fee7e6] h-24 shadow-lg z-50">
      <div className="flex justify-between items-center h-full px-5">
        <img
          src="/logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="h-14 w-14"
        />
        <nav className="hidden lg:block">
          <ul className="flex gap-5 items-center justify-center">
            <li>
              <a
                href="/"
                className="font-[Bodoni] text-2xl hover:underline transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#shop"
                className="font-[Bodoni] text-2xl hover:underline transition-all"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/#collections"
                className="font-[Bodoni] text-2xl hover:underline transition-all"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/#wishlist"
                className="font-[Bodoni] text-2xl hover:underline transition-all"
              >
                Wishlist
              </a>
            </li>
            <li>
              <a
                href="/#bag"
                className="font-[Bodoni] tracking-widest text-2xl hover:underline transition-all"
              >
                Bag
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ease-out"
        style={{ width: scrollProgress }}
        role="progressbar"
        aria-valuenow={parseInt(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </header>
  );
}
