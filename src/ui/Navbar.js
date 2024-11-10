"use client";
import Link from "next/link";
import useAuthStore from "../store/authStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const storedUsername =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("username");
    router.push("/");
  };

  return (
    <>
      {storedUsername ? (
        <div className="relative min-h-[80px] sm:w-screen p-6 bg-orange-400 text-white">
          <div className="flex items-center justify-between space-x-4">
            {/* Left: Avatar and Greeting */}
            <div className="inline-flex items-center gap-2">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold">Welcome, {user ?? "Guest"}</span>
            </div>

            <Image
              src="https://img.freepik.com/free-vector/casino-neon-sign_1284-10676.jpg"
              alt="Casino Slots"
              width={60}
              height={0}
              className="rounded-lg"
            />

            {/* Right: Logout and Hamburger Menu */}
            <div className="flex items-center space-x-4">
              <button
                className="bg-red-500 px-4 py-1 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>

              <button className="focus:outline-none" onClick={toggleMenu}>
                {menuOpen ? (
                  <RxCross1 className="w-6 h-6" />
                ) : (
                  <IoMenu className="w-6 h-6" />
                )}
              </button>

              {/* Mobile Menu (Positioned Absolutely) */}
              {menuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 space-y-2 bg-gray-700 rounded-md p-4 z-50 shadow-lg">
                  <Link href="">
                    <span className="block hover:bg-gray-600 py-2 px-4 rounded">
                      About
                    </span>
                  </Link>
                  <Link href="">
                    <span className="block hover:bg-gray-600 py-2 px-4 rounded">
                      Games
                    </span>
                  </Link>
                  <Link href="">
                    <span className="block hover:bg-gray-600 py-2 px-4 rounded">
                      Rank
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
