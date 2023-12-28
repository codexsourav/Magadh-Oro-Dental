"use client"
import React, { useState } from 'react';
import styles from './styles/adminhome/adminhome.module.css'
import { BlogPost } from '@/lib/models/blogposts';
import { viewDate } from '@/helper/getVewDate';
import Swal from 'sweetalert2';
import MakeApiRequest from '@/helper/makeApiRequest';
import { BlogData } from './AddNewBlog';

const AdminHome = ({ blogs, onUpdate }: { blogs: BlogPost[], onUpdate: React.Dispatch<React.SetStateAction<BlogPost | null>> }) => {
    return (
        <div className={styles.home}>
            <h1>Latest Blogs</h1>
            <br />
            {
                blogs.length == 0 ? <p>No Posts Found!</p> : blogs.map((e) => {
                    return <Blog data={e} key={e._id} onUpdate={onUpdate} />
                })
            }
        </div>
    );
};

export default AdminHome;



const Blog = ({ data, onUpdate }: { data: BlogPost, onUpdate: React.Dispatch<React.SetStateAction<BlogPost | null>> }) => {
    const [isDelete, setIsDelete] = useState<boolean>(false)

    const deleteRequest = (id: string) => {
        Swal.fire({
            title: 'Confirm to Delete',
            text: 'Are you sure you want to do this?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Action to perform on "Yes" confirmation
                Swal.fire('Deleted!', 'Your Blog Post has been Delete.', 'success');
                setIsDelete(true);
                const makeapi = new MakeApiRequest("/api/blog/" + id, "", "DELETE");
                await makeapi.send();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Action to perform on "No" confirmation or cancellation
                Swal.fire('Cancelled', 'Your Blog Delete has been cancelled.', 'error');
            }
        });
    };

    return (
        <>
            <div className={styles.blogView}>
                <h3>{data.title}</h3>
                <p>Date: {viewDate(data.createdAt)}</p>
                {isDelete ? null : <div className={styles.action}>
                    <button className='mybtn' onClick={() => onUpdate(data)} >Update</button>
                    <button className='mybtn danger' onClick={() => { deleteRequest(data._id) }} >Delete</button>
                </div>}
            </div>
        </>
    )
};