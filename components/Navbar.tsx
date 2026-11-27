import Link from "next/link";
import Navlink from "./Navlink";

export default function Navbar()
{
    return (
        <nav className="flex gap-5">
            <Navlink href="/Home">HOme</Navlink>
            <Navlink href="/about">About</Navlink>
            <Navlink href="/product">Product</Navlink>

        </nav>
    )
}