import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="flex">
      <h1>Luke!</h1>
    </header>
  );
}

export default Header;
