import Head from "next/head"
import { imageHostURL } from "../../utils/constants/constants"

interface IGanymedeTitle {
  title: string,
  companyNameFirst?: boolean
}

export default function GanymedeTitle({ title, companyNameFirst = true }: IGanymedeTitle) {
  const fullTitle = companyNameFirst ? `Ganymede | ${title}` : `${title} | Ganymede`

  return (<Head>
    <title>{fullTitle}</title>
    <link rel="shortcut icon" href={`${imageHostURL}/logo/favicon.png`} type="image/x-icon" />
  </Head>)
}