# Nexa 🖌️

Nexa is a modern, web-based collaborative whiteboard application. It allows users to draw, brainstorm, and collaborate in real-time with a smooth and intuitive interface.

> ✅ **Live Demo:** https://nexa-six-pearl.vercel.app/

---

## 🚀 Features

- **Real-time Collaboration** – Draw and interact with others simultaneously.
- **Customizable Canvas** – Choose colors, brush sizes, and shapes.
- **Cloud Sync** – Save your work and access it anywhere.
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile.
- **Secure & Fast** – Built with modern and optimized technologies.
- **Export Options** – Download your drawings as images or shareable links.

---

## 🧰 Tech Stack

| Layer      | Technologies                         |
|------------|--------------------------------------|
| Frontend   | Next.js, Tailwind CSS, Excalidraw    |
| Backend    | Node.js, Express.js                  |
| Database   | Convex                               |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nexa.git
bash
Copy
Edit
cd nexa
npm install
2. Create .env.local in root
env
Copy
Edit
# Kinde Auth Credentials
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=https://yourdomain.kinde.com
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

# Convex Deployment
CONVEX_DEPLOYMENT=dev:example-id-1234
NEXT_PUBLIC_CONVEX_URL=https://example-id.convex.cloud
3. Start the Convex backend:
bash
Copy
Edit
npx convex dev
4. Start the Next.js frontend:
bash
Copy
Edit
npm run dev
5. Open in your browser:
arduino
Copy
Edit
http://localhost:3000
✅ Usage
Create a new collaborative whiteboard board.

Invite collaborators using a shareable link.

Draw, write, and brainstorm together in real-time!

Save or export your board anytime.

🤝 Contributing
Contributions are welcome!

text
Copy
Edit
1. Fork the project.
2. Create a new branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m "Add some feature"
4. Push to the branch: git push origin feature/YourFeature
5. Create a Pull Request.
📄 License
This project is licensed to Shubhayu Chakraborty.

📬 Contact
Email: shubhayuchakraborty803@gmail.com
