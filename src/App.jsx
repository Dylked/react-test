

import './App.css'
import { Link, Route, Routes } from "react-router";


function HomePage() {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Home</h1>

      <p>You are not logged in. Go to the login page to sign in</p>
    </div>
  )
}

function ProfilePage() {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Profile</h1>
      <p>Name: [name will go here]</p>
      <p>Here you could show more user info from the context.</p>
    </div>
  )
}

function LoginPage() {
  const [name, setName] = useState("");
  const [user, setUser] = useState({ name: "", isAuth: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setUser({ name: name, isAuth: true });
  }

  return (
    < div style={{ padding: "0 1.5rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Type any name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Log in
        </button>
      </form>

      {user.isAuth && <p>Useer Logged In</p>}
    </div >
  );
}

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={<h1 style={{ padding: "0 1.5rem" }}>Not found</h1>} />
      </Routes>
      <div>Footer</div>
    </div>
  )
}

export default App
