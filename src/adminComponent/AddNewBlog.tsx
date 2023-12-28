"use client";
import React, { useState, ChangeEvent } from 'react';
import styles from './styles/newblog/newblog.module.css';
import dynamic from 'next/dynamic';
import MakeApiRequest from '@/helper/makeApiRequest';
import { BlogPost, BlogType } from '@/lib/models/blogposts';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

const EditorComponent = dynamic(() => import('react-quill'), {
    loading: () => <p>Loading editor...</p>,
    ssr: false,
});

export interface BlogData {
    title: string;
    description: string;
    image: string;
    content: string;
}

const AddNewBlog = () => {
    const [Loading, setLoading] = useState<boolean>(false)
    const [blogData, setBlogData] = useState<BlogData>({
        title: '',
        description: '',
        image: '',
        content: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleEditorChange = (content: string) => {
        setBlogData({ ...blogData, content });
    };

    const handleSubmit = async () => {

        if (blogData.title.trim().length == 0 || blogData.description.trim().length == 0 || blogData.image.trim().length == 0 || blogData.content.trim().length == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid Blog Contents!"
            });
            return false;
        }


        const post: BlogType = {
            title: blogData.title,
            desc: blogData.description,
            content: blogData.content,
            image: blogData.image,
        };
        setLoading(true);
        try {
            const makeapi = new MakeApiRequest("/api/blog/", post, "POST");
            const resdata = await makeapi.send();
            setLoading(false);
            if (resdata.success == true) {

                Toast.fire({
                    icon: "success",
                    title: "Post Add in successfully"
                });
                setBlogData({ title: '', description: '', image: '', content: '' });

            } else {
                Toast.fire({
                    icon: "error",
                    title: "Post Add Error!"
                });
            }
        } catch (error) {
            setLoading(false);

            Toast.fire({
                icon: "error",
                title: "Post Add Error!"
            });
        }
        // Handle submission using blogData state
        console.log(blogData);
        // Reset form fields
    };

    return (
        <div className={`${styles.newblog} container`}>
            <br />
            <br />
            <h1>Add New Blog</h1>
            <br />
            <div className="inputgroup">
                <label>Blog Title</label>
                <input
                    type="text"
                    className="input-box"
                    name="title"
                    value={blogData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="inputgroup">
                <label>Blog Description</label>
                <input
                    type="text"
                    className="input-box"
                    name="description"
                    value={blogData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className="inputgroup">
                <label>Blog Image</label>
                <input
                    type="text"
                    className="input-box"
                    name="image"
                    value={blogData.image}
                    onChange={handleInputChange}
                />
            </div>
            <div className="inputgroup">
                <label>Write Blog</label>
                <EditorComponent
                    placeholder="Write Here...."
                    value={blogData.content}
                    onChange={handleEditorChange}
                />
            </div>
            <button className="mybtn" onClick={handleSubmit} disabled={Loading}>
                {Loading ? "Loading..." : "Add New Post"}
            </button>
            <br />
            <br />
        </div>
    );
};

export default AddNewBlog;
