import React, { useState } from "react";

const products = [
  {
    id: 1,
    img: "https://headsupfortails.com/cdn/shop/files/8906002480449_2.jpg?v=1738409894",
    name: "Pedigree",
    price: 9.99,
  },
  {
    id: 2,
    img: "https://midstchull.com/cdn/shop/products/7d07a0a8a7d6c38baa21885cf516d0a6.jpg?v=1705138030",
    name: "Pet Grooming Gloves",
    price: 19.99,
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB-lenn7ez6WqBgLbwEzCF7ySXNaCDUY7Lg&s",
    name: "Pet Bowl",
    price: 14.09,
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK51IwbTFlmexLH2lphfMAPmGOWmh-jTl52e3NuR3gEymUpAENR-OwmpBrx4Y1X6JG62I&usqp=CAU",
    name: "Pet Harness",
    price: 24.99,
  },
  {
    id: 5,
    img: "https://getvetco.com/wp-content/uploads/2021/07/Cure-by-Design-500-gms-CBD-Hemp-Oil-for-Dogs-Cats-30-ml.jpg",
    name: "Pet Oil",
    price: 12.99,
  },
  {
    id: 6,
    img: "https://goofytails.com/cdn/shop/products/Untitled-1_6527a59d-1b8c-4fd2-be40-ede8c35b8dcf.jpg?v=1676117247",
    name: "Pet Toys",
    price: 18.99,
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/71iWJiqLLLL._AC_UF1000,1000_QL80_.jpg",
    name: "Pet Grooming Brush",
    price: 24.89,
  },
  {
    id: 8,
    img: "https://www.bigbasket.com/media/uploads/p/l/40243877_1-first-pet-dog-poop-scooper-large-ergonomic-handle-non-messy.jpg",
    name: "Pet Poop Picker",
    price: 18.90,
  },
  {
    id: 9,
    img: "data:image/jpeg;base64,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",
    name: "Pet Bed",
    price: 29.99,
  },
];


export default function PetStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
<<<<<<< HEAD
    <div className="bg-gray-100">
      <main className="p-8">
        <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
          {[
            {
              img: "https://cdn.penguin.co.uk/dam-assets/books/9780241972953/9780241972953-jacket-large.jpg",
              title: "A Call For Charlie Barnes",
              author: "Joshua Ferris",
              price: "9.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/71JIuynbY5L._AC_UF1000,1000_QL80_.jpg",
              title: "The Time Of Her Life",
              author: "Tracy Bloom",
              price: "19.99",
            },
            {
              img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388183826i/389627._UX160_.jpg",
              title: "Diary Of A Wimpy Kid",
              author: "Jeff Kinney",
              price: "14.09",
            },
            {
              img: "https://rukminim2.flixcart.com/image/850/1000/k1mgu4w0/book/5/9/4/the-comedy-of-errors-original-imafh5vuhdqkfacb.jpeg?q=90&crop=false",
              title: "The Comedy Of Errors",
              author: "William Shakespeare",
              price: "24.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/71fysklKnfL._UF1000,1000_QL80_.jpg",
              title: "I Have Never",
              author: "Camilla Isley",
              price: "12.99",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSummrDpDMbGdti7kKv33GBI4JzdVwbM7v4LA&s",
              title: "The Road Trip",
              author: "Beth O'Leary",
              price: "18.99",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcFyh7lXgQ1QAutYFKzYC8efP2RBtzMDOtA&s",
              title: "Grief- A Comedy",
              author: "Alison Larkin",
              price: "24.89",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbv7IYL2vUHvrutZDuF7Ryn7n79JsqCRkpyA&s",
              title: "Aloice and A Grump Next Door",
              author: "Jenny Proctor",
              price: "18.90",
            },
          ].map((book, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg shadow-md p-4 text-center hover:scale-110 hover:border-blue-700 hover:shadow-lg hover:bg-gray-300 transition-transform">
              <img src={book.img} alt={book.title} className="w-24 h-36 object-cover rounded-md" />
              <h3 className="mt-2 text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-red-700 font-bold mt-2">${book.price}</p>
=======
    <div className="bg-gray-100 min-h-screen">
      <main className="p-8 flex gap-8">
        {/* Products Grid */}
        <section className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-4 hover:border-blue-500 transition-all hover:shadow-xl duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              <p className="text-red-600 font-bold text-center mt-2">${product.price}</p>
>>>>>>> 1813563128de2007ff495e8f28f675de6af4b983
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>

        {/* Enhanced Cart Sidebar */}
        <div className="w-96 bg-white p-6 rounded-xl shadow-xl h-fit sticky top-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-red-100 text-red-600 px-2.5 py-1 rounded-md hover:bg-red-200 transition-colors"
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-green-100 text-green-600 px-2.5 py-1 rounded-md hover:bg-green-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t flex justify-between items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                  Purchase
                </button>
                <p className="text-xl font-bold text-gray-800">
                  Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
