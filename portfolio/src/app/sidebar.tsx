import Link from 'next/link'
import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { programming_icons } from "./utils/data"

export default function Sidebar() {
    return (
        <header>
            <Image
                src="/portrait.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-full"
            />
            <h3>Location</h3>
            <p>Linköping, Sweden</p>
            <h3>Phone</h3>
            <p>(+46)70215176</p>
            <h3>Email</h3>
            <p>eskil.brann@gmail.com</p>
            <h3>github/Foxmaner</h3>

            <h1>Languages</h1>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={programming_icons} />
            </div>
            <h1>Skils</h1>
        </header>
    );
}
