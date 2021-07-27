import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Blogs.css';

const Blogs = (props) => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/blog/titles', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
        });
    }, [])

    return (
        <div className='Blogs'>
            <Header isProfilePage={false}>Blogs & FAQs</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        blogs
                        ? blogs.map(blog => (
                            <Link to={`${props.location.pathname}/${blog._id}`} key={blog._id} className='Blog-Title'>{blog.title}</Link>
                        ))
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs;