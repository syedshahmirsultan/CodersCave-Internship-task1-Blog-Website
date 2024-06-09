import Image from "next/image";
import Hero from "./components/Hero";
import SomeBlogs from "./components/SomeBlogs";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SomeBlogs/>
    </main>
  );
}
