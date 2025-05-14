import React, { useState } from 'react';
import './Tabs.css'; // We'll create this CSS file

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Tab components with actual content
    const Profile = () => {
        return (
            <div className="tab-content">
                <h2>User Profile</h2>
                <div className="profile-card">
                    <div className="avatar">JD</div>
                    <div className="profile-info">
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Email:</strong> john.doe@example.com</p>
                        <p><strong>Member since:</strong> January 2022</p>
                    </div>
                </div>
                <button className="edit-btn">Edit Profile</button>
            </div>
        )
    }

    const Settings = () => {
        return (
            <div className="tab-content">
                <h2>Account Settings</h2>
                <div className="settings-section">
                    <h3>Privacy</h3>
                    <div className="setting-item">
                        <label>
                            <input type="checkbox" defaultChecked />
                            Show my profile to other users
                        </label>
                    </div>
                    <div className="setting-item">
                        <label>
                            <input type="checkbox" />
                            Allow notifications
                        </label>
                    </div>
                </div>
                <div className="settings-section">
                    <h3>Security</h3>
                    <button className="change-password-btn">Change Password</button>
                </div>
            </div>
        )
    }

    const Notifications = () => {
        return (
            <div className="tab-content">
                <h2>Notifications</h2>
                <div className="notification-list">
                    <div className="notification-item unread">
                        <p>Your profile has been viewed 15 times this week</p>
                        <span className="time">2 hours ago</span>
                    </div>
                    <div className="notification-item">
                        <p>System maintenance scheduled for tomorrow</p>
                        <span className="time">1 day ago</span>
                    </div>
                    <div className="notification-item">
                        <p>New feature available: Dark mode</p>
                        <span className="time">3 days ago</span>
                    </div>
                </div>
                <button className="mark-all-read">Mark all as read</button>
            </div>
        )
    }

    const TabsConfig = [
        {
            name: 'Profile',
            icon: '👤',
            component: <Profile />,
        },
        {
            name: 'Settings',
            icon: '⚙️',
            component: <Settings />,
        },
        {
            name: 'Notifications',
            icon: '🔔',
            component: <Notifications />,
        }
    ]

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {TabsConfig.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className="tabs-content">
                {TabsConfig[activeTab].component}
            </div>
        </div>
    )
}

export default TabComponent;