import { InputHTMLAttributes, useState, useCallback, useRef } from 'react';

import { Container, FilterContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  setInputValue(option: string): void;
}

const InputFiltred: React.FC<InputProps> = ({ options, setInputValue }) => {
  const [filtredOption, setFiltredOption] = useState<string[]>([]);

  const inputRef = useRef({} as HTMLInputElement);

  function handleSelectCountry(country: string) {
    inputRef.current.value = country;

    setInputValue(country);
  }

  function handleBlurInput() {
    setTimeout(() => {
      setFiltredOption([]);
    }, 200);
  }

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        const filters = options.filter(option => {
          return option
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });

        setFiltredOption(filters);

        setInputValue(event.target.value);
      } else {
        setFiltredOption([]);
      }
    },
    [options, setInputValue],
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
