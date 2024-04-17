const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('Error connecting to database:', err)); 

const products = [
    {
        name: "IPhone 11",
        img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lMTF8ZW58MHx8MHx8fDA%3D',
        price: 590,
        desc: 'Liquid Retina HD display; 6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology; 1792‑by‑828‑pixel resolution at 326 ppi'
    },
    // Add other product objects here...
];

async function seedDB() {
    try {
        // Delete existing products
        await Product.deleteMany({});
        console.log('Previous products deleted');

        // Insert new products
        await Product.insertMany(products);
        console.log('Products seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

module.exports = seedDB;
