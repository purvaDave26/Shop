import Link from "next/link";

export default function Navbar()
{
    return (
        <nav className="flex gap-6 bg-gray-600 p-4 text-white">
            <Link href="/Home">HOme</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>

        </nav>
    )
}