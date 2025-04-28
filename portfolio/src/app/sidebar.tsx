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
                className="mx-auto rounded-full md:rounded-none"
                
            />
            <h3 className='font-bold'>Location</h3>
            <p>Linköping, Sweden</p>
            <h3 className='font-bold'>Phone</h3>
            <a href="tel:+46702151716">070-215 17 16</a>
            <h3 className='font-bold'>Email</h3>
            <a href="mailto:eskil.brann@gmail.com">eskil.brann@gmail.com</a>

            <h3 className='font-bold'>Github</h3>
            <LinkPreview
                url="https://github.com/Foxmaner"
                className="text-black">
                <p>Besök här!</p>
            </LinkPreview>


            <h3 className='font-bold'>Linkedin</h3>
            <LinkPreview
                url="https://linkedin.com/in/eskil-brann"
                className="text-black">
                <p>Besök här!</p>
            </LinkPreview>

            <h3 className='font-bold'>CV</h3>
            <LinkPreview
                url="/files/Eskil_Brännerud_CV.pdf"
                imageSrc="/files/thumbnail-cv.png"
                isStatic
                className=""
            >
                <p>Ladda ner!</p>
            </LinkPreview>

            <h1 className='font-bold text-2xl'>Programmeringsspråk</h1>

            <div className="border-t border-2 border-black mx-auto w-1/2 m-2"></div>

            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={programming_icons} />
            </div>

            <h1 className='font-bold text-2xl'>Färdigheter</h1>
            <div className="border-t border-2 border-black mx-auto w-1/2 m-2"></div>
            <ul>
                <li>Verktyg: Git, Visual Studio Code, IntelliJ IDEA</li>
                <li>Övrigt: Agil utveckling/Scrum, Testning </li>
                <li>Operativsystem: Linux, Windows</li>
            </ul>
            <h1 className='font-bold text-2xl'>Hemsidan</h1>
            <div className="border-t border-2 border-black mx-auto w-1/2 m-2"></div>
            <p>Denna hemmsida är byggd av mig själv i NextJS med hjälp av Typescript och Tailwind</p>
        </header>
    );
}
