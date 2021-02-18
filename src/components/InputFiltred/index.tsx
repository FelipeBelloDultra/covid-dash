import { InputHTMLAttributes, useState, useCallback, useRef } from 'react';

import { Container, FilterContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
}

const InputFiltred: React.FC<InputProps> = ({ options }) => {
  const [filtredOption, setFiltredOption] = useState<string[]>([]);

  const inputRef = useRef({} as HTMLInputElement);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        const filters = options.filter(option => {
          return option
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });

        setFiltredOption(filters);
      } else {
        setFiltredOption([]);
      }
    },
    [options],
  );

  const handleSelectCountry = useCallback((country: string) => {
    inputRef.current.value = country;
  }, []);

  const handleBlurInput = useCallback(() => {
    setTimeout(() => {
      setFiltredOption([]);
    }, 200);
  }, []);

  return (
    <Container>
      <input
        onBlur={() => handleBlurInput()}
        onChange={event => handleChangeInput(event)}
        ref={inputRef}
        type="text"
      />
      {filtredOption.length ? (
        <FilterContainer>
          {filtredOption.map(option => (
            <li key={option}>
              <button type="button" onClick={() => handleSelectCountry(option)}>
                {option}
              </button>
            </li>
          ))}
        </FilterContainer>
      ) : (
        <h1>NO</h1>
      )}
    </Container>
  );
};

export default InputFiltred;
