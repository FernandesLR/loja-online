import { useState } from 'react';
import './header.css';
import cart from '../../assets/cart.svg';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando por: ${searchTerm}`); // temporário
    setSearchTerm('');
  };

  return (
    <header className="home-header">
      <h1>Loja Online</h1>
            <form onSubmit={handleSearch} className="search-wrapper">
              <input 
                type="text" 
                placeholder="Pesquisar produtos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
      <nav>
        <ul>
          
          <li>
          </li>
          <li><a href="/products">Masculino</a></li>
          <li><a href="/products">Feminino</a></li>
          <li><a href="/cart"><img src={cart} alt="Shopp cart" /></a></li>
        </ul>
      </nav>
    </header>
  );
}