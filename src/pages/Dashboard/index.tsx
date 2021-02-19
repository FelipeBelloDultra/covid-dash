import { FormEvent, useCallback, useEffect, useState } from 'react';

import InputFiltred from '../../components/InputFiltred';

import api from '../../utils/api';

import { Container, FormContainer } from './styles';

const Dashboard: React.FC = () => {
  const [countriesCollection, setCountriesCollection] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  console.log(inputValue);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  async function getCountriesData() {
    const response = await api.get('/countries');

    const { countries } = response.data;

    const country = countries.map((countryOption: { name: string }) => {
      return countryOption.name;
    });

    setCountriesCollection(country);
  }

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={event => handleSubmit(event)}>
        <InputFiltred
          options={countriesCollection}
          setInputValue={setInputValue}
        />

        <button type="submit">Get Data</button>
      </FormContainer>
    </Container>
  );
};

export default Dashboard;
