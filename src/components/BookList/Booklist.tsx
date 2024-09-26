import Book from '../Book/Book';
import './Booklist.css';
import DBbooks from '../DBbooks/DBbooks';

export default function BookList() {
    return (
    <main id="books" className="container mt20">
          <ul className="book-cards mb20 mt20">
          {
            DBbooks.map((book ) => (
                <a href="https://www.google.com/" target='_blank'>
                  <Book
                    key={book.id}
                    titulo={book.titulo}
                    preco={book.preco}
                    imagem={book.imagem}
                    alt={book.alt}
                   />
                </a>
          ))}
          </ul>
    </main>
    );
}




