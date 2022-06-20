import Header from "./headers/Header";
import UseCaseManagementSection from "./useCases/UseCaseManagementSection";

export default function UseCaseManagement() {
  return (
    <div className="bg-repeat"
      style={{
        backgroundImage: `url('/molecule_stars.png')`,
        backgroundSize: '500px',
      }}>
      <Header />
      <UseCaseManagementSection />
    </div>
  );
}
