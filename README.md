# Productor

Website for adding, editing and deleting products with categories to sort them. Not finished. It works with a Postgresql database NEON and has a fully functioning backend

(FrontEnd)
Features:
/Shared:
- Header with 4 elements: 
1. Logo -> Link To Homepage,
2. Categories -> On hover show categories, disappears after moving to a different page,
3. Cart -> Link to Cart,
4. Plus Icon -> Adds Category

- Footer:
Simple footer with just text
------------------------------------------
/HomePage("/"):
- Add Product Button that activates a Modal.
- Modal:
1. A small exit button.
2. A form where you insert Product name, price, image URL, category.
3. Reset Button.
4. Add/Submit Button.

- Products Grid (takes all products from a GET request or mock data and shows them on screen as Product Cards).
- Product Card (displays name, image, category, price) ON HOVER: Shows 3 buttons:
1. Edit Button SENDS TO /product/:id page WORKS?
2. Delete Button WORKS
3. Put To Cart Button NOT WORKING
------------------------------------------
/ProductPage("/product/:id"):
It's empty for now

------------------------------------------
/CartPage("/cart")
It's empty for now

<img width="1681" height="704" alt="Screenshot 2025-08-18 113311" src="https://github.com/user-attachments/assets/e63b1471-8542-41ab-a84a-5d89eb9ab770" />
<img width="1867" height="829" alt="Screenshot 2025-08-18 113219" src="https://github.com/user-attachments/assets/056a7c22-a004-4609-b4c5-a8b32351e2c3" />
<img width="327" height="242" alt="Screenshot 2025-08-18 113231" src="https://github.com/user-attachments/assets/10bcadab-ad3f-40b5-8bd4-0bae3ddfd4b7" />
<img width="297" height="182" alt="Screenshot 2025-08-18 113240" src="https://github.com/user-attachments/assets/84f7c1d2-fdad-4a5e-b7a0-9eb4411988c7" />
<img width="1891" height="850" alt="Screenshot 2025-08-18 113254" src="https://github.com/user-attachments/assets/252ab1ba-7c1f-4678-b426-8e43763fd6d8" />

