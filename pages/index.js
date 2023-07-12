import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
      <div>
        <ul>
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
        <h1>Hello World</h1>
      </div>
  )
}
