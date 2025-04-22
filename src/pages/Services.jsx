function Services() {
    const services = [
      {
        title: 'Servicio SEO',
        description: 'Optimizamos tu sitio web para mejorar su posicionamiento en los motores de búsqueda y aumentar el tráfico orgánico.'
      },
      {
        title: 'Branding Corporativo',
        description: 'Creamos una identidad de marca sólida y coherente que refleje los valores y la visión de tu empresa.'
      },
      {
        title: 'Diseño de Logo',
        description: 'Diseñamos logotipos únicos y memorables que representan la esencia de tu marca y la hacen destacar en el mercado.'
      },
      {
        title: 'Desarrollo Web',
        description: 'Creamos sitios web modernos, atractivos y funcionales que se adaptan a las necesidades específicas de tu negocio.'
      }
    ];
  
    return (
      <div className="services-page">
        <div className="services-hero">
          <h1>Nuestros Servicios</h1>
          <p>Ofrecemos soluciones digitales integrales para ayudar a tu negocio a crecer en el entorno digital.</p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more">Saber más</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Services;