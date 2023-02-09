import Head from "next/head"
import { imageHostURL } from "../../utils/constants/constants"

interface IGanymedeTitle {
  title: string,
  companyNameFirst?: boolean
}

export default function GanymedeTitle({ title, companyNameFirst = true }: IGanymedeTitle) {
  const fullTitle = companyNameFirst ? `Ganymede | ${title}` : `${title} | Ganymede`

  return (<Head>
    <meta property="og:title" content="Ganymede Bio is an enterprise data platform that integrates ELN, LIMS, instruments, and applications." key="title" />
    <title>{fullTitle}</title>
    <link rel="shortcut icon" href={`${imageHostURL}/logo/favicon.png`} type="image/x-icon" />
  </Head>)
}