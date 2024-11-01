import { Television } from "phosphor-react-native";
import { Container, Title } from "./styles";

export default function Header() {
  return (
    <Container>
      <Title>Cine João </Title>
      <Television size={50} color="#333" />
    </Container>
  );
}
