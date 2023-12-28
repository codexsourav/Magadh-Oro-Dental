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
import { getStorage } from '@/helper/storage';
import loading from '../loading';

const page = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [data, setData] = useState(null);
    const [updateBlog, setUpdateBlog] = useState<BlogPost | null>(null);
    const authData = getStorage("authdental");

    const checkAuth = () => {
        if (!authData || authData == "") {
            window.location.replace('/admin/login');
        } else {
            loadData();
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
        if (typeof window !== "undefined") {
            checkAuth();
        }
    }, [tabIndex, updateBlog])


    if (typeof window === "undefined" || !authData || authData == "") {
        return loading();
    }

    return (
        <>
            <SideBar index={tabIndex} setTabIndex={setTabIndex} />
            <div className={styles.content}>
                {updateBlog != null ? <UpdateBlog data={updateBlog!} onUpdate={setUpdateBlog} /> : data == null ? <p className='container' style={{ marginTop: "60px" }} > Loading...</p> :
                    [

                        <AdminHome blogs={data['blog']} onUpdate={setUpdateBlog} />,
                        <AddNewBlog />,
                        <ShowContacts contacts={data['contacts']} />,
                        <BookingView />

                    ][tabIndex]}

            </div>
        </>
    );
};

export default page;