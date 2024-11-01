import { TouchableOpacityProps } from "react-native";
import { Container, Genre } from "./styles";

type ColoredCardProps = TouchableOpacityProps & {
  title: string;
  color: string | undefined;
};

export default function ColoredCard({ title, color, ...rest }: ColoredCardProps) {
  return (
    <Container color={color} {...rest}>
      <Genre>{title}</Genre>
    </Container>
  );
}
