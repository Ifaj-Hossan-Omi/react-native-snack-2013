export interface GestureEventType {
    nativeEvent: { translationX: number, translationY: number };
}

export interface Cordinate {
    x: number;
    y: number;
}

export enum Direction {
    Right,
    Up,
    Left,
    Down,
}