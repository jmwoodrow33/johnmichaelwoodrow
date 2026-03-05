import { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./Navbar";

// Layout component wraps every page with the shell that contains the
// navigation drawer and main content area.  The drawer is toggled by the
// hamburger button, stays open until the button is pressed again, and is
// auto‑closed when the user returns to the home route.
export default function Layout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // when user navigates to home page we close drawer, otherwise leave state alone
  useEffect(() => {
    if (location.pathname === "/") {
      setOpen(false);
    }
  }, [location.pathname]);


  return (
    <div className="app-shell">
      {/* Mobile toggle */}
      <button
        className={`nav-toggle${open ? " open" : ""}`}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(v => !v)}
      >
        ☰
      </button>

      {/* Dim backdrop when drawer is open (mobile only) */}
      <div
        className={`backdrop ${open ? "show" : ""}`}
        aria-hidden
      />

      <NavBar
        open={open}
        onNavigate={() => {
          // on mobile we want the drawer to close when a link is picked
          if (window.matchMedia("(max-width: 900px)").matches) {
            setOpen(false);
          }
        }}
      />
      <main className="main">{children}</main>
    </div>
  );
}
