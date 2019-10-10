'use strict';

let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if (mover.canPlayerMakeStep(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },
    init() {
        console.log("Ваше положение на поле в виде о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};
game.init();