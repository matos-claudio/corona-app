import React, { Component } from 'react'
import { StyleProvider, Container, Content, Text, View, Icon, Item, Input, Form, H1, H3 } from 'native-base'
import getTheme from '../../../native-base-theme/components'
import common from '../../../native-base-theme/variables/commonColor'
import { StatusBar, Image, TouchableOpacity } from 'react-native'
//import * as Font from 'expo-font';

//Font.loadAsync()


export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <StyleProvider style={getTheme(common)}>
                <Container>
                    <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
                    <Content transparent contentContainerStyle={{ flexGrow: 1, marginHorizontal: 20 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignContent: "flex-end" }}>
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Image source={require('../../../assets/image.jpeg')} resizeMode={'center'} style={{height: 350, width: 300}}/>
                                <H3 style={{alignSelf: "flex-start", fontWeight: 'bold', marginLeft: 15 }}>Obrigado por vir</H3>
                            </View>
                            <View style={{ flex: 2, justifyContent: "flex-start" }}>
                                <Form>
                                    <Item>
                                        <Icon active name="ios-call" />
                                        <Input placeholder="Seu telefone" />
                                    </Item>
                                    <Item>
                                        <Icon active name="ios-lock" />
                                        <Input placeholder="Sua senha" />
                                    </Item>
                                </Form>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <TouchableOpacity style={{ width: '100%', height: 45, backgroundColor: '#0d47a1', justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>LOGIN</Text>
                                </TouchableOpacity>
                                <Text style={{ alignItems: "center", alignSelf: "center", color: '#01579b', fontSize: 12, marginTop: 10, fontWeight: 'bold' }}>Não possui uma conta? Crie uma agora mesmo</Text>
                            </View>
                        </View>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}