export type TActiveLinkProps = {
  href: string;
  children: React.ReactNode;
};
type TMenuSidebar = {
  title: string;
  url: string;
  icon?: React.ReactNode;
  isActive: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

//USER
type TCreateUserSchema = {
  cleckId: string;
  username: string;
  email: string;
  avatar?: string;
  name?: string;
};
export { TActiveLinkProps, TMenuSidebar, TCreateUserSchema };
