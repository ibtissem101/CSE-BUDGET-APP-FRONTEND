"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8"></div>

        <h1 className="text-4xl md:text-6xl font-semibold flex flex-col gap-2 text-Violet-900 mb-6">
          <div>Manage Your Finances</div>
          <br />
          <span className=" bg-clip-text pb-4 text-transparent bg-gradient-to-r from-black to-Violet-600">
            Effortlessly
          </span>
        </h1>

        <p className="text-xl text-Neutral-80 mb-12 max-w-2xl mx-auto">
          Track your expenses, set budgets, and achieve your financial goals
          with our intuitive budget tracking application. Take control of your
          finances today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/login"
            className="px-8 py-3 bg-Violet-500 text-white rounded-lg font-medium text-lg hover:bg-Violet-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-Neutral-30 text-Neutral-90 rounded-lg font-medium text-lg hover:bg-Neutral-40 transition-colors shadow-lg hover:shadow-xl"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
