"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg text-white"
      >
        <img
          src={isMobileMenuOpen ? "/sidebar/close.png" : "/sidebar/menu.png"}
          alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className=" w-8 h-8"
        />
      </button>

      <div
        className={`fixed top-0 bottom-0 w-[300px] bg-Violet-900 text-white p-6 flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 right-0 md:right-auto"
            : "translate-x-full md:translate-x-0 right-0 md:right-auto"
        } md:left-0 z-40`}
      >
        <div className="flex items-center gap-2 mb-12">
          <img src="SideBar/logo.png" className="w-6" alt="" />
          <span className="text-2xl italic -tracking-4">Tracker</span>
        </div>

        <nav className="flex-1 space-y-4">
          <Link
            href="/myWallet"
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${
              pathname === "/myWallet"
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src="/SideBar/chat.png" alt="Wallet" className="w-6 h-6" />
            <span>My Wallet</span>
          </Link>

          <Link
            href="/myCard"
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${
              pathname === "/myCard"
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src="/SideBar/chat.png" alt="Card" className="w-6 h-6" />
            <span>My Card</span>
          </Link>

          <Link
            href="/chart"
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${
              pathname === "/chart"
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img src="/SideBar/chat.png" alt="Chart" className="w-6 h-6" />
            <span>Finance Chart</span>
          </Link>

          <Link
            href="/recentTransactions"
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors ${
              pathname === "/recentTransactions"
                ? "opacity-100"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src="/SideBar/chat.png"
              alt="Transactions"
              className="w-6 h-6"
            />
            <div className="flex items-center gap-2">
              <span>Recent Transactions</span>
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </Link>
        </nav>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
            <img
              src="/SideBar/settings.png"
              alt="Settings"
              className="w-6 h-6"
            />
            <span>Settings</span>
          </div>

          <div className="flex items-center gap-3 p-3 mt-3 border-t border-white/10">
            <img
              src="/SideBar/avatar.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>Adrian Tra</span>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;