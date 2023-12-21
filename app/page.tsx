import {Home as HomeIcon} from 'lucide-react';
import {NavigationLinks} from '@/data/navigation-links';
import Link from 'next/link';
import {element} from "prop-types";

export default function Home() {
    return (
        <div className={"w-1/6 h-screen bg-white"}>
            <ul className={"text-black pt-20 pl-6"}>
                {NavigationLinks.map((navigationElement) => {
                    return (
                        <Link href={navigationElement.href} className={"flex"}>
                            <HomeIcon />
                            <li className={"ml-4"}>{navigationElement.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}