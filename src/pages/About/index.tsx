import { Link } from 'react-router-dom';

import { Container } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <h1>About</h1>

      <Link to="/dashboard">Go Dash</Link>
    </Container>
  );
};

export default About;
