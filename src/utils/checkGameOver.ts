import { Cordinate } from "../types/types";

export const checkGameOver = (snakeHead: Cordinate, boundaries: any): boolean => {
    return (
        snakeHead.x < boundaries.xMin ||
        snakeHead.x > boundaries.xMax ||
        snakeHead.y < boundaries.yMin ||
        snakeHead.y > boundaries.yMax
    );
}