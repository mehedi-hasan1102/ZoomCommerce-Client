
const Products = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Demo Products */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Product 1</h3>
          <p>Description for product 1.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Product 2</h3>
          <p>Description for product 2.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Product 3</h3>
          <p>Description for product 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
