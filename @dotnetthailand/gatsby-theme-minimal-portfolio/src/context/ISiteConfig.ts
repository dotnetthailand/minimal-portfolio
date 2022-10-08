interface IProfile {
  name: string;
  email: string;
  location: string;
  github: string;
  twitter: string;
  avatar: string;
  description: string;
}

export default interface ISiteConfig {
  contentPath: string;
  siteTitle: string;
  siteTitleShort: string;
  siteLogo: string;
  siteUrl: string;
  pathPrefix: string;
  nodePrefix: string;
  siteDescription: string;
  profile: IProfile;
  headlines: string[]
}
