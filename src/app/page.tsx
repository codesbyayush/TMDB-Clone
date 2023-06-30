import Image from 'next/image'
import Trending from '../components/Trending'
import Popular from '../components/Popular'

export default function Home() {
  return (
    <main className="">
      <Trending />
      <Popular />
      </main>
  )
}