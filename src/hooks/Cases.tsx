import {
  createContext,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';

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
  informationsValues: Data;
  lastUpdate: string | null;
  countriesCollection: string[];
  getInformationsData(region: GetRegionData): Promise<void>;
  getRegions(): Promise<void>;
  resetData(): void;
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

const CasesProvider: React.FC = ({ children }) => {
  const [countriesCollection, setCountriesCollection] = useState<string[]>([]);
  const [data, setData] = useState<Data>({} as Data);

  const resetData = useCallback(() => {
    setData({
      confirmed: 0,
      deaths: 0,
      lastUpdate: '',
      recovered: 0,
      region: '',
    });
  }, []);

  const getRegions = useCallback(async () => {
    const response = await api.get('/countries');

    const { countries } = response.data;

    const country = countries.map((countryOption: { name: string }) => {
      return countryOption.name;
    });

    setCountriesCollection(country);
  }, []);

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

  const lastUpdate = useMemo(() => {
    if (data.lastUpdate) {
      const date = new Date(data.lastUpdate);

      return date.toLocaleDateString('pt-br');
    }

    return null;
  }, [data]);

  return (
    <CasesContext.Provider
      value={{
        informationsValues: data,
        getInformationsData,
        lastUpdate,
        resetData,
        countriesCollection,
        getRegions,
      }}
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
