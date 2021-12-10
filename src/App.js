import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './Contexts/ProjectContext';
import CartContext from './Contexts/CartContext';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={cart}>

					<Navigation cart={cart}/>

					{/* Routes */}
					
						<Route exact path="/">
							<Products />
						</Route>
					

					<Route path="/cart">
						<ShoppingCart />
					</Route>

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
