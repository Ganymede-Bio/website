// import { people } from "../utils/constants/constants";
// import EmployeeIcon from "../components/images/EmployeeIcon";
// import EmployeeIconTwo from "../components/images/EmployeeIconTwo";
// import AnimatedLogo from "../components/animations/AnimateScale";
import GanymedeLogoSpinning2D from "../components/images/GanymedeLogoSpinning2D"
import GanymedeLogoSpinning3D from "../components/images/GanymedeLogoSpinning3D"
import GanymedeLogoDraw from "../components/images/GanymedeLogoDraw"

export default function Test() {
  return (
    <div className="m-12">
      <GanymedeLogoDraw />
      <br />
      <br />
      <br />
      <GanymedeLogoSpinning2D />
      <br />
      <br />
      <br />
      <GanymedeLogoSpinning3D />
      {/* <EmployeeIcon {...people[5]} /> */}
      {/* <EmployeeIconTwo /> */}
    </div>
  )
}