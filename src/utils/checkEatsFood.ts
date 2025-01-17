import { Cordinate } from "../types/types";


export const checkEatsFood = (
    head: Cordinate,
    food: Cordinate,
    area: number
): boolean => {
    const distanceBetweenFoodAndSnakeX: number = Math.abs(head.x - food.x);
    const distanceBetweenFoodAndSnakeY: number = Math.abs(head.y - food.y);

    return (
        distanceBetweenFoodAndSnakeX < area && distanceBetweenFoodAndSnakeY < area
    );
};