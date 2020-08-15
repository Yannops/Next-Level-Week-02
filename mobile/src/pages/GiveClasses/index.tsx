import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser Proffy?</Text>
                <Text style={styles.description}>Para começar, você presicar se cadastrar como  professor na nossa plataforma web</Text>
            </ImageBackground>
            <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo Bem!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GiveClasses;