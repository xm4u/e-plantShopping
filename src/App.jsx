import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';
import { CartIcon, LeafIcon } from './Icons.jsx';
import { selectCartQuantity } from './CartSlice.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(() => !['', '#home'].includes(window.location.hash));
  const totalQuantity = useSelector(selectCartQuantity);
  useEffect(() => { window.scrollTo(0, 0); }, [showProductList]);
  useEffect(() => {
    const syncPage = () => setShowProductList(!['', '#home'].includes(window.location.hash));
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);
  const handleGetStartedClick = () => { window.location.hash = 'plants'; setShowProductList(true); };
  const handleOpenCart = () => { window.location.hash = 'cart'; setShowProductList(true); };
  const handleHomeClick = () => setShowProductList(false);
  if (showProductList) return <ProductList onHomeClick={handleHomeClick} />;
  return (
    <div className="app-container">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Paradise Nursery home"><LeafIcon /><span>Paradise Nursery</span></a>
        <nav aria-label="Main navigation">
          <a href="#home" aria-current="page">Home</a>
          <a href="#plants" onClick={handleGetStartedClick}>Plants</a>
          <a className="cart-link" href="#cart" onClick={handleOpenCart} aria-label={`Cart, ${totalQuantity} plants`}><CartIcon /><span className="cart-count">{totalQuantity}</span><span>Cart</span></a>
        </nav>
      </header>
      <main id="home" className="landing-page">
        <div className="landing-content">
          <h1>Welcome to<br />Paradise Nursery</h1>
          <p className="tagline">Where Green Meets Serenity</p>
          <AboutUs />
          <button className="primary-button get-started-button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
        <div className="background-image" role="img" aria-label="A sunlit greenhouse filled with lush plants" />
      </main>
    </div>
  );
}
export default App;
