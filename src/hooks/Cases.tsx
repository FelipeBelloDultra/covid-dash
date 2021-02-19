import { createContext, useState, useCallback, useContext } from 'react';

import api from '../utils/api';

interface Data {
  confirmed: number;
  deaths: number;
  lastUpdate: string;
  recovered: number;
  region: string;
}

interface GetRegionData {
  region: string;
}

interface CasesContextData {
  informationsValues: object;
  getInformationsData(region: GetRegionData): Promise<void>;
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

const CasesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({} as Data);

  const getInformationsData = useCallback(async ({ region }) => {
    const response = await api.get(`/countries/${region}`);

    const { confirmed, deaths, lastUpdate, recovered } = response.data;

    setData({
      confirmed: confirmed.value,
      deaths: deaths.value,
      lastUpdate,
      recovered: recovered.value,
      region,
    });
  }, []);

  return (
    <CasesContext.Provider
      value={{ informationsValues: data, getInformationsData }}
    >
      {children}
    </CasesContext.Provider>
  );
};

function useRegion(): CasesContextData {
  const context = useContext(CasesContext);

  if (!context) {
    throw new Error('useRegion must be used within an CasesProvider');
  }

  return context;
}

export { CasesProvider, useRegion };