const ComparisonView = ({
  selectedProducts,
  onRemoveFromComparison,
  darkMode,
}) => {
  if (selectedProducts.length < 2) return null;

  return (
    <div className="mb-5">
      <h3 className="mb-4">Product Comparison</h3>
      <div className="table-responsive">
        <table
          className={`table table-bordered ${darkMode ? "table-dark" : ""}`}
        >
          <thead>
            <tr>
              <th>Attribute</th>
              {selectedProducts.map((product, index) => (
                <th key={index} className="text-center position-relative">
                  <button
                    className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 m-1"
                    onClick={() => onRemoveFromComparison(product.name)}
                    style={{ fontSize: "0.7rem" }}
                  >
                    ×
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded mb-2"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="fw-bold">{product.name}</div>
                  <div className="text-muted">{product.brand}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Price</td>
              {selectedProducts.map((product, index) => (
                <td key={index} className="text-center">
                  <span className="h5 text-success">{product.price}</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className="fw-bold">Battery</td>
              {selectedProducts.map((product, index) => {
                const values = selectedProducts.map((p) => p.battery);
                const isUnique =
                  values.filter((v) => v === product.battery).length === 1;
                return (
                  <td
                    key={index}
                    className={`text-center ${
                      isUnique
                        ? darkMode
                          ? "bg-warning text-dark"
                          : "bg-warning bg-opacity-25"
                        : ""
                    }`}
                  >
                    {product.battery}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className="fw-bold">Screen Size</td>
              {selectedProducts.map((product, index) => {
                const values = selectedProducts.map((p) => p.screenSize);
                const isUnique =
                  values.filter((v) => v === product.screenSize).length === 1;
                return (
                  <td
                    key={index}
                    className={`text-center ${
                      isUnique
                        ? darkMode
                          ? "bg-warning text-dark"
                          : "bg-warning bg-opacity-25"
                        : ""
                    }`}
                  >
                    {product.screenSize}"
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className="fw-bold">Camera</td>
              {selectedProducts.map((product, index) => {
                const values = selectedProducts.map((p) => p.camera);
                const isUnique =
                  values.filter((v) => v === product.camera).length === 1;
                return (
                  <td
                    key={index}
                    className={`text-center ${
                      isUnique
                        ? darkMode
                          ? "bg-warning text-dark"
                          : "bg-warning bg-opacity-25"
                        : ""
                    }`}
                  >
                    {product.camera}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonView;
