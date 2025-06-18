import ProductCard from "../ProductCard";

const ProductGrid = ({
  products,
  selectedProducts,
  onToggleSelection,
  darkMode,
}) => {
  return (
    <div className="row">
      {products.map((product, index) => {
        const isSelected = selectedProducts.find(
          (p) => p.name === product.name
        );
        const canSelect = selectedProducts.length < 3 || isSelected;

        return (
          <ProductCard
            key={index}
            product={product}
            isSelected={isSelected}
            canSelect={canSelect}
            onToggleSelection={onToggleSelection}
            darkMode={darkMode}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
