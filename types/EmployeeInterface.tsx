export interface IEmployee {
  name: string,
  role: string,
  imageUrl: string,
  linkedinUrl: string,
  githubUrl?: string,
  focus: string,
  blurb?: (string | JSX.Element)[]
}
