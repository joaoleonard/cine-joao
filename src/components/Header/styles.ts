import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: #333;
    padding:  12px 12px 24px 12px;
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    font-family: 'Inter_700Bold';
`;