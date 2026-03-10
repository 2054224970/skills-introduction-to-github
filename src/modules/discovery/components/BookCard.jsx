const BookCard = ({ book }) => {
    return (
        <div className="bg-white p-4 rounded shadow hover:shadow-xl transition">
            <img src={book.image || "https://via.placeholder.com/100"} alt={book.title} className="w-full h-32 object-cover" />
            <h3 className="mt-2 font-semibold">{book.title}</h3>
            <p className="text-gray-500 text-sm">{book.course}</p>
            <p className="text-green-600 font-bold">${book.price}</p>
        </div>
    );
};
export default BookCard;