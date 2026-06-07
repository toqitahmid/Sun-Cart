"use client";
import { useState } from "react";
import { Button, Spinner, Avatar } from "@heroui/react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;
  console.log(user);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg ">
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
        <header className="flex h-16 items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="font-bold text-amber-500 sm:text-3xl text-xl">
              Sun Cart
            </div>
          </div>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/products">Products</NavLink>
            </li>
            <li>
              <NavLink href="/user">
                {user ? (
                  <Avatar>
                    <Avatar.Image
                      alt="John Doe"
                      src={user.image}
                    />
                  </Avatar>
                ) : (
                  <FaUser />
                )}
              </NavLink>
            </li>
            <li>
              {isPending ? (
                <span>
                  <Spinner color="success" />
                </span>
              ) : user ? (
                <Button
                  variant="outline"
                  onClick={async () => {
                    (await authClient.signOut(), router.push("/"));
                  }}
                >
                  Log out
                </Button>
              ) : (
                <NavLink href="/login">
                  <Button variant="outline">Log In</Button>
                </NavLink>
              )}
            </li>
          </ul>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <NavLink href="/user">
                  <FaUser />
                </NavLink>
              </li>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/products">Products</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
