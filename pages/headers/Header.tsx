import Navigation from "../../layout/navs/Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full sticky z-10 absolute bg-color-header py-3 opacity-95 backdrop-blur">
      <Navigation />
    </header>
  )
}