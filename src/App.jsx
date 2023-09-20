import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div
      className="u-padding-16 u-max-width-600 u-full-width"
      style={{ margin: "0 auto" }}
    >
      <UserProvider>
        <Navbar />
        <main className="u-flex-vertical u-gap-16">
          {isLoginPage ? (
            <Login />
          ) : (
            <IdeasProvider>
              <Home />
            </IdeasProvider>
          )}
        </main>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav className="u-flex u-main-space-between u-cross-center u-gap-16 u-padding-16">
      <a className="heading-level-6" href="/">
        Idea Tracker
      </a>
      <div className="u-flex u-gap-16 u-cross-center">
        {user.current ? (
          <>
            <span>{user.current.email}</span>
            <button
              className="button"
              type="button"
              onClick={() => user.logout()}
            >
              Logout
            </button>
          </>
        ) : (
          <a className="button" href="/login">
            Login
          </a>
        )}
      </div>
    </nav>
  );
}

export default App;
