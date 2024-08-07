import { Cordinate } from "../types/types";
import { Text, StyleSheet } from 'react-native';


function getRandomFruitEmoji() {
    const fruitEmojis = ['🍎', '🚬', '🍊', '⚽', '💦', '🍋', '🍌', '🍉', '🍇', '🍓', '🍒', '🍑', '🍍',];
    const randomIndex = Math.floor(Math.random() * fruitEmojis.length);
    return fruitEmojis[randomIndex];
}


export default function Food({ x, y }: Cordinate): JSX.Element {
    return <Text style={[{ top: y * 10, left: x * 10 }, styles.food]}>{getRandomFruitEmoji()}</Text>;
}

const styles = StyleSheet.create({
    food: {
        width: 20,
        height: 20,
        borderRadius: 7,
        position: 'absolute',
    }
})