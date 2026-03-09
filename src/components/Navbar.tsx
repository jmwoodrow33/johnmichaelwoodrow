import { NavLink } from "react-router-dom";

// sidebar navigation links; kept as array for easier maintenance
const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/softwareprojects", label: "Software Projects" },
  { to: "/contact", label: "Contact" },
];

type Props = { open?: boolean; onNavigate?: () => void };

export default function NavBar({ open = false, onNavigate }: Props) {
  return (
    <aside id="mobile-nav" className={`sidebar ${open ? "open" : ""}`}>
      <nav>
        {items.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
