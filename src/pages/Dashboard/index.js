import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Meus Gastos</Title>
      </Container>
    </Background>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meus Gastos',
  tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor}/>
};
