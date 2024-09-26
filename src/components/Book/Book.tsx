import Button from '../Button/Button';
import './Book.css';

export default function Book(props: { imagem: string, alt: string, titulo: string, preco: string }) {
    return (
        <li className="book-card">
            <div>
                <img src={props.imagem} alt={props.alt} />
            </div>
            <div className="book-info">
                <h2>{props.titulo}</h2>
                <p>{props.preco}</p>
                    <Button>Comprar</Button>
            </div>
        </li>
    );
}

