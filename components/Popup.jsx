import { useState } from "react";
export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="bottom-5 left-5 fixed bg-white p-5 rounded-lg shadow-lg z-[60]">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-2xl"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold">🎉 Welcome to our store! 🎉</h2>
      <p className="text-lg mt-2">
        Get 10% off on your first purchase when you sign up for our newsletter!
      </p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button className="w-full bg-pink-300 text-white p-2 rounded-lg mt-2">
          Sign up
        </button>
      </form>
    </div>
  );
}
