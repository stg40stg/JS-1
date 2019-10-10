'use sctrict';

function getNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение должно быть от 0 до 999');
        return {};
    }

    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    };
}

console.log(getNumber(567));