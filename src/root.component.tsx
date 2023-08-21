export default function Root(props) {
    return <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">React Navbar</a>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Admin</a></li>
                <li><a href="#" className="hover:text-gray-300">Login</a></li>
            </ul>
        </div>
    </nav>;
}
