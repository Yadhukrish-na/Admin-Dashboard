import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widget from '../../Components/Widget/Widget';
import Pies from '../../Components/Pie chart/Pie';
import Bar from '../../Components/Bar/Bar';

function Home() {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="Subcontainer">
          <Pies/>
          <Bar/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Bar/>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default Home;