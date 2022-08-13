import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper';
import styled from 'styled-components/native'
import { colors } from '../../../theme/colors';
import { sizes } from '../../../theme/sizes';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { fonts } from '../../../theme/fonts';

const Title = styled.Text`font-family:${({ theme }) => fonts.heading};padding:${({ theme }) => sizes[1]}`
const RestaurantCard = styled(Card)`background-color:${({ theme }) => colors.bg.primary}`
const RestaurantCardCover = styled(Card.Cover)`background-color:${({ theme }) => colors.bg.primary}; padding: ${({ theme }) => sizes[1]}`
function RestaurnatInfo({ restuarant = {} }) {
    const [oswaldLoaded] = useOswald({ Oswald_400Regular });
    const [latoLoaded] = useLato({ Lato_400Regular });

    const {
        name = "Restaurant",
        icon,
        photo = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26231113%2F5783153.jpg',
        address = "100 Road Add",
        openingHours,
        rating,
        isClosedTemporarily
    } = restuarant;
    if (!oswaldLoaded || !latoLoaded) return null;
    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photo }} />
            <Title>{name}</Title>
        </RestaurantCard>
    )
}

export default RestaurnatInfo