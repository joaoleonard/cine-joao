import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ color: string | undefined }>`
  background-color: ${(props) => props.color};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Genre = styled.Text`
  color: #333;
  font-size: 18px;
  font-family: "Inter_700Bold";
  text-align: center;
  flex-wrap: wrap;
`;
