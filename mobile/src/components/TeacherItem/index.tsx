import React, { useState } from 'react';
import styles from './styles';
import { View, Image, Text, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    async function handleLinkToWhatsapp() {
        await api.post('connections', {
            user_id: teacher.id
        })

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorite() {

        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            })

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <View style={styles.subjectView}>
                        <Ionicons style={styles.subjectIcon} size={15} name="ios-book" />
                        <Text style={styles.subjectText}>{teacher.subject}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bio}>
                <View style={styles.bioContainer}>
                    <Ionicons style={styles.bioIcon} size={15} name="ios-body" />
                    <Text style={styles.bioComplement}>BIOGRAFIA:</Text>
                </View>
                <Text style={styles.bioText}>{'   '}{teacher.bio}</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.favorited : {},
                        ]}>
                        {isFavorited
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }

                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp} >
                        <Image source={WhatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

        </View>
    );
}

export default TeacherItem;