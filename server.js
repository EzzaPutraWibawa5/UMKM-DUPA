const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
{
    id: 1,
    name: "Dupa Sandalwood Premium",
    price: 50000,
    stock: 100
},
{
    id: 2,
    name: "Dupa Cendana Bali",
    price: 35000,
    stock: 50
}
];

app.get("/products", (req, res) => {
res.json(products);
});

app.put("/products/:id", (req, res) => {
const id = Number(req.params.id);
const { stock } = req.body;

products = products.map(p =>
    p.id === id ? { ...p, stock } : p
);

res.json({ message: "Stok berhasil diperbarui" });
});

// ⚠️ Railway pakai PORT dari ENV
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log(`✅ Product Service running on port ${PORT}`);
});
