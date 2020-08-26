import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ img }) => {
    return (
        <aside className="App-sidebar">
            <div>
                <img src={img} className="App-sidebar-avatar" alt="avatar" />
            </div>
            <div className="App-sidebar-links">
                <Link to="/terminals">Терминалы</Link>
                <Link to="/buyers">Покупатели</Link>
            </div>
            <div className="App-sidebar-footer">
                Copyright © 2020
            </div>
        </aside>
    )
}

export default Sidebar