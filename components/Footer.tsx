import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex flex-1 py-8 border-t border-neutral-200 justify-center items-center">
      <span className="pr-4">Powered by</span>
      <a href="https://uniform.dev" target="_blank" rel="noopener noreferrer">
        <Logo width={220} />
      </a>
    </footer>
  );
}
