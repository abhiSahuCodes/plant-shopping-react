import { useSelector, useDispatch } from 'react-redux';
import { selectAllPlants, selectPlantsByCategory } from '../../store/plantsSlice';
import { addItem } from '../../store/cartSlice';
import './ProductList.css';
import { useState } from 'react';
import Header from '../Header/Header';

const ProductList = () => {
  const dispatch = useDispatch();
  const allPlants = useSelector(selectAllPlants);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [addedItems, setAddedItems] = useState([]);
  const plantsByCategory = useSelector(state => selectPlantsByCategory(state, selectedCategory));

  const categories = [...new Set(allPlants.map(plant => plant.category))];

  const filteredPlants = selectedCategory ? plantsByCategory : allPlants;

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <>
    <Header />
    <div className="product-list-container">
      <div className="category-filter">
        <button
          className={`category-btn ${!selectedCategory ? 'active' : ''}`}
          onClick={() => setSelectedCategory('')}
        >
          All Plants
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredPlants.map(plant => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <div className="product-info">
              <h3>{plant.name}</h3>
              <p className="product-category">{plant.category}</p>
              <p className="product-description">{plant.description}</p>
              <p className="product-price">${plant.price.toFixed(2)}</p>
              <button
                className={`add-to-cart-btn ${addedItems.includes(plant.id) ? 'added' : ''}`}
                onClick={() => handleAddToCart(plant)}
                disabled={addedItems.includes(plant.id)}
              >
                {addedItems.includes(plant.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;