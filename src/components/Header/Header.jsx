import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { selectCartTotalQuantity } from '../../store/cartSlice';
import './Header.css';

const Header = () => {
  const cartQuantity = useSelector(selectCartTotalQuantity);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="tagline">Bringing Nature to Your Doorstep</p>
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={32} />
          {cartQuantity > 0 && <span className="cart-count">{cartQuantity}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;