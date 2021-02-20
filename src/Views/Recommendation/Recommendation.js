import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import './Recommendation.css';

const Recommendation = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/book', {
            credentials: 'include',
            headers:{
                "accepts":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setBooks(data);
        });
    }, []);

    return (
        <div className='Recommendation'>
            <Header isProfilePage={false}>Recommendation</Header>


            <div className='Page-View-Wrapper'>
                <div className='Page-View'>
                    {
                        (books)
                        ? Object.keys(books).map(subject => (
                            (books[subject].length)
                            ? <>
                                <div className='Subject'>{subject}</div>
                                <div className='Book-Card-Wrapper'>
                                    {
                                        books[subject].map(book => (
                                            <div className='Book-Card' key={books.title}>
                                                <div className='Book-Detail'>
                                                    <div className='Book-Title'>{book.title}</div>
                                                    <div className='Book-Writter'>~by {book.writter}</div>
                                                    <div className='Book-Publication'>Publication: <span>{book.publication}</span></div>
                                                    <div className='Book-For'>Exam: <span>{book.for}</span></div>
                                                </div>
                                                <img src={`http://localhost:5000/${book.imageUrl}`} alt={book.title} />
                                                <div className='Book-Description'>{book.description}</div>
                                            </div>
                                        ))
                                    }
                                    {
                                        books[subject].map(book => (
                                            <div className='Book-Card' key={books.title}>
                                                <div className='Book-Detail'>
                                                    <div className='Book-Title'>{book.title}</div>
                                                    <div className='Book-Writter'>~by {book.writter}</div>
                                                    <div className='Book-Publication'>Publication: <span>{book.publication}</span></div>
                                                    <div className='Book-For'>Exam: <span>{book.for}</span></div>
                                                </div>
                                                <img src={`http://localhost:5000/${book.imageUrl}`} alt={book.title} />
                                                <div className='Book-Description'>{book.description}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                            : null
                        ))
                        : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Recommendation;