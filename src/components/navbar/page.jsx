"use client";

const Navbar = () => {
  return (
    <div className="md:hidden fixed  top-0 left-0 right-0 bg-white text-white p-4 z-40">
      <div className="flex items-center gap-2">
        <img src="/navBar/logo-purp.png" className="w-6 " alt="" />
        <span className="text-2xl italic text-Violet-500 -tracking-4">
          Tracker
        </span>
      </div>
    </div>
  );
};

export default Navbar;
