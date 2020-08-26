import React from 'react';
import { useParams } from 'react-router-dom';
import { bl } from './Buyers';

function Buyer() {
    const { id } = useParams();
    const b = bl.find(v => v.id === parseInt(id));
    return (
        <div className="App-main">
            {
                <table>
                    <caption>
                        Покупатель {b.name}
                    </caption>
                    <thead>
                        <tr>
                            <th>Средний чек</th>
                            <th>Количество покупок</th>
                            <th>Общая выручка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{b.average}</td>
                            <td>{b.quantity}</td>
                            <td>{b.total}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Buyer
