import { LayoutContainer, Main, ContentPage } from './styles';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

const Default: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />

      <Main>
        <SideBar />

        <ContentPage>{children}</ContentPage>
      </Main>
    </LayoutContainer>
  );
};

export default Default;
