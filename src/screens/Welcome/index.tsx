import { useNavigation } from "@react-navigation/native";
import { Button, ButtonText, Container, Title } from "./styles";
import { Television } from "phosphor-react-native";


export default function Welcome() {
    const navigation = useNavigation();

    function enter() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <Title>Cine João </Title>
            <Television size={50} color="#333" />
            <Button onPress={enter}>
                <ButtonText>Adquirir Ingresso</ButtonText>
            </Button>
        </Container>
    )
}