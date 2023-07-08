import { routes } from "routes";
import { HeaderContainer, NavList, NavigationLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
    <nav>
      <NavList>
        <li><NavigationLink to={routes.HOME}>Home</NavigationLink></li>
        <li><NavigationLink to={routes.MOVIES}>Movies</NavigationLink></li>
      </NavList>
    </nav>
  </HeaderContainer>
  )
};

export default Header;