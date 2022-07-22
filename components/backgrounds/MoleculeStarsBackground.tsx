import { imageHostURL } from "../../utils/constants/constants";

export default function MoleculeStarsBackground(props: any) {
  return (<div className="bg-repeat"
    style={{
      backgroundImage: `url('${imageHostURL}/molecule_stars.png')`,
      backgroundSize: '500px'
    }}>
    {props.children}
  </div>)
}