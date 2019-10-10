'use strict';

let mover = {
    canPlayerMakeStep(nextPoint) {
        return nextPoint.x >= 0 &&
            nextPoint.x < config.colsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.rowsCount;
    },
    getDirection() {
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];

        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 5, 6, 7 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел (1, 2, 3, 4, 5, 6, 7 или 8');
                continue;
            }
            return direction;
        }
    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    },
};