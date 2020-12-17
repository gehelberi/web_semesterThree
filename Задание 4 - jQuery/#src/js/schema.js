const {resolve, extend} = require('json-schema-faker');
const fs = require('fs');
extend('faker', () => require('faker'));
const schema = {
    "type": "array",
    "minItems": 20,
    "maxItems": 20,
    "items": {
        "type": "object",
        "properties": {
            "Id": {
                "type": "string",
                "chance": "guid"
            },
            "quantity": {
                "type": "integer",
                "minimum": 0,
                "maximum": 100
            },
            "price": {
                "faker": "commerce.price"
            },
            "cashier": {
                "type": "string",
                "faker": "name.firstName"
            },
            "producer": {
                "type": "string",
                "faker": "company.companyName"
            },
            "site": {
                "type": "string",
                "faker": "internet.url"
            }
        },
        "required": [
            "Id",
            "quantity",
            "price",
            "producer",
            "site",
            "cashier"
        ]
    }
}
resolve(schema).then(sample => {
    console.log('Writing to db.json')
    fs.writeFile(`${__dirname}/db.json`, JSON.stringify(sample), function(err) {
        if(err) {
            console.error(err);
        } else {
            console.log("done");
        }
    });
});