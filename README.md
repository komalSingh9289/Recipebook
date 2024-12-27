# Recipe Haven

**Recipe Haven** is a user-friendly web application for discovering delicious recipes. Users can search for recipes, filter them by category, and view detailed information. Built with React, Tailwind CSS, and the Spoonacular API, the app provides a seamless experience with animations, responsive design, and dynamic functionality.

---

## Features
- **Search Recipes**: Users can search for recipes by name or ingredient.
- **Category Filter**: Filter recipes by categories vegetarian , non-veg and vegan or all.
- **Recipe Details**: View recipe images, titles, and additional information.
- **Contact Us Page**: Users can send queries or feedback through a clean, responsive form.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## Screenshots

#### Home Page  
![Screenshot (170)](https://github.com/user-attachments/assets/fe755033-6297-4adf-9686-887f555ca895)

#### Recipe detail page
![Screenshot (172)](https://github.com/user-attachments/assets/0a1fe06a-503b-4c9d-89df-9c070a82a31d)

#### About Us page
![Screenshot (173)](https://github.com/user-attachments/assets/daf9e971-7a15-4a2c-bffc-c455ef80027f)
---

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **API**: [Spoonacular API](https://spoonacular.com/food-api)
- **Routing**: React Router
- **HTTP Client**: Axios

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/recipe-haven.git
   cd recipe-haven
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add API Key**:
   - Create a `.env` file in the root directory.
   - Add your Spoonacular API key:
     ```
     VITE_SPOONACULAR_API_KEY=your_api_key_here
     ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   - Navigate to `http://localhost:5173`.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Loading.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── ContactUs.js
├── App.js
├── index.js
├── styles.css
.env
```


## Acknowledgments
- Spoonacular API for recipe data.
- Tailwind CSS for styling inspiration.


---

