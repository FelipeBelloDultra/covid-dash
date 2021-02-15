import { Link } from 'react-router-dom';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Dashboard</h1>

      <Link to="/about">Go About</Link>
    </Container>
  );
};

export default Dashboard;
