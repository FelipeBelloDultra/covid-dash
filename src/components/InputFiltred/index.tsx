import {
  InputHTMLAttributes,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';

import { Container, FilterContainer } from './styles';

import { useRegion } from '../../hooks/Cases';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setInputValue(option: string): void;
}

const InputFiltred: React.FC<InputProps> = ({ setInputValue }) => {
  const [filtredOption, setFiltredOption] = useState<string[]>([]);

  const { countriesCollection } = useRegion();

  const inputRef = useRef({} as HTMLInputElement);

  function handleSelectCountry(country: string) {
    inputRef.current.value = country;

    setInputValue(country);

    inputRef.current.focus();
  }

  function handleBlurInput() {
    setTimeout(() => {
      setFiltredOption([]);
    }, 200);
  }

  useEffect(() => {
    inputRef.current.focus();

    return () => {
      setFiltredOption([]);
    };
  }, []);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        const filters = countriesCollection.filter(option => {
          return option
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });

        setFiltredOption(filters);

        setInputValue(event.target.value);
      } else {
        setFiltredOption([]);

        setInputValue('');
      }
    },
    [countriesCollection, setInputValue],
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
