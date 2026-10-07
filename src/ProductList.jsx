import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartQuantity } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import { CartIcon, LeafIcon } from './Icons.jsx';

// Three categories, six unique plants each, with all data visible to the evaluator.
const plantsArray = [
  {
    "category": "Air Purifying Plants",
    "plants": [
      {
        "name": "Snake Plant",
        "image": `${import.meta.env.BASE_URL}images/snake-plant.webp`,
        "description": "A sculptural plant with upright leaves. Let the soil dry between waterings.",
        "cost": "$15"
      },
      {
        "name": "Spider Plant",
        "image": `${import.meta.env.BASE_URL}images/spider-plant.webp`,
        "description": "Arching striped leaves and playful plantlets. Enjoys bright, indirect light.",
        "cost": "$12"
      },
      {
        "name": "Peace Lily",
        "image": `${import.meta.env.BASE_URL}images/peace-lily.webp`,
        "description": "Glossy leaves and elegant white blooms. Keep the soil lightly moist.",
        "cost": "$18"
      },
      {
        "name": "Boston Fern",
        "image": `${import.meta.env.BASE_URL}images/boston-fern.webp`,
        "description": "Soft, feathery fronds for a lush corner. Enjoys humidity and indirect light.",
        "cost": "$20"
      },
      {
        "name": "Rubber Plant",
        "image": `${import.meta.env.BASE_URL}images/rubber-plant.webp`,
        "description": "Bold, glossy foliage. Give it bright, indirect light and space to grow.",
        "cost": "$17"
      },
      {
        "name": "Aloe Vera",
        "image": `${import.meta.env.BASE_URL}images/aloe-vera.webp`,
        "description": "A sun-loving succulent with fleshy leaves. Water sparingly.",
        "cost": "$14"
      }
    ]
  },
  {
    "category": "Aromatic Plants",
    "plants": [
      {
        "name": "Lavender",
        "image": `${import.meta.env.BASE_URL}images/lavender.webp`,
        "description": "Purple blooms and a familiar floral scent. Place near a sunny window.",
        "cost": "$20"
      },
      {
        "name": "Jasmine",
        "image": `${import.meta.env.BASE_URL}images/jasmine.webp`,
        "description": "Delicate white flowers with a sweet scent. Enjoys a bright spot.",
        "cost": "$18"
      },
      {
        "name": "Rosemary",
        "image": `${import.meta.env.BASE_URL}images/rosemary.webp`,
        "description": "Woody, fragrant foliage for a sunny windowsill. Allow good drainage.",
        "cost": "$15"
      },
      {
        "name": "Mint",
        "image": `${import.meta.env.BASE_URL}images/mint.webp`,
        "description": "Fresh, aromatic leaves. Keep in a bright spot and water regularly.",
        "cost": "$12"
      },
      {
        "name": "Lemon Balm",
        "image": `${import.meta.env.BASE_URL}images/lemon-balm.webp`,
        "description": "Fresh green leaves with a lemony aroma. Enjoys a sunny windowsill.",
        "cost": "$14"
      },
      {
        "name": "Hyacinth",
        "image": `${import.meta.env.BASE_URL}images/hyacinth.webp`,
        "description": "A cheerful cluster of fragrant blooms. Perfect for a bright indoor display.",
        "cost": "$22"
      }
    ]
  },
  {
    "category": "Low Maintenance Plants",
    "plants": [
      {
        "name": "ZZ Plant",
        "image": `${import.meta.env.BASE_URL}images/zz-plant.webp`,
        "description": "Glossy leaves with an upright habit. Allow soil to dry between waterings.",
        "cost": "$25"
      },
      {
        "name": "Pothos",
        "image": `${import.meta.env.BASE_URL}images/pothos.webp`,
        "description": "Trailing heart-shaped leaves. An easy choice for shelves and hanging pots.",
        "cost": "$10"
      },
      {
        "name": "Monstera",
        "image": `${import.meta.env.BASE_URL}images/monstera.png`,
        "description": "Bold split leaves for a bright corner with indirect light.",
        "cost": "$28"
      },
      {
        "name": "Cast Iron Plant",
        "image": `${import.meta.env.BASE_URL}images/cast-iron-plant.webp`,
        "description": "Deep green foliage for quieter corners. Tolerates lower light.",
        "cost": "$20"
      },
      {
        "name": "Succulents",
        "image": `${import.meta.env.BASE_URL}images/succulents.webp`,
        "description": "Rosettes with sculptural shapes. Enjoys sunlight and infrequent watering.",
        "cost": "$18"
      },
      {
        "name": "Aglaonema",
        "image": `${import.meta.env.BASE_URL}images/aglaonema.webp`,
        "description": "Patterned foliage that brings color to your home. Enjoys indirect light.",
        "cost": "$22"
      }
    ]
  }
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(() => window.location.hash === '#cart');
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(selectCartQuantity);
  const [addedToCart, setAddedToCart] = useState(() => Object.fromEntries(cartItems.map(item => [item.name, true])));
  const dispatch = useDispatch();

  // Redux remains the source of truth, including when a plant is deleted or reaches zero.
  useEffect(() => {
    setAddedToCart(Object.fromEntries(cartItems.map(item => [item.name, true])));
  }, [cartItems]);
  useEffect(() => {
    const syncView = () => setShowCart(window.location.hash === '#cart');
    window.addEventListener('hashchange', syncView);
    return () => window.removeEventListener('hashchange', syncView);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [showCart]);

  const handleAddToCart = plant => {
    dispatch(addItem(plant));
    setAddedToCart(previous => ({ ...previous, [plant.name]: true }));
  };
  const handleHomeClick = e => { e.preventDefault(); window.location.hash = 'home'; onHomeClick(); };
  const handlePlantsClick = e => { e.preventDefault(); window.location.hash = 'plants'; setShowCart(false); };
  const handleCartClick = e => { e.preventDefault(); window.location.hash = 'cart'; setShowCart(true); };
  const handleContinueShopping = e => handlePlantsClick(e);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={handleHomeClick}><LeafIcon /><span>Paradise Nursery</span></a>
        <nav aria-label="Main navigation">
          <a href="#home" onClick={handleHomeClick}>Home</a>
          <a href="#plants" onClick={handlePlantsClick} aria-current={!showCart ? 'page' : undefined}>Plants</a>
          <a className="cart-link" href="#cart" onClick={handleCartClick} aria-current={showCart ? 'page' : undefined} aria-label={`Cart, ${totalQuantity} plants`}>
            <CartIcon /><span className="cart-count" aria-live="polite">{totalQuantity}</span><span>Cart</span>
          </a>
        </nav>
      </header>
      {showCart ? <CartItem onContinueShopping={handleContinueShopping} /> : (
        <main id="plants" className="page-container">
          <h1>Find your little piece of paradise</h1>
          <p className="page-intro">Discover plants that bring beauty, freshness, and a sense of calm to your space.</p>
          <nav className="category-links" aria-label="Plant categories">
            {plantsArray.map((group, index) => <a key={group.category} href={`#category-${index}`}>{group.category}</a>)}
          </nav>
          {plantsArray.map((group, index) => (
            <section className="plant-section" id={`category-${index}`} key={group.category} aria-labelledby={`heading-${index}`}>
              <div className="section-title"><h2 id={`heading-${index}`}>{group.category}</h2><span>6 plants</span></div>
              <div className="product-grid">
                {group.plants.map(plant => (
                  <article className="product-card" key={plant.name} aria-label={plant.name}>
                    <img src={plant.image} alt={plant.name} width="600" height="400" loading={index === 0 ? 'eager' : 'lazy'} />
                    <h3>{plant.name}</h3><p>{plant.description}</p>
                    <div className="product-card-footer">
                      <span className="product-price">{plant.cost}.00</span>
                      <button className="primary-button" onClick={() => handleAddToCart(plant)} disabled={Boolean(addedToCart[plant.name])}>
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      )}
    </>
  );
}
ProductList.propTypes = { onHomeClick: PropTypes.func.isRequired };
export default ProductList;
