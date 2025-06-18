import { useState, useEffect } from "react";

import "./App.css";
import Footer from "./Components/Footer/";
import Header from "./Components/Header";
import ProductGrid from "./Components/ProductGrid/";
import SelectedProductsBar from "./Components/SelectedProducts/";
import ComparisonView from "./Components/ComparisonView";
import { products } from "./constant/constant";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleProductSelection = (product) => {
    setSelectedProducts((prev) => {
      if (prev.find((p) => p.name === product.name)) {
        return prev.filter((p) => p.name !== product.name);
      } else {
        if (prev.length < 3) {
          return [...prev, product];
        }
        return prev;
      }
    });
  };

  const removeFromComparison = (productName) => {
    setSelectedProducts((prev) => prev.filter((p) => p.name !== productName));
  };

  const clearComparison = () => {
    setSelectedProducts([]);
    setShowComparison(false);
  };

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [darkMode]);

  useEffect(() => {
    setShowComparison(selectedProducts.length >= 2);
  }, [selectedProducts]);

  return (
    <>
      <div
        className={`min-vh-100 ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="container my-4">
          <SelectedProductsBar
            selectedProducts={selectedProducts}
            showComparison={showComparison}
            setShowComparison={setShowComparison}
            onClearAll={clearComparison}
            darkMode={darkMode}
          />

          {showComparison && (
            <ComparisonView
              selectedProducts={selectedProducts}
              onRemoveFromComparison={removeFromComparison}
              darkMode={darkMode}
            />
          )}

          <ProductGrid
            products={products}
            selectedProducts={selectedProducts}
            onToggleSelection={toggleProductSelection}
            darkMode={darkMode}
          />
        </div>

        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
