import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { useRegion } from '../../hooks/Cases';

import { Container, ContainerGraph } from './styles';

const Graph: React.FC = () => {
  const { informationsValues } = useRegion();

  const dataGraph = useMemo(() => {
    return {
      maintainAspectRatio: false,
      labels: ['Confirmed', 'Deaths', 'Recovered'],
      datasets: [
        {
          data: [
            informationsValues.confirmed,
            informationsValues.deaths,
            informationsValues.recovered,
          ],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [informationsValues]);

  return (
    <Container>
      <ContainerGraph>
        {informationsValues.region && (
          <Doughnut
            options={{
              maintainAspectRatio: false,
            }}
            data={dataGraph}
            height={400}
            width={400}
          />
        )}
      </ContainerGraph>
    </Container>
  );
};

export default Graph;
