// import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>
        Hello NextJS!
      </h1>
      <Link href="/user">User</Link>
      <ProductCard />
    </main>
  )
}
