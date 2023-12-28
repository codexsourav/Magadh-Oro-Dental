import React from 'react';
import styles from './styles/Sidebar/sidebar.module.css'
import { clearStorage } from '@/helper/storage';

interface sidebarData {
    setTabIndex: Function,
    index: number,
}

const SideBar = ({ setTabIndex, index }: sidebarData) => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <h3>Admin</h3>
                <li className={`${index == 0 ? styles.active : null}`} onClick={() => setTabIndex(0)}>Home</li>
                <li className={`${index == 1 ? styles.active : null}`} onClick={() => setTabIndex(1)}>Add Blog</li>
                <li className={`${index == 2 ? styles.active : null}`} onClick={() => setTabIndex(2)}>Contact</li>
                <li className={`${index == 3 ? styles.active : null}`} onClick={() => setTabIndex(3)}>Booking</li>
            </ul>
            <a href='#' onClick={() => {
                clearStorage();
                window.location.replace('/admin/login')
            }}>Logout</a>
        </div>
    );
};

export default SideBar;