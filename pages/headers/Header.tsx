// import Navigation from "../../layout/navs/Navigation";
import Navbar from "../../components/menus/NavBar"

export default function Header() {
  return (
    <header className="top-0 left-0 w-full md:sticky z-10 absolute backdrop-filter backdrop-blur">
      <Navbar />
    </header >
  )
}