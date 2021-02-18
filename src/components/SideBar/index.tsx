import { useCallback, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';

import { Container, ButtonToggleSideBar, ListSideBar } from './styles';

const SideBar: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  const handleToggleSideBar = useCallback(() => {
    setOpenSideBar(prev => !prev);
  }, []);

  return (
    <Container isClose={!openSideBar}>
      <ButtonToggleSideBar>
        <button type="button" onClick={handleToggleSideBar}>
          <FiChevronsLeft size={35} color="#617480" />
        </button>
      </ButtonToggleSideBar>

      <ListSideBar>
        <li>
          <NavLink to="/dashboard" activeClassName="nav-is-active" exact>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="nav-is-active" exact>
            About
          </NavLink>
        </li>
      </ListSideBar>
    </Container>
  );
};

export default SideBar;