import { sql } from "../config/db";

export const getCategories = async (req, res) => {
    try {
        const categories = await sql`
            SELECT * FROM categories 
            ORDER BY name DESC
        `;
        console.log("Items fetched");
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.log("Getting items failed", error);
        res.status(500).json({ success: false, message: "Server error..." });
    }
}

export const getCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await sql`
            SELECT * FROM categories WHERE id=${id}
        `;
        console.log("Item fetched");
        res.status(200).json({ success: true, data: category[0] });
    } catch (error) {
        console.log("Getting item failed", error);
        res.status(500).json({ success: false, message: "Server error..." });
    }
}

export const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const createdCategory = await sql`
            INSERT INTO categories (name)
            VALUES (${name})
            RETURNING *
        `;
        console.log("Item created");
        res.status(201).json({ success: true, data: createdCategory[0] });
    } catch (error) {
        console.log("Creating item failed", error);
        res.status(500).json({ success: false, message: "Server error..." });
    }
}

export const updateCategory = async (req, res) => {
    const { id, name, products } = req.body;

    try {
        const updatedCategory = await sql`
            UPDATE categories
            SET name=${name}, products=${products}
            WHERE id=${id}
            RETURNING *
        `;
        console.log("Item updated");
        res.status(200).json({ success: true, data: updatedCategory[0] });
    } catch (error) {
        console.log("Updating item failed", error);
        res.status(500).json({ success: false, message: "Server error..." });
    }
}

export const deleteCategory = async (req, res) => {
        const { id } = req.params;

    try {
        const deletedCategory = await sql`
            DELETE FROM categories
            WHERE id=${id}
            RETURNING *
        `;
        console.log("Item deleted");
        res.status(200).json({ success: true, data: deletedCategory[0] });
    } catch (error) {
        console.log("Deleting item failed", error);
        res.status(500).json({ success: false, message: "Server error..." });
    }
}