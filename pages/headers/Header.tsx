// import Navigation from "../../layout/navs/Navigation";
import Navbar from "../../components/menus/NavBar"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full sticky z-10 absolute bg-color-header opacity-95 backdrop-blur">
      <Navbar />
    </header>
  )
}