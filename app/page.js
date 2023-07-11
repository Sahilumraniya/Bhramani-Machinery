import Contect from "./components/Contect"
import Hero from "./components/Hero"
import Products from "./components/Products"

export default function Home() {
  return (
    <>
    <div className="h-full bg-violet-600">
        <Hero />
        <Products />
      </div>
      <Contect />
    </>
  )
}
