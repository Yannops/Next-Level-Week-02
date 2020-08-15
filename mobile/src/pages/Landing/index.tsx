import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import landingImage from '../../assets/images/landing.png';
import styles from './styles';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';

function Landing() {
    const navigation = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const total = response.data;
            setTotalConnections(total);
        });
    }, []);

    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudy() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner} />
            <Text style={styles.title}>Seja Bem-Vindo, {'\n'}
                <Text style={styles.titlebold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={handleNavigateToStudy}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecundary]}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>

    );
}

export default Landing;