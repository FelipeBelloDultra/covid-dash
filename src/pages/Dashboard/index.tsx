import { FormEvent, useCallback, useEffect, useState } from 'react';

import InputFiltred from '../../components/InputFiltred';
import Graph from '../../components/Graph';

import { useRegion } from '../../hooks/Cases';

import api from '../../utils/api';

import { Container, FormContainer } from './styles';

const Dashboard: React.FC = () => {
  const [countriesCollection, setCountriesCollection] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const { getInformationsData, lastUpdate } = useRegion();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      await getInformationsData({ region: inputValue });
    },
    [inputValue, getInformationsData],
  );

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
      <div>
        <FormContainer onSubmit={event => handleSubmit(event)}>
          <InputFiltred
            options={countriesCollection}
            setInputValue={setInputValue}
          />

          <button type="submit">Get Data</button>
        </FormContainer>

        {lastUpdate && (
          <span>
            Last update: <span className="date"> {lastUpdate}</span>
          </span>
        )}
      </div>

      <Graph />
    </Container>
  );
};

export default Dashboard;
