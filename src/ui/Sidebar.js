// UI/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export const Sidebar = () => {
  const pathname = usePathname();

  const storedUsername =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;

  return (
    <>
      {storedUsername ? (
        <nav>
          <div>
            <ul>
              <li
                className={
                  pathname === "/dashboard"
                    ? "active-link font-bold center-link"
                    : " center-link"
                }
              >
                <Link href="/dashboard">ALL</Link>
              </li>
              <li
                className={
                  pathname === "/favourite"
                    ? "active-link center-link"
                    : " center-link"
                }
              >
                <Link href="/favourite">FAVOURITE</Link>
              </li>
              <li
                className={
                  pathname === "/slot"
                    ? "active-link center-link"
                    : " center-link"
                }
              >
                <Link href="/slot">SLOT</Link>
              </li>
              <li
                className={
                  pathname === "/fishing"
                    ? "active-link center-link"
                    : " center-link"
                }
              >
                <Link href="/fishing">FISHING</Link>
              </li>
              <li
                className={
                  pathname === "/other"
                    ? "active-link center-link"
                    : " center-link"
                }
              >
                <Link href="/other">OTHER</Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
    </>
  );
};
