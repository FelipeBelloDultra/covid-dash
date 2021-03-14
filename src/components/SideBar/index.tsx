import { useCallback, useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';

import { useTheme } from '../../hooks/Themes';
import { useIsMobile } from '../../hooks/IsMobile';

import { Container, ButtonToggleSideBar, ListSideBar } from './styles';

const SideBar: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const { colors } = useTheme();
  const { open, toggleOpen } = useIsMobile();

  const handleToggleSideBar = useCallback(() => {
    if (isMobile) {
      toggleOpen(false);

      return;
    }

    setOpenSideBar(prev => !prev);
  }, [toggleOpen, isMobile]);

  const handleClickLink = useCallback(() => {
    if (isMobile) {
      toggleOpen(false);
    }
  }, [toggleOpen, isMobile]);

  useEffect(() => {
    if (document.body.clientWidth < 1130) {
      setIsMobile(prev => !prev);
    }
  }, []);

  return (
    <Container
      isClose={!openSideBar}
      isMobile={isMobile}
      open={!!(open && isMobile)}
    >
      <ButtonToggleSideBar>
        <button type="button" onClick={handleToggleSideBar}>
          <FiChevronsLeft size={35} color={colors.tertiaryColor} />
        </button>
      </ButtonToggleSideBar>

      <ListSideBar>
        <li>
          <NavLink
            to="/dashboard"
            activeClassName="nav-is-active"
            exact
            onClick={handleClickLink}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="nav-is-active"
            exact
            onClick={handleClickLink}
          >
            About
          </NavLink>
        </li>
      </ListSideBar>
    </Container>
  );
};

export default SideBar;
