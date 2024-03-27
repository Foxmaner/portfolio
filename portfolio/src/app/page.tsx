import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
//https://www.flaticon.com/free-icons/programming-language
import {programming_icons} from "./utils/data"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={programming_icons} />
      </div>
    </main>
  );
}
