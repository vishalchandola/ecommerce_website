const ProductCard = ({
  product,
  isSelected,
  canSelect,
  onToggleSelection,
  darkMode,
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div
        className={`card h-100 ${darkMode ? "bg-dark border-secondary" : ""} ${
          isSelected ? "border-primary shadow" : ""
        }`}
      >
        <div className="p-3 pb-0">
          <img
            src={product.image}
            className=""
            alt={product.name}
            style={{ height: "200px" }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h6 className={`card-title mb-0 ${darkMode ? "text-white" : ""}`}>
              {product.name}
            </h6>
            <span className="badge bg-secondary">{product.brand}</span>
          </div>
          <h5 className={`mb-3 ${darkMode ? "text-white" : ""}`}>
            Price: <span className="text-success">{product.price}</span>
          </h5>

          <div className="mb-3">
            <div className="d-flex justify-content-between small mb-1">
              <span className={`${darkMode ? "text-white" : "text-muted"}`}>
                Battery:
              </span>
              <span className={`${darkMode ? "text-white" : "fw-medium"}`}>
                {product.battery}
              </span>
            </div>
            <div className="d-flex justify-content-between small mb-1">
              <span className={`${darkMode ? "text-white" : "text-muted"}`}>
                Screen Size:
              </span>
              <span className={`${darkMode ? "text-white" : "fw-medium"}`}>
                {product.screenSize}"
              </span>
            </div>
            <div className="d-flex justify-content-between small mb-1">
              <span className={`${darkMode ? "text-white" : "text-muted"}`}>
                Camera:
              </span>
              <span className={`${darkMode ? "text-white" : "fw-medium"}`}>
                {product.camera}
              </span>
            </div>
          </div>

          <div className="mt-auto">
            <button
              className={`btn w-100 ${
                isSelected
                  ? "btn-success"
                  : canSelect
                  ? "btn-outline-primary"
                  : "btn-outline-secondary"
              }`}
              onClick={() => onToggleSelection(product)}
              disabled={!canSelect}
            >
              {isSelected ? (
                <>
                  <i className="bi bi-check-circle me-1"></i>
                  Selected
                </>
              ) : canSelect ? (
                <>
                  <i className="bi bi-plus-circle me-1"></i>
                  Add to Compare
                </>
              ) : (
                "Max 3 products"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
