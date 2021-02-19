import { FormEvent, useCallback } from 'react';
import InputFiltred from '../../components/InputFiltred';

import { Container, FormContainer } from './styles';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={event => handleSubmit(event)}>
        <InputFiltred />

        <button type="submit">Get Data</button>
      </FormContainer>
    </Container>
  );
};

export default Dashboard;
