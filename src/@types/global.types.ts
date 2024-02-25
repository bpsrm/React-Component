//router
export interface DropdownProps {
  name?: string;
  className?: string;
}

export interface NavigationItem {
  id: number;
  name: string;
  link: string;
}

//profile
export interface Profile {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
}
