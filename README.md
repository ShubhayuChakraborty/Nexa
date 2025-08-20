Nexa 🖌️

Nexa is a modern, web-based collaborative whiteboard application. It allows users to draw, brainstorm, and collaborate in real-time with a smooth and intuitive interface.

✅ Live Link: https://nexa-six-pearl.vercel.app/

Features

Real-time Collaboration: Draw and interact with others simultaneously.

Customizable Canvas: Choose colors, brush sizes, and shapes.

Cloud Sync: Save your work and access it anywhere.

Responsive Design: Works on desktop, tablet, and mobile seamlessly.

Secure & Fast: Optimized for performance with modern web technologies.

Export Options: Download your drawings as images or share links easily.

Tech Stack

Frontend: Next.js, Tailwind CSS, Excalidraw

Backend: Node.js, Express.js

Database: Convex


Installation

1. Clone the repository:
   git clone https://github.com/your-username/nexa.git

2.Install dependencies for both frontend and backend:
 cd nexa
npm install


3. .env.local
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





4.Start the backend server:
 npx convex dev
 
 5. Start the frontend:
    npm run dev

  6.Open your browser at http://localhost:3000


  Usage

Create a new board.

Invite collaborators via a shareable link.

Start drawing, adding shapes, and writing notes in real-time.

Save or export your board whenever you like.

Contributing

Contributions are welcome!
1. Fork the project.
2. Create your feature branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a Pull Request.


License

This project is licensed to Shubhayu Chakraborty.

Contact

Email: shubhayuchakraborty803@gmail.com

Nexa – Draw, Collaborate, Create. All in real-time.
 
