import { ShoppingCart, Utensils, Phone, MapPin, Clock } from "lucide-react";

function App() {
  const menuItems = [
    { name: "Margherita Pizza", category: "Pizza", price: 299 },
    { name: "Veg Burger", category: "Burger", price: 149 },
    { name: "Pasta Alfredo", category: "Pasta", price: 249 },
    { name: "Paneer Tikka", category: "Starters", price: 199 },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <Utensils /> Foodies Hub
        </a>

        <div className="ms-auto d-flex align-items-center gap-4">
          <a className="nav-link" href="#menu">Menu</a>
          <a className="nav-link" href="#reserve">Reservation</a>
          <a className="nav-link" href="#contact">Contact</a>

          <button className="btn btn-outline-dark d-flex align-items-center gap-1">
            <ShoppingCart size={18} /> 0
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          height: "380px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-5">Delicious Food, Delivered Fresh</h1>
          <p>Order online or reserve your table now</p>
          <button className="btn btn-danger px-4 py-2">Order Now</button>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="container my-5">
        <h2 className="fw-bold mb-4">Our Menu</h2>

        <div className="row g-4">
          {menuItems.map((item) => (
            <div className="col-md-3" key={item.name}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-muted mb-1">{item.category}</p>
                  <p className="fw-bold">₹{item.price}</p>
                  <button className="btn btn-dark w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section id="reserve" className="container my-5">
        <h2 className="fw-bold mb-4 text-center">Reserve a Table</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <input className="form-control mb-3" placeholder="Your Name" />
            <input type="date" className="form-control mb-3" />
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Number of Guests"
            />
            <button className="btn btn-success w-100">
              Confirm Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-light py-4">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-3">
              <Phone /> +91 9022211896
            </div>
            <div className="col-md-4 mb-3">
              <MapPin /> Pune, Swargate, India
            </div>
            <div className="col-md-4 mb-3">
              <Clock /> 10:00 AM – 11:00 PM
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
