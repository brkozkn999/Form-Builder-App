import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center font-bold text-3xl bg-gradient-to-r from-indigo-700 to-cyan-500 text-transparent bg-clip-text hover:cursor-pointer">
      <div className="flex items-center">
        <Image src='/logoblue.svg' alt="logo" width={80} height={80}/>
      </div>
      <span>PageForm</span>
    </Link>
  );
}

export default Logo;