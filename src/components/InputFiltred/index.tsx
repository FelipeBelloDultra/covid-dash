import {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import api from '../../utils/api';

import { Container, FilterContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputFiltred: React.FC<InputProps> = () => {
  const [filtredOption, setFiltredOption] = useState<string[]>([]);
  const [countriesCollection, setCountriesCollection] = useState<string[]>([]);

  const inputRef = useRef({} as HTMLInputElement);

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

  function handleSelectCountry(country: string) {
    inputRef.current.value = country;
  }

  function handleBlurInput() {
    setTimeout(() => {
      setFiltredOption([]);
    }, 200);
  }

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        const filters = countriesCollection.filter(option => {
          return option
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });

        setFiltredOption(filters);
      } else {
        setFiltredOption([]);
      }
    },
    [countriesCollection],
  );

  return (
    <Container>
      <input
        onBlur={() => handleBlurInput()}
        onChange={event => handleChangeInput(event)}
        placeholder="Select a country..."
        ref={inputRef}
        max="255"
        type="text"
      />

      {filtredOption.length !== 0 && (
        <FilterContainer>
          {filtredOption.map(option => (
            <li key={option}>
              <button type="button" onClick={() => handleSelectCountry(option)}>
                {option}
              </button>
            </li>
          ))}
        </FilterContainer>
      )}
    </Container>
  );
};

export default InputFiltred;
