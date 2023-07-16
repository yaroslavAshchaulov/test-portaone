
let form = document.querySelector('.search-form');
let result = document.querySelector('.text');
let string = null;

form.addEventListener('submit', onSearch)

function onSearch(event) {
    event.preventDefault();
    // Отримуємо доступ до введеного тесту в поле вводу
    string = event.target.elements[0].value

    // Прибираємо зайві пробіли та символи в тексті
    string = string.replace(/[^a-zа-яё\s]/gi, '');
    string = string.replace(/\r?\n/g, ' ');
    string = string.replace(/ +/g, ' ').trim();

    // Перетворюємо рядок в масив слів розділені пробілом
    const arrayWords = string.split(" ");

    // За допомогою метода map знаходимо в кожному елементі перший унікальний символ та створюємо масив унікальних символів
    const arrayUniqueSymbol = arrayWords.map(str => searchFirstUniqueSymbol(str));

    // Перетворюємо масив унікальних символів в рядок
    let stringUniqueSymbol = arrayUniqueSymbol.join('');

    // Знаходимо перший унікальний символ
    let symbol = searchFirstUniqueSymbol(stringUniqueSymbol);

    // Передаємо результат на строрінку
    result.textContent = `Unique symbol: ${symbol}`;
}

// Функція за допомогою якої знаходимо перший унікальний символ рядка
function searchFirstUniqueSymbol (str) {
    if (str) {
        let length = str.length;
        if (length === 1) {
            return str;
        }

        for (let i = 0; i < length; i += 1) {
            let symbol = str[i];

            if (i === str.indexOf(symbol) && i === str.lastIndexOf(symbol)) {
                return symbol;
            }
        }
        return '';
    };
}







