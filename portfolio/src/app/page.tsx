import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
//https://www.flaticon.com/free-icons/programming-language
import { programming_icons } from "./utils/data"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/portrait.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full w-1/2"
      />
      <h1 className="w-1/2 text-center text-2xl">
        Eskil Brännerud
      </h1>
      <h2 className="w-1/2 text-center text-1xl">
        Hi! And welcome to my portfolio.
      </h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={programming_icons} />
      </div>
    </main>
  );
}
