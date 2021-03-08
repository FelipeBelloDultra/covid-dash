import { Container } from './styles';

import LoaderIcon from '../../assets/loader.svg';

interface Props {
  active: boolean;
}

const Loader: React.FC<Props> = ({ active }) => {
  return (
    <Container className={active ? 'active' : ''}>
      <img src={LoaderIcon} alt="Loeader Icon" width="100" height="100" />
    </Container>
  );
};

export default Loader;
