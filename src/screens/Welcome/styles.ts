import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  font-family: "Inter_700Bold";
`;

export const Button = styled.TouchableOpacity`
    background-color: #333;
    padding: 12px 24px;
    border-radius: 8px;
    margin-top: 24px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-family: 'Inter_700Bold';
`;
