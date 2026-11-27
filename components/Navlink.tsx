"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};
export default function Navlink({href,children}: NavLinkProps){
    const pathname=usePathname();

    const isActive=pathname===href;

    return(
        <Link
         href={href}
            className={isActive ? "text-blue-500 font-bold" : "text-gray-600"}
        >
        {children}
        </Link>
    );
}