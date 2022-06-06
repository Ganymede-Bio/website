export interface ILink {
  header: string,
  href: string,
  description?: string | string[]
}


export interface IFlyoutMenu {
  name: string,
  subMenu: Array<ILink>
}

