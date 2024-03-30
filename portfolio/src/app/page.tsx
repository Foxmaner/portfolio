import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
//https://www.flaticon.com/free-icons/programming-language
import { programming_icons } from "./utils/data"


export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full">
        <Image
          src="/portrait.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-full object-cover"
        />
      </div>
      <h1 className="w-full text-center">
        Eskil Brännerud
      </h1>
      <h2 className="w-full text-center">
        Hi! And welcome to my portfolio.
      </h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={programming_icons} />
      </div>
    </main>
  );
}
