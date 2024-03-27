import Link from 'next/link'

export default function Home() {
    return (
        <header>
            <nav>
            <ul className="flex w-full justify-center text-lg p-5">
                <li className="mr-3">
                <Link href="/">Home</Link>
                </li>
                <li className="mr-3">
                <Link href="/resume">Resume</Link>
                </li>
                <li className="mr-3">
                <Link href="/projects">Projects</Link>
                </li>
                <li className="mr-3">
                <Link href="/aboutme">About me</Link>
                </li>
            </ul>
            </nav>
        </header>
    );
}
