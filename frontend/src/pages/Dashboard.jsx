import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as  ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from "chart.js";
import {FaBars, FaHome, FaExchangeAlt, FaUser, FaCog, FaSignOutAlt} from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle';
import '../styles/Dashboard.css';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [balance, setBalance] = useState(8240.5);
    const [income, setIncome] = useState(5500);
    const [expenses, setExpenses] = useState(2300);

    //Persist Theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Chart data
    const chartData = {
        labels: ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],
        datasets: [
            {
                labels: "Spending",
                data: [200, 300, 150, 400, 250, 350, 300],
                backgroundColor: theme === "dark" ? "#58a6ff" : "#007bff",
                borderRadius: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {legend: {display: false} },
        title: {display: false},
        scales: {
            x: {grid: {display: false} },
            y: {grid: {color: "rgba(255, 255, 255, 0.1)"} },
        },
    };

    return(
        <div className="dashboard-container">
            <aside className={`sidebar ${sidebarOpen ? "open": ""}`}>
                <div className="logo">FinanceFlow  <FaExchangeAlt /></div>
                <nav>
                    <a href="#"><FaHome /> Dashboard</a>
                    <a href="#"><FaExchangeAlt /> Transactions</a>
                    <a href="#"><FaUser /> Profile</a>
                    <a href="#"><FaCog /> Settings</a>
                </nav>
                <button className="logout"><FaSignOutAlt /> Log Out</button>
            </aside>
            <main className="main-container">
                <header className="topbar">
                    <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <FaBars />
                    </button>
                    <h1>Welcome back, Bear</h1>
                    <div className="actions">
                        <input type="text" placeholder='Search...'/>
                        <ThemeToggle theme = {theme} setTheme = {setTheme}  />
                        <img 
                        src="https://i.pravatar.cc/50" 
                        alt="User Avatar" 
                        className='avatar'
                        />
                    </div>
                </header>

                <section className="stats">
                    <div className="card">
                        <h3>Current Balance</h3>
                        <p>${balance.toLocaleString()}</p>
                    </div>
                    <div className="card">
                        <h3>Income</h3>
                        <p>${income.toLocaleString()}</p>
                    </div>
                    <div className="card">
                        <h3>Expenses</h3>
                        <p>${expenses.toLocaleString()}</p>
                    </div>
                </section>

                <section className="chart-section">
                    <h2>Weekly Spending</h2>
                    <div className="chart-contai">
                        <Bar key={theme} data={chartData} options={chartOptions} />
                    </div>
                </section>

                <section className="transactions">
                    <h2>Recent Transactions</h2>
                    <ul>
                        <li>Netflix Subscription - $12.99</li>
                        <li>Salary - $2000</li>
                        <li>Grocery Store - $54.20</li>
                        <li>Electricity Bill - $80</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;