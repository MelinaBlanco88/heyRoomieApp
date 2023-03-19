import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styles } from '../../assets/css/styles';
import Header from '../../src/components/Header.js';
import { NativeBaseProvider, Center } from "native-base";

const Home = ( { navigation } ) => {
    return (
        <NativeBaseProvider>
            <Header title='Encuentra Roomie de forma segura' />

            <Center>
                <Image 
                    source={require('./img/logo.png')} 
                    style={{
                        width: 200,
                        marginTop: 30,
                        resizeMode: 'contain',
                    }}
                />
            </Center>

            <View style={styles.screen}>
                <Pressable onPress={() => { 
                    navigation.navigate('RoomsList') 
                }} style={styles.button}>
                    <Text style={styles.colorWhite}>Login</Text>
                </Pressable>
            </View>
        </NativeBaseProvider>
    );
}

export default Home;
