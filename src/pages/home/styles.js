import styled from "styled-components";

export const Container = styled.SafeAreaView`
    background-color: #0c0c0c;
    flex: 1;
`;

export const Head = styled.SafeAreaView`
    height: 125px;
    background-color: #000;
`; 

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 30px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: rgba(255,255,255, 0.05);
    width: 82%;
    height: 45px;
    border-radius: 7px;
    padding: 8px 15px;
    font-size: 18px;
    color: #ddd;
    border: 1px solid #525252;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 45px;
    margin-left: 10px;
    align-items: center;
    padding-bottom: 1px;
    justify-content: center;
    border: 1px solid #239db0;
    background-color: rgba(002,217,250, 0.1);
    border-radius: 7px;
`;