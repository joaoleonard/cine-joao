import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 0 12px 0 12px;
`;

export const Content = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  font-family: "Inter_400Regular";
  text-align: center;
`;

export const MoviesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 8px;
  position: absolute;
  left: 0;
`;
