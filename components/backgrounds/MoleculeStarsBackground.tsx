import React from 'react'
import { imageHostURL } from "../../utils/constants/constants";

interface IChildren {
  children?: JSX.Element | JSX.Element[]
}

export default function MoleculeStarsBackground({ children }: IChildren) {
  return (<div className="bg-repeat"
    style={{
      backgroundImage: `url('${imageHostURL}/molecule_stars.png')`,
      backgroundSize: '500px'
    }}>
    {children}
  </div>)
}