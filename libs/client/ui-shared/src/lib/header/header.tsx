import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="flex">
      <h1>Luke! I am your father</h1>
    </header>
  );
}

export default Header;
