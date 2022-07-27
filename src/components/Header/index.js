import React from 'react';
import { Container, MenuButton, Title } from './style';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'; 

export default function Header({title}){

    const navigation = useNavigation();

    return(
        <Container>
        <MenuButton onPress={() => navigation.openDrawer()}>
            <Feather name='menu' size={28} color='#fff'/>
        </MenuButton>
        <Title>{title}</Title>
    </Container>
    )

}