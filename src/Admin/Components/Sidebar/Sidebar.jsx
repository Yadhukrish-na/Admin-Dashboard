import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { Card } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';


function Sidebar() {
  return (
    <div>
       <Card className='Sidebar' style={{ backgroundColor: '#1e1e1e' }} >
      <div className='top'><span className="logo">Hi Admin</span></div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <NavLink to={"/"}>
            <li>
              <DashboardIcon className='Icon' />
              <span>Dashboard</span>
            </li>
             </NavLink>
          <p className="title">LISTS</p>
          {/* <Link to={"/Table"} className='link'> */}
            <li>
              <PersonOutlinedIcon className='Icon' />
              <span>Users</span>
            </li>
          {/* </Link> */}
          <NavLink to={"/pay"}>
          <li>
            <Inventory2OutlinedIcon className='Icon' />
            <span>Payment</span>
          </li>
          </NavLink>
           <NavLink to={"/Status"}>
          <li>
            <CreditCardOutlinedIcon className='Icon' />
            <span>Status</span>
          </li>
          </NavLink>
          <li>
            <LocalShippingOutlinedIcon className='Icon' />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <SignalCellularAltOutlinedIcon className='Icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='Icon' />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='Icon' />
            <span>Sytem Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='Icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='Icon' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='Icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='Icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>


    </Card>
    </div>
  )
}

export default Sidebar
