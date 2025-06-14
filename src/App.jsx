import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { api } from './services/api.js';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/produtos')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className='product-wrapper'>
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default App;
