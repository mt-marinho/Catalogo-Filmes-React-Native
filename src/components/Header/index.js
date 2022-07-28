import React from 'react';
import { Container, MenuButton, Title, Logo, HeadTitle } from './style';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'; 

export default function Header({title}){

    const navigation = useNavigation();

    return(
    <Container>
        <MenuButton onPress={() => navigation.openDrawer()}>
            <Feather name='menu' size={28} color='#6e6e6e'/>
        </MenuButton>
      
            <Logo source={require('../../assets/logo.png')}/>
            <Title>{title}</Title>
        
    </Container>
    
    )

}