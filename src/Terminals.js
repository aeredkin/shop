import React, { useState } from 'react';

function Terminals() {
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [tableArr, setTableArr] = useState([]);
    const Add = () => {
        if (name !== '') {
            setTableArr(tableArr.concat([{ name, des }]));
        }
    }
    return (
        <div className="App-main">
            <div>
                <input type='text' placeholder='Название терминала' onChange={e => setName(e.target.value)} />
                <input type='text' placeholder='Описание' onChange={e => setDes(e.target.value)} />
                <button onClick={() => Add()}>Добавить</button>
            </div>
            <table>
                <caption>Терминалы</caption>
                <thead>
                    <tr>
                        <th>Название терминала</th>
                        <th>Описание</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        tableArr.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.name}</td>
                                    <td>{v.des}</td>
                                    <td>
                                        <button onClick={
                                            () => setTableArr(tableArr.filter(t => t.name !== v.name || t.des !== v.des))
                                        }>Удалить</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Terminals
