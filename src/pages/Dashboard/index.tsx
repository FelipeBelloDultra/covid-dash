import { FormEvent, useCallback, useState } from 'react';

import InputFiltred from '../../components/InputFiltred';
import Graph from '../../components/Graph';

import { useRegion } from '../../hooks/Cases';

import { Container, FormContainer, InfoContainer, InfoDetail } from './styles';

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const {
    getInformationsData,
    lastUpdate,
    informationsValues,
    resetData,
  } = useRegion();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!inputValue) {
        resetData();
      } else {
        await getInformationsData({ region: inputValue });
      }
    },
    [inputValue, getInformationsData, resetData],
  );

  return (
    <Container>
      <div>
        <FormContainer onSubmit={event => handleSubmit(event)}>
          <InputFiltred setInputValue={setInputValue} />

          <button type="submit">Get Data</button>
        </FormContainer>

        {lastUpdate && (
          <span>
            Last update: <strong> {lastUpdate}</strong>
          </span>
        )}
      </div>

      <InfoContainer>
        {informationsValues.region ? (
          <>
            <Graph
              values={{
                confirmed: informationsValues.confirmed,
                deaths: informationsValues.deaths,
                recovered: informationsValues.recovered,
                region: informationsValues.region,
              }}
            />

            <InfoDetail>
              <span>
                Region:
                <strong> {informationsValues.region}</strong>
              </span>
              <span>
                Confirmed:{' '}
                <strong>
                  {informationsValues.confirmed.toLocaleString('pt-BR')}
                </strong>
              </span>
              <span>
                Deaths:{' '}
                <strong>
                  {informationsValues.deaths.toLocaleString('pt-BR')}
                </strong>
              </span>
              <span>
                Recovered:{' '}
                <strong>
                  {informationsValues.recovered.toLocaleString('pt-BR')}
                </strong>
              </span>
              <span>
                Total:{' '}
                <strong>
                  {(
                    informationsValues.recovered +
                    informationsValues.confirmed +
                    informationsValues.deaths
                  ).toLocaleString('pt-BR')}
                </strong>
              </span>
            </InfoDetail>
          </>
        ) : (
          <div className="alert">
            <span>No region selected</span>
          </div>
        )}
      </InfoContainer>
    </Container>
  );
};

export default Dashboard;
