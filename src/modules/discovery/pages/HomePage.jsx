import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import api from '../../../shared/services/api';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await api.get('/books');
                setBooks(res.data);
            } catch (err) {
                console.error("Failed to fetch books");
            }
        };
        fetchBooks();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">发现好书</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {books.map(book => <BookCard key={book._id} book={book} />)}
            </div>
        </div>
    );
};

export default HomePage;