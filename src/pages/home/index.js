import React from "react";
import { View, Text, Image } from "react-native";

import { Container, SearchContainer, SearchButton, Input, Head} from "./styles";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";


export default function Home(){
    return(
        <Container>
          <Head >
            <Header  title="React Prime" />
         
            <SearchContainer>
                <Input
                    placeholder="Buscar.."
                    placeholderTextColor="#6e6e6e"
                />
                <SearchButton>
                    <Feather name="search" size={30} color='#239db0'/>
                </SearchButton>
            </SearchContainer>
          </Head>
            

            
        </Container>
    );
}