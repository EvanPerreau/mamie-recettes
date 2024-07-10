"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-transparent align-top sticky top-0">
      <div className="navbar-start">
        <Link
          href="/"
          className="text-3xl font-extrabold hover:cursor-pointer hover:text-secondary uppercase"
        >
          Mes recettes
        </Link>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
