import React from "react";
import { View, Text, Image } from "react-native";

import { Container, SearchContainer, SearchButton, Input} from "./styles";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";


export default function Home(){
    return(
        <Container>
      
            <Header  title="React Prime" />
         
            <SearchContainer>
                <Input
                    placeholder="Buscar.."
                    placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color='#00dbfc'/>
                </SearchButton>
            </SearchContainer>

            
        </Container>
    );
}