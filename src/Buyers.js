import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const bl = [
    { id: 1, name: 'Юрий', average: 19, quantity: 5, total: 95 },
    { id: 2, name: 'Мария', average: 47, quantity: 9, total: 423 },
    { id: 3, name: 'Ярослав', average: 53, quantity: 5, total: 265 },
    { id: 4, name: 'Дарья', average: 30, quantity: 8, total: 240 },
    { id: 5, name: 'Максим', average: 45, quantity: 1, total: 45 },
    { id: 6, name: 'Александр', average: 50, quantity: 8, total: 400 },
    { id: 7, name: 'Артём', average: 35, quantity: 7, total: 245 },
    { id: 8, name: 'Семён', average: 61, quantity: 7, total: 427 },
    { id: 9, name: 'Алёна', average: 71, quantity: 4, total: 284 },
    { id: 10, name: 'Анастасия', average: 29, quantity: 4, total: 116 },
    { id: 11, name: 'Полина', average: 28, quantity: 3, total: 84 },
    { id: 12, name: 'Андрей', average: 18, quantity: 5, total: 90 },
    { id: 13, name: 'Дмитрий', average: 35, quantity: 6, total: 210 },
    { id: 14, name: 'Анастасия', average: 60, quantity: 9, total: 540 },
    { id: 15, name: 'Александр', average: 31, quantity: 2, total: 62 }
]

let fl = bl.slice();
let filter = '';

function Buyers() {
    const [tableArr, setTableArr] = useState(fl);
    const [itemsCount, setItemsCount] = useState(15);
    const [page, setPage] = useState(1);
    const [buttons, setButtons] = useState([]);
    const pagination = (i, p = 1) => {
        setPage(p);
        setItemsCount(i);
        const b = [];
        for (let n = 1; n <= Math.ceil(fl.length / i); ++n) {
            b.push(<button onClick={() => pagination(i, n)}>{n}</button>);
        }
        setButtons(b);
        setTableArr(fl.slice((p - 1) * i, p * i));
    }
    const filtration = v => v.name.toLocaleLowerCase().includes(filter);
    const sorting = (column, asc = true) => {
        fl = bl.sort((a, b) => asc ? a[column] - b[column] : b[column] - a[column])
            .filter(filtration);
        setTableArr(fl.slice((page - 1) * itemsCount, page * itemsCount));
    }
    return (
        <div className='App-main'>
            <table>
                <caption>
                    Покупатели
                    <div>
                        Количество строк на странице
                        <button onClick={() => pagination(5)}>5</button>
                        <button onClick={() => pagination(10)}>10</button>
                        <button onClick={() => pagination(15)}>15</button>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th>
                            ID покупателя
                        </th>
                        <th>
                            Имя покупателя<br />
                            <div>
                                <input type='text' placeholder='Фильтр' onChange={
                                    e => {
                                        filter = e.target.value.toLocaleLowerCase();
                                        fl = bl.filter(filtration);
                                        pagination(itemsCount);
                                    }
                                } />
                            </div>
                        </th>
                        <th>
                            Средний чек<br />
                            <button onClick={() => sorting('average')}>&uarr;</button>
                            <button onClick={() => sorting('average', false)}>&darr;</button>
                        </th>
                        <th>
                            Количество покупок<br />
                            <button onClick={() => sorting('quantity')}>&uarr;</button>
                            <button onClick={() => sorting('quantity', false)}>&darr;</button>
                        </th>
                        <th>
                            Общая выручка<br />
                            <button onClick={() => sorting('total')}>&uarr;</button>
                            <button onClick={() => sorting('total', false)}>&darr;</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableArr.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td><Link to={`/buyers/${v.id}`}>{v.name}</Link></td>
                                    <td>{v.average}</td>
                                    <td>{v.quantity}</td>
                                    <td>{v.total}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>{buttons}</div>
        </div>
    )
}

export default Buyers
