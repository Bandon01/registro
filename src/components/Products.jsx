function Products() {
    const products = [
      {
        title: 'SEO',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page'
      },
      {
        title: 'BRANDING',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page'
      },
      {
        title: 'LOGO',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page'
      }
    ];
  
    return (
      <div className="products-section">
        <h2>OUR PRODUCT</h2>
        <div className="product-cards">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-icon" style={{ backgroundColor: '#8BC34A', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto' }}></div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Products;