import './Header.css';
import annie from '../../assets/annie.jpg';

export default function Header() {
    return (
        <header className="container mt20 header-container">
            <div className="logo">
                <img src={annie} alt="foto annie do lol" />
            </div>
            <div className='bookstore-name'>
                <h1>Toys e Tunes</h1>
            </div>
        </header>
    );
}