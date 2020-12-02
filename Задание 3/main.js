const data =[
    {
        "Id": "365f2fd4-b0e3-50bd-a006-d93a2d165ca2",
        "quantity": 48,
        "price": "275.00",
        "producer": "Waelchi - Metz",
        "site": "https://jessie.name",
        "cashier": "Marco"
    },
    {
        "Id": "f4331740-6d95-5124-8ad3-760f8bc36a5c",
        "quantity": 20,
        "price": "139.00",
        "producer": "Davis - Russel",
        "site": "http://madge.name",
        "cайт": 55578860
    },
    {
        "Id": "ff6cd070-3fa3-554c-ab94-d66b8e9d2844",
        "quantity": 81,
        "price": "192.00",
        "producer": "Nolan - Nolan",
        "cashier": "Antone",
        "site": "http://laron.info"
    },
    {
        "Id": "9083fdec-b9ca-5920-b6ed-c237d02ded64",
        "quantity": 97,
        "price": "448.00",
        "producer": "Durgan - Veum",
        "site": "http://briana.net",
        "cashier": "King"
    },
    {
        "Id": "a2f12737-2eed-5031-8eda-e2ec88bb0770",
        "quantity": 60,
        "price": "827.00",
        "producer": "Thompson, Gottlieb and Harber",
        "cashier": "Elisha",
        "site": "http://jerel.name"
    },
    {
        "Id": "717b7533-c69f-5078-a7fc-43fde951631e",
        "quantity": 7,
        "price": "487.00",
        "producer": "Miller, Botsford and Olson",
        "site": "http://santa.info",
        "cайт": 77557697.16243175
    },
    {
        "Id": "858bc6c3-928e-542f-b18b-515baeabfdfc",
        "quantity": 20,
        "price": "381.00",
        "producer": "Larson - Zieme",
        "site": "https://jacynthe.name",
        "cashier": "Nils"
    },
    {
        "Id": "2a215f11-e34b-5a4a-bdfd-bc667b54e004",
        "quantity": 93,
        "price": "638.00",
        "producer": "Marvin - Konopelski",
        "cashier": "Jeramy",
        "site": "http://saige.org"
    },
    {
        "Id": "2e057f6b-6913-5918-bff2-df98efb8783d",
        "quantity": 23,
        "price": "771.00",
        "producer": "Nienow, Koelpin and Waelchi",
        "site": "https://molly.org",
        "cashier": "Hubert"
    },
    {
        "Id": "905c6fc3-f456-5dfb-ba53-f5dfc85e48a6",
        "quantity": 83,
        "price": "855.00",
        "producer": "Ankunding, Stiedemann and Steuber",
        "cashier": "Branson",
        "site": "http://gordon.info"
    },
    {
        "Id": "ef44446d-c14d-5f4d-a962-d41496eac866",
        "quantity": 88,
        "price": "479.00",
        "producer": "VonRueden, Schuster and Thompson",
        "site": "https://zoie.net",
        "cashier": "Cordia"
    },
    {
        "Id": "79829129-f9f6-5dae-9442-a8793d87a4ea",
        "quantity": 17,
        "price": "144.00",
        "producer": "Gottlieb, Olson and Nitzsche",
        "cashier": "Dorian",
        "site": "http://jeramy.info"
    },
    {
        "Id": "f735dbf3-bc4a-574b-841d-001726697e2a",
        "quantity": 92,
        "price": "911.00",
        "producer": "Bode - Dickinson",
        "site": "http://francesco.biz",
        "cashier": "Woodrow"
    },
    {
        "Id": "d424b047-fcf3-586a-854e-e6c5f459855d",
        "quantity": 78,
        "price": "41.00",
        "producer": "Rodriguez - White",
        "cashier": "Ladarius",
        "site": "http://demarco.info"
    },
    {
        "Id": "70282f2b-3c83-57c7-a5fe-4c77fed8d0c1",
        "quantity": 54,
        "price": "638.00",
        "producer": "Dooley - Renner",
        "site": "https://dawn.com",
        "cashier": "Jamal"
    },
    {
        "Id": "de368551-a8a1-558f-9178-03784dd3f05b",
        "quantity": 76,
        "price": "20.00",
        "producer": "Kris, Gottlieb and Hodkiewicz",
        "cashier": "Chandler",
        "site": "https://otis.com"
    },
    {
        "Id": "64ad11b9-2623-51c1-8753-6dadfad5708a",
        "quantity": 90,
        "price": "877.00",
        "producer": "Simonis, Schmeler and Turner",
        "cashier": "Jamaal",
        "site": "http://gay.net"
    },
    {
        "Id": "e78f3c2a-e6d4-542b-9bfc-3229f02ed182",
        "quantity": 15,
        "price": "840.00",
        "producer": "Wilkinson, Larkin and VonRueden",
        "site": "http://cristal.info",
        "cashier": "Oma"
    },
    {
        "Id": "a5752e93-821c-5287-9f93-e72aa9dfd849",
        "quantity": 56,
        "price": "119.00",
        "producer": "King and Sons",
        "site": "http://cordell.biz",
        "cайт": true
    },
    {
        "Id": "7a8731a0-0354-5b3d-b039-55df34fbf717",
        "quantity": 41,
        "price": "573.00",
        "producer": "Krajcik Group",
        "site": "https://roosevelt.org",
        "cashier": "Mariam"
    }
];


function createTableHeaders() {
    let Table = document.querySelector('.tableHeader');
    let result = "";
    for (let header of Object.keys(data[0])) {
        let ths =
            `<th scope="col">${header}</th>`;
        let row = `<tr>${ths}</tr>`;
        result += row;
    }
    Table.innerHTML = result;
}

function createRows() {
    let Table = document.querySelector('.tbody');
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
    Table.innerHTML = result;
}

function createStatisticTag(property, desc, result, index) {
    let body = document.querySelector('body');
    let propertyTag = document.createElement('h3');
    propertyTag.setAttribute("class", `${property}Stat${index}`);
    propertyTag.innerHTML = `${desc} ${property}: ${result}`;
    body.append(propertyTag);
}

function countSum(property) {
    let properties = document.querySelectorAll(`.${property}`)
    let sum = 0;
    for (let property of properties) {
        sum += Number(property.innerHTML);
    }

    return sum;
}

function countAverageValue(property) {
    let properties = document.querySelectorAll(`.${property}`)
    let averageValue = 0;
    for (let property of properties) {
        averageValue += Number(property.innerHTML);
    }

    averageValue = Math.round((averageValue / properties.length) * 100) / 100;
    return averageValue;
}

function updateResult(property, desc, result, index) {
    let element = document.querySelector(`.${property}Stat${index}`);
    element.innerHTML = `${desc} ${property}: ${result}`
}

function renderForm() {
    let formForNewData = document.querySelector('.formForNewData');
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
    formForNewData.innerHTML = result;
}

function chooseRow(count) {
    let obj = data[count]
    for (let key of Object.keys(data[count])) {
        let value = obj[`${key}`];
        document.querySelector(`#${key}Input`).value = value;
    }
    row = document.querySelector('.rowNumber');
    row.innerHTML = count;
}

function addRow() {
    let obj = {};
    for (let key of Object.keys(data[0])) {
        let value = document.querySelector(`#${key}Input`).value;
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
    return Number(document.querySelector('.rowNumber').innerHTML);
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
        obj[`${key}`] = document.querySelector(`#${key}Input`).value;
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

