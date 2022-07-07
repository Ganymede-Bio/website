import Navigation from "../../layout/navs/Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full sticky z-10 absolute bg-gray-800 py-3">
      <Navigation />
    </header>
  )
}