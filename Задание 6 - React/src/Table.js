import React from 'react';
import {data} from './data'

let thead = []
for (let header of Object.keys(data[0])) {
   thead.push(<td>{header}</td>)
}
const TableHeader = () => {
    return (
        <thead>
        {thead}
        </thead>

    );
}

let tbody = [];
let count = 0;

function chooseRow() {
    return 0;
}

for (let item of data) {
    let row =
        <tr className="tableData" id={count} onClick={chooseRow()}>
            <td className="id">{item.id}</td><td className="quantity">{item.quantity}</td>
            <td className="price">{item.price}</td> <td className="producer">{item.producer}</td>
            <td className="site">{item.site}</td><td className="cashier">{item.cashier}</td></tr>;
    tbody.push(row);
    count += 1;
}

const TableBody = () => {
    return <tbody>{tbody}</tbody>;
}
const Table = (props) => {
    const { characterData, removeCharacter } = props;
    return (
        <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    );
}

export default Table;
