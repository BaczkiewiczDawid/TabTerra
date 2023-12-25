"use client"

import {NavigationLinks} from "@/data/navigation-links";
import Link from "next/link";
import {Home as HomeIcon} from "lucide-react";

export const Navigation = () => {
  return (
    <div className={"w-1/6 h-screen border-r border-white border-1 p-6"}>
      <h1>TabTerra</h1>
      <ul className={"text-white pt-20"}>
        {NavigationLinks.map((navigationElement) => {
          return (
            <Link key={navigationElement.slug} href={navigationElement.href}
                  className={"flex mt-6 p-3 ease-linear duration-100 hover:bg-zinc-900 "}>
              <HomeIcon/>
              <li className={"ml-4 font-light"}>{navigationElement.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
