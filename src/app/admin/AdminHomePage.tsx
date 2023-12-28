"use client"

import AddNewBlog, { BlogData } from '@/adminComponent/AddNewBlog';
import AdminHome from '@/adminComponent/AdminHome';
import SideBar from '@/adminComponent/SideBar';
import React, { useEffect, useState } from 'react';
import styles from './admin.module.css';
import ShowContacts from '@/adminComponent/ShowContacts';
import BookingView from '@/adminComponent/BookingView';
import MakeApiRequest from '@/helper/makeApiRequest';
import UpdateBlog from '@/adminComponent/update/page';
import { BlogPost } from '@/lib/models/blogposts';
import Loading from '../loading';


const AdminHomePage = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [data, setData] = useState(null);
    const [updateBlog, setUpdateBlog] = useState<BlogPost | null>(null);


    const checkAuth = async () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storage = await import('@/helper/storage');
            const authData = storage.getStorage("authdental");
            if (!authData || authData === "") {
                window.location.replace('/admin/login');
            } else {
                loadData();
            }
        }
    };

    const loadData = async () => {
        setData(null);
        try {
            const makeapi = new MakeApiRequest("/api/admin");
            setData(await makeapi.send())
        } catch (error) {
            setData(null);
        }
    };


    useEffect(() => {

        checkAuth();

    }, [tabIndex, updateBlog])



    return (
        <>
            <SideBar index={tabIndex} setTabIndex={setTabIndex} />
            <div className={styles.content}>
                {updateBlog != null ? <UpdateBlog data={updateBlog!} onUpdate={setUpdateBlog} /> : data == null ? <p className='container' style={{ marginTop: "60px" }} > Loading...</p> :
                    [

                        <AdminHome key="AdminHome" blogs={data['blog']} onUpdate={setUpdateBlog} />,
                        <AddNewBlog key="AdminAddBlog" />,
                        <ShowContacts key="AdminShowContacts" contacts={data['contacts']} />,
                        <BookingView key="AdminBooking" />

                    ][tabIndex]}

            </div>
        </>
    );
};

export default AdminHomePage;