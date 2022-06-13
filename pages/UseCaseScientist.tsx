import Header from "./headers/Header";
import UseCaseScientistSection from "./section/UseCaseScientistSection";

export default function UseCaseScientist() {
  return (
    <div className="bg-repeat"
      style={{
        backgroundImage: `url('/molecule_stars.png')`,
        backgroundSize: '500px',
      }}>
      <Header />
      <UseCaseScientistSection />
    </div>
  );
}
