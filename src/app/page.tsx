import Link from "next/link";
import React from "react";

const styles = {
  link: "text-center font-thin bg-slate-900 my-4 p-3 rounded-md hover:font-medium transition-all duration-500 ease-in-out",
  h1: "text-center text-2xl md:text-2xl font-medium hover:text-slate-300",
  signupContainer:
    "bg-slate-800 p-5 flex flex-col space-y-4 gap-2 max-w-xs w-full rounded-md",
};

const Home = () => {
  return (
    <main className=" bg-gradient-radial flex min-h-screen items-center justify-center px-24 transition-all duration-300 ease-in-out">
      <div className={styles.signupContainer}>
        <h1 className={styles.h1}>Strings</h1>
        <Link href="/signin" className={styles.link}>
          Sign In
        </Link>
        <Link href="/signup" className={styles.link}>
          Sign Up
        </Link>
      </div>
    </main>
  );
};

export default Home;
