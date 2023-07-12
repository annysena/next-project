import Link from "next/link";

export default function Navbar() {
    return (
        <ul>
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <p>Produtos</p>
            </Link>
          </li>
          <li>
          <Link href="/about">
              <p>Sobre nós</p>
            </Link>
          </li>
        </ul>
    )
}