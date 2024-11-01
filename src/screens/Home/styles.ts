import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    padding: 24px 12px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    font-family: 'Inter_700Bold';
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    color: #333;
    font-family: 'Inter_700Bold';
`;

export const Label = styled.Text`
    font-size: 18px;
    color: #333;
    font-family: 'Inter_400Regular';
    margin-top: 16px;
    text-align: center;
`;

export const GenresContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #333;
  padding: 12px 24px;
  border-radius: 8px;
  margin-top: 24px;
  position: absolute;
  bottom: 32px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Inter_700Bold";
`;