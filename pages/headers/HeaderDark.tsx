import Navigation from "../../layout/navs/Navigation";
// import LoginButton from "../../components/buttons/LoginButton";

export default function HeaderDark() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full">
        <div className="bg-repeat py-6 relative sticky" style={{
          backgroundImage: `url('/molecule_constellation.png')`,
          backgroundSize: '250px'
        }}>

          <nav
            className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 pb-4"
            aria-label="Global"
          >
            {/* <Image src="/moleculeStars.png" layout='fill' className="bg-repeat" /> */}


            <Navigation />
            {/* <LoginButton text="Log in" /> */}
          </nav>

        </div>
      </header>
    </>
  );
}
