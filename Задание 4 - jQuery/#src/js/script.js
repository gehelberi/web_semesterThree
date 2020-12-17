@@include('data.js');

function createTableHeaders() {
    let result = "";
    for (let header of Object.keys(data[0])) {
        let ths =
            `<th scope="col">${header}</th>`;
        result += ths;
    }
    $('.tableHeader').html(result);
}

function createRows() {
    let result = "";
    let count = 0;
    for (let item of data) {
        let tds =
            `<td class="id">${item.id}</td>\n <td class="quantity">${item.quantity}</td>\n 
             <td class="price">${item.price}</td>\n <td class="producer">${item.producer}</td>
             <td class="site">${item.site}</td>\n <td class="cashier">${item.cashier}</td>`;
        let row = `<tr class=tableData id=${count} onclick=chooseRow(id);>${tds}</tr>`;
        result += row;
        count += 1;
    }
    $('.tbody').html(result);
}

function createStatisticTag(property, desc, result, index) {
    let body = $('body');
    let propertyTag = document.createElement('h3');
    propertyTag.setAttribute("class", `${property}Stat${index}`);
    propertyTag.innerHTML = `${desc} ${property}: ${result}`;
    body.append(propertyTag);
}

function countSum(property) {
    let properties = $(`.${property}`)
    let sum = 0;
    for (let property of properties) {
        sum += Number(property.innerHTML);
    }

    return sum;
}

function countAverageValue(property) {
    let properties = $(`.${property}`)
    let averageValue = 0;
    for (let property of properties) {
        averageValue += Number(property.innerHTML);
    }

    averageValue = Math.round((averageValue / properties.length) * 100) / 100;
    return averageValue;
}

function updateResult(property, desc, result, index) {
    let element = $(`.${property}Stat${index}`);
    element.html( `${desc} ${property}: ${result}`);
}

function renderForm() {
    let result = "";
    for (let key of Object.keys(data[0])) {
        let divs =
            `<div class="form-group row">
                <label class="col" for=${key}Input>${key} :</label>
                <input class="col" type="text" class="form-control" id=${key}Input>
            </div>`;
        let row = `${divs}`;
        result += row;
    }
    $('.formForNewData').html(result);
}

function chooseRow(count) {
    let obj = data[count]
    for (let key of Object.keys(data[count])) {
        let value = obj[`${key}`];
        document.querySelector(`#${key}Input`).value = value;
    }
    row = $('.rowNumber').html(count);
}

function addRow() {
    let obj = {};
    for (let key of Object.keys(data[0])) {
        let value = $(`#${key}Input`).val();
        obj[`${key}`] = value;
    }
    data.push(obj);
    updateValues();
}

function updateValues() {
    createRows();
    let sumOfQuantityNew = countSum('quantity');
    let sumOfPriceNew = countSum('price');
    let AverageQuantityNew = countAverageValue('quantity');
    let AveragePriceNew = countAverageValue('price');
    updateResult('quantity', 'Total', sumOfQuantityNew, 1);
    updateResult('price', 'Total', sumOfPriceNew, 2);
    updateResult('quantity', 'Average', AverageQuantityNew, 3);
    updateResult('price', 'Average', AveragePriceNew, 4);
}

function getRowCount() {
    return Number($('.rowNumber').html());
}

function deleteRow() {
    let count = getRowCount();
    data.splice(count, 1);
    updateValues();
}

function editRow() {
    let count = getRowCount();
    let obj = data[count]
    for (let key of Object.keys(data[count])) {
        obj[`${key}`] =$(`#${key}Input`).val();
    }
    updateValues();
}

createTableHeaders();
createRows();
let sumOfQuantity = countSum('quantity');
createStatisticTag('quantity', 'Total', sumOfQuantity, 1);
let sumOfPrice = countSum('price');
createStatisticTag('price', 'Total', sumOfPrice, 2);

let AverageQuantity = countAverageValue('quantity');
createStatisticTag('quantity', 'Average', AverageQuantity, 3);
let AveragePrice = countAverageValue('price');
createStatisticTag('price', 'Average', AveragePrice, 4);
renderForm();

