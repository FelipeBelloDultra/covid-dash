import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { ContainerGraph } from './styles';

interface GraphProps {
  values: {
    region: string;
    confirmed: number;
    deaths: number;
    recovered: number;
  };
}

const Graph: React.FC<GraphProps> = ({ values }) => {
  const dataGraph = useMemo(() => {
    return {
      maintainAspectRatio: false,
      labels: ['Confirmed', 'Deaths', 'Recovered'],
      datasets: [
        {
          data: [values.confirmed, values.deaths, values.recovered],
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
  }, [values]);

  return (
    <div>
      <ContainerGraph>
        <Doughnut
          options={{
            maintainAspectRatio: false,
          }}
          data={dataGraph}
        />
      </ContainerGraph>
    </div>
  );
};

export default Graph;
