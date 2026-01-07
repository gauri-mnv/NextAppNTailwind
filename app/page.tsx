// import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>
        NextJS!
      </h1>
      <br />
      <Link href="/user">User</Link>
      <br />
      <ProductCard />
    </main>
  )
}
