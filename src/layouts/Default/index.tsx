import { useEffect } from 'react';

import { useRegion } from '../../hooks/Cases';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import { LayoutContainer, Main, ContentPage } from './styles';

const Default: React.FC = ({ children }) => {
  const { getRegions } = useRegion();

  useEffect(() => {
    getRegions();
  }, [getRegions]);

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
