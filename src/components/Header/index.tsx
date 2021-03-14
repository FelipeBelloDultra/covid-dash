import { FiAlignJustify } from 'react-icons/fi';

import { useTheme } from '../../hooks/Themes';
import { useIsMobile } from '../../hooks/IsMobile';

import { Container } from './styles';

const Header: React.FC = () => {
  const { handleToggleTheme, colors } = useTheme();

  const { toggleOpen } = useIsMobile();

  return (
    <Container>
      <button
        type="button"
        className="isMobile"
        onClick={() => toggleOpen(true)}
      >
        <FiAlignJustify size={35} color={colors.tertiaryColor} />
      </button>

      <button type="button" onClick={handleToggleTheme}>
        Toggle Theme
      </button>
    </Container>
  );
};

export default Header;
