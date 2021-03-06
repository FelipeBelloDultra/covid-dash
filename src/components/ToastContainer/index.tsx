import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-10%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-10%', opacity: 0 },
    },
  );

  return (
    <>
      {messagesWithTransitions.length !== 0 && (
        <Container>
          {messagesWithTransitions.map(({ item, key, props }) => (
            <Toast key={key} style={props} message={item} />
          ))}
        </Container>
      )}
    </>
  );
};

export default ToastContainer;
