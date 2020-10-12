let quantity = prompt('Сколько элементов в Вашем массиве?')
alert('Число элементов в Вашем массиве: ' + quantity)

const array = []

for (let a = 0; a < quantity; a++) {
   array[a] = parseInt(prompt('Введите числа: '))
}

alert('Полученный массив: array = [' + array + ']') // для красивого вывода
console.log('Полученный массив: array = [' + array + ']') // для красивого вывода

function insertionSort(array) { // сортировка вставками
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        while(array[j] > temp) {
            array[j+1] = array[j];

            j--;
        }

        j++;

        array[j] = temp;
    }

    return array
}

alert('Отсортированный массив (сортировка вставками): array = [' + insertionSort(array) + ']')
console.log('Отсортированный массив (сортировка вставками): array = [' + insertionSort(array) + ']')

function maxElement(array) {
    let m = array[0]
    for (let k = 1; k <= array.length-1; k++) {
        if (array[k]>m)
            m = array[k]
    }
    return m;
}

alert('Максимальный элемент: ' + maxElement(array))
console.log('Максимальный элемент: ' + maxElement(array))

function minElement(array) {
    let m = array[0]
    for (let k = 0; k <= array.length-1; k++) {
        if (array[k]<m)
            m = array[k]
    }
    return m
}

alert('Минимальный элемент: ' + minElement(array))
console.log('Минимальный элемент: ' + minElement(array))

let sum = 0
for (let r = 0; r < array.length; r++) {
    sum = sum + array[r]
}

alert('Сумма всех элементов: ' + sum)
console.log('Сумма всех элементов: ' + sum)