import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .8,
        shadowRadius: 2,
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#eee",
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    subjectView: {
        flexDirection: 'row',
        margin: 3,
    },

    subjectIcon: {
        color: '#000',
        marginRight: 5,
    },

    subjectText: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
    },

    bio: {
        marginLeft: 15,
    },

    bioIcon: {
        marginRight: 5,
    },

    bioComplement: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        paddingTop: 1,
    },

    bioContainer: {
        flexDirection: 'row'
    },

    bioText: {
        marginTop: 8,
        maxWidth: 390,
        fontFamily: 'Archivo_400Regular',
        textAlign: 'left',
        lineHeight: 16,
    },

    footer: {
        backgroundColor: 'rgba(0, 0, 0, .1)',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    favorited: {
        backgroundColor: '#e33d3d',
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    },
});

export default styles;