import Link from 'next/link'
import Image from "next/image";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { programming_icons } from "./utils/data"
import { LinkPreview } from "./components/ui/link-preview";

export default function Sidebar() {
    return (
        <header className='text-center content-center'>
            <Image
                src="/portrait.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="w-full"
            />
            <h3 className='font-bold'>Location</h3>
            <p>Linköping, Sweden</p>
            <h3 className='font-bold'>Phone</h3>
            <p>(+46)70215176</p>
            <h3 className='font-bold'>Email</h3>
            <p>eskil.brann@gmail.com</p>
            <h3 className='font-bold'>Github</h3>

        
            <LinkPreview
                url="https://github.com/Foxmaner"
                className="text-black">
                <p>Foxmaner</p>
            </LinkPreview>
            
            <h3 className='font-bold'>CV</h3>
            <p>Ladda ner här!</p>

            <h1 className='font-bold text-2xl'>Programmeringsspråk</h1>

            <div className="border-t border-2 border-black mx-auto w-1/2 m-2"></div>

            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={programming_icons} />
            </div>

            <h1 className='font-bold text-2xl'>Färdigheter</h1>
            <div className="border-t border-2 border-black mx-auto w-1/2 m-2"></div>
        </header>
    );
}
