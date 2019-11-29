import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['rgba(2, 0, 36, 1)', 'rgba(9, 9, 121, 1)', 'rgba(0, 212, 255, 1)'],
})`
  flex: 1;
`;
