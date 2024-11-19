# LOL-Smith

 This app allows users to create, customize, and download memes with ease. You can upload your base meme image, add text overlays, adjust colors, and create the perfect meme. Plus, you can like and favorite memes, track the popularity of your creations, and share them with others.

---

## Key Features

- **Upload Base Meme**: Upload your own meme image to get started.
- **Text Overlay**: Add custom text on top of your meme.
- **Color Customization**: Adjust the colors to fit your style.
- **Download Meme**: Save your generated meme as an image.
- **Like & Favorite Memes**: Like and favorite memes, and view the total like count.
- **User Authentication**: Secure login and registration with **NextAuth**.

---

## Tech Stack

- **Frontend**:
  - **Next.js** - Framework for building React applications.
  - **TypeScript** - For type safety and better development experience.
  - **Tailwind CSS** - Utility-first CSS framework for rapid styling.

- **Backend**:
  - **Drizzle ORM** - To interact with the PostgreSQL database.
  - **PostgreSQL** - The relational database used to store meme data, user information, and like counts.
  - **NextAuth** - Authentication solution for secure login and registration.
  -  **ImageKit.io** - Image storage and real-time image manipulation service for text overlays and efficient serving of meme images.


---

## Installation

To get started with this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/LOLSmith.git
cd LOLSmith


### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file and configure the necessary environment variables:

```plaintext
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=postgresql://username:password@localhost:5432/meme_generator_db
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Make sure to replace `username`, `password`, and `meme_generator_db` with your PostgreSQL credentials.

### 4. Run the application

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to start using the Meme Generator App.

---

## Usage

- **Upload Base Meme**: Choose a meme image from your local files.
- **Customize**: Add text overlay and adjust the colors as needed.
- **Download**: Once you’re happy with the meme, click the download button to save your creation.
- **Favorite & Like**: You can favorite memes and view the like count by others.

---


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---


Enjoy creating memes and share the fun! 😄
