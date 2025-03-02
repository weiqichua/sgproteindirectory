import Image from "next/image";
import { inter } from "@/components/ui/fonts";

export default function Home() {
  return (
    <div className = "flex flex-col">
      <div className = {` ${inter.className} antialiased text-3xl w-full min-h-24 bg-teal-500 fixed `}> Navbar </div>

     </div>
  );
}
