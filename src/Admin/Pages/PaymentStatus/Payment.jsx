import React, { useState } from 'react'
import './Payment.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';

function Payment() {

    const [filter, setFilter] = useState('all');

    const [searchQuery, setSearchQuery] = useState('');

    const users = [
        { id: 1, name: 'Anaina', email: 'anaina@gmail.com', status: '1', paymentdate: '2023-01-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', status: '0', paymentdate: '2023-02-20' },
        { id: 3, name: 'Bob Johnson', email: 'bob@gmail.com', status: '1', paymentdate: '2023-03-10' },
        { id: 4, name: 'Alice Brown', email: 'alice@gmail.com', status: '0', paymentdate: '2023-04-05' },
        { id: 5, name: 'Charlie Wilson', email: 'charlie@gmail.com', status: '1', paymentdate: '2023-05-12' },
    ];

    const getStatusText = (statusCode) => {
        return statusCode === '1' ? 'Paid' : 'Unpaid';
    };

    const filteredUsers = users.filter(user => {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = (
            user.name.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower) ||
            user.paymentdate.includes(searchLower)
        );
        if (filter === 'all') return matchesSearch;
        if (filter === 'paid') return user.status === '1' && matchesSearch;
        if (filter === 'unpaid') return user.status === '0' && matchesSearch;
        return matchesSearch;
    });


    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className='main'>
                    <div className="header"><AttachMoneyIcon /> Payment List</div>

                    <div className='widgetzz'>
                        <div className='paid'>
                            <h3>Paid Users</h3>
                            <p>{users.filter(u => u.status === '1').length}</p>
                        </div>
                        <div className='unpaid'>
                            <h3>Unpaid Users</h3>
                            <p>{users.filter(u => u.status === '0').length}</p>
                        </div>
                        <div className='totaluser'>
                            <h3>Total Users</h3>
                            <p>{users.length}</p>
                        </div>
                    </div>

                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search by name, email, or date..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All Users
                        </button>
                        <button
                            className={`filter-btn ${filter === 'paid' ? 'active' : ''}`}
                            onClick={() => setFilter('paid')}
                        >
                            Paid
                        </button>
                        <button
                            className={`filter-btn ${filter === 'unpaid' ? 'active' : ''}`}
                            onClick={() => setFilter('unpaid')}
                        >
                            Unpaid
                        </button>
                    </div>



                    <div className="table">
                        <div className="table-header">
                            <div className="header-cell">Slno.</div>
                            <div className="header-cell">Name</div>
                            <div className="header-cell">Email</div>
                            <div className="header-cell">Payment Date</div>
                            <div className="header-cell">Status</div>
                        </div>

                        {filteredUsers.map((user, index) => (
                            <div key={user.id} className="table-row">
                                <div className="table-cell">{index + 1}</div>
                                <div className="table-cell">{user.name}</div>
                                <div className="table-cell">{user.email}</div>
                                <div className="table-cell">{user.paymentdate}</div>
                                <div className="table-cell">
                                    <span className={`status-badge ${user.status === '1' ? 'paid' : 'unpaid'}`}>
                                        {getStatusText(user.status)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Payment
