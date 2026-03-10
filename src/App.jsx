import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './shared/components/Navbar'; // 引入共享组件

// 引入各模块的页面
import HomePage from './modules/discovery/pages/HomePage';
import Login from './modules/auth/components/Login';
// import ChatPage from './modules/communication/pages/ChatPage'; // 后续开发
// import Dashboard from './modules/reputation/pages/UserDashboard'; // 后续开发

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    {/* 发现模块路由 */}
                    <Route path="/" element={<HomePage />} />

                    {/* 认证模块路由 */}
                    <Route path="/login" element={<Login />} />

                    {/* 其他模块路由（后续添加） */}
                    {/* <Route path="/chat" element={<ChatPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;




