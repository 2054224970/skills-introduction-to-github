// src/shared/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-700 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="font-bold text-xl">P2P Book Exchange</Link>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-blue-200">发现书籍</Link>
                    <Link to="/chat" className="hover:text-blue-200">我的消息</Link>
                    <Link to="/dashboard" className="hover:text-blue-200">个人中心</Link>
                    <Link to="/login" className="hover:text-blue-200">登录</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;