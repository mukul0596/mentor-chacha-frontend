import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import './Blog.css';

const Blog = (props) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/blog/${props.match.params.id}`, {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setBlog(data);
        });
    }, [])

    return (
        <div className='Blog'>
            <Header isProfilePage={false}>Blog & FAQs</Header>

            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        blog
                        ? <>
                            <div className='Blog-Title'>{blog.title}</div>
                            <div className='Blog-Description' dangerouslySetInnerHTML={{__html: blog.description}} />
                        </>
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;