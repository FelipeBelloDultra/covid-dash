import { InputHTMLAttributes, useState, useCallback } from 'react';

import { Container, FilterContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
}

const InputFiltred: React.FC<InputProps> = ({ options }) => {
  const [filtredOption, setFiltredOption] = useState<string[]>([]);

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

  return (
    <Container>
      <input type="text" onChange={event => handleChangeInput(event)} />
      {filtredOption.length ? (
        <FilterContainer>
          {filtredOption.map(option => (
            <li key={option}>{option}</li>
          ))}
        </FilterContainer>
      ) : (
        <h1>NO</h1>
      )}
    </Container>
  );
};

export default InputFiltred;
