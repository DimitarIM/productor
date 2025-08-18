import { sql } from "../config/db";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
      SELECT * FROM products
      ORDER BY 
      id DESC,
      category DESC;
    `
    console.log("Items fetched");
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Getting items failed", error);
    res.status(500).json({ success: false, message: "Server error..." });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await sql`
      SELECT * FROM products WHERE id=${id}
    `

    if (product.length === 0) return res.status(404).json(
      {
        success: false,
        message: "Item not found"
      })

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("Getting item failed", error);
    res.status(500).json({ success: false, message: `Server error...` });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const productsByCategory = await sql`
      SELECT * FROM products WHERE category=${category}
      ORDER BY id DESC
    `
    res.status(200).json({ success: true, data: productsByCategory });
  } catch (error) {
    console.log("Getting categorized items failed", error);
    res.status(500).json({ success: false, message: "Server error..." });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image, category } = req.body;

  try {
    const createdProduct = await sql`
      INSERT INTO products (name, price, image, category)
      VALUES (${name},${price},${image},${category})
      RETURNING *
    `;
    res.status(201).json({ success: true, data: createdProduct[0] });
  } catch (error) {
    console.log("Creating item failed", error);
    res.status(500).json({ success: false, message: "Server error..." });
  }
};


export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image, category } = req.body;

  try {
    const updatedProduct = await sql`
      UPDATE products
      SET name=${name}, price=${price}, image=${image}, category=${category}
      WHERE id=${id} 
      RETURNING *
    `
    if (updatedProduct.length === 0) return res.status(404).json(
      {
        success: false,
        message: "Item not found"
      })

    res.status(200).json({ success: true, data: updatedProduct[0] });
  } catch (error) {
    console.log("Updating item failed", error);
    res.status(500).json({ success: false, message: "Server error..." });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql`
      DELETE FROM products
      WHERE id=${id}
      RETURNING *
    `
    if (deletedProduct.length === 0) return res.status(404).json(
      {
        success: false,
        message: "Item not found"
      })

    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("Deleting item failed", error);
    res.status(500).json({ success: false, message: "Server error..." });
  }
};