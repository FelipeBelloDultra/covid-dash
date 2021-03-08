import { useTheme } from '../../hooks/Themes';

import { Container } from './styles';

const Header: React.FC = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <Container>
      <button type="button" onClick={handleToggleTheme}>
        Toggle Theme
      </button>
    </Container>
  );
};

export default Header;
