import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 0 12px 0 12px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 8px;
  position: absolute;
  left: 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
  font-family: "Inter_700Bold";
  text-align: center;
  max-width: 80%;
`;

export const InfosContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 12px 0;
  width: 100%;
`;

export const GenreCard = styled.View<{ color: string | undefined }>`
  background-color: ${(props) => props.color};
  padding: 12px;
  border-radius: 12px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
`;

export const GenreText = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: "Inter_700Bold";
`;

export const LittleText = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: "Inter_600SemiBold";
`;

export const Description = styled.Text`
  font-size: 22px;
  color: #333;
  margin-bottom: 12px;
  font-family: "Inter_600SemiBold";
  text-align: center;
  margin-top: 18px;
`;
