import { useState } from 'react';
import api from '../../../shared/services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            alert('登录成功！');
            window.location.href = '/'; // 简单跳转
        } catch (err) {
            alert('登录失败');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">用户登录</h2>
            <form onSubmit={handleLogin}>
                <input
                    className="w-full border p-2 mb-4"
                    placeholder="邮箱"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-full border p-2 mb-4"
                    type="password"
                    placeholder="密码"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full bg-blue-600 text-white p-2 rounded">登录</button>
            </form>
        </div>
    );
};
export default Login;