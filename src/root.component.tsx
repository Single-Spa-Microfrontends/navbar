import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">React Navbar</span>
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/welcome">
              Welcome
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
