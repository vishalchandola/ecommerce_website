const SelectedProductsBar = ({
  selectedProducts,
  showComparison,
  setShowComparison,
  onClearAll,
  darkMode,
}) => {
  if (selectedProducts.length === 0) return null;

  return (
    <div className={`alert ${darkMode ? "alert-dark" : "alert-light"} border`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>Selected for comparison:</strong>{" "}
          {selectedProducts.map((p) => p.name).join(", ")}
          <span className="ms-2 badge bg-primary">
            {selectedProducts.length}/3
          </span>
        </div>
        <div>
          {selectedProducts.length >= 2 && (
            <button
              className="btn btn-primary me-2"
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? "Hide" : "Show"} Comparison
            </button>
          )}
          <button className="btn btn-outline-secondary" onClick={onClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductsBar;
