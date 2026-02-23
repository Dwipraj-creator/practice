import React, { useState } from 'react'

const DashboardWidgets = () => {
  const [showUserStats, setShowUserStats] = useState(true)
  const [showRecentActivity, setShowRecentActivity] = useState(true)
  const [showQuickActions, setShowQuickActions] = useState(true)

  // 🔹 Derived condition (NO extra state)
  const noWidgetsSelected =
    !showUserStats && !showRecentActivity && !showQuickActions

  // 🔹 Early return pattern
  if (noWidgetsSelected) {
    return (
      <div>
        <h2>No widgets selected</h2>

        <button onClick={() => setShowUserStats(true)}>Show User Stats</button>
        <button onClick={() => setShowRecentActivity(true)}>
          Show Recent Activity
        </button>
        <button onClick={() => setShowQuickActions(true)}>
          Show Quick Actions
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {/* 🔹 Toggle controls (ternary operator) */}
      <div>
        <button onClick={() => setShowUserStats((prev) => !prev)}>
          {showUserStats ? 'Hide User Stats' : 'Show User Stats'}
        </button>

        <button onClick={() => setShowRecentActivity((prev) => !prev)}>
          {showRecentActivity
            ? 'Hide Recent Activity'
            : 'Show Recent Activity'}
        </button>

        <button onClick={() => setShowQuickActions((prev) => !prev)}>
          {showQuickActions
            ? 'Hide Quick Actions'
            : 'Show Quick Actions'}
        </button>
      </div>

      <hr />

      {/* 🔹 Logical AND (&&) conditional rendering */}
      {showUserStats && (
        <section>
          <h2>User Stats</h2>
          <p>Total Users: 1,245</p>
        </section>
      )}

      {showRecentActivity && (
        <section>
          <h2>Recent Activity</h2>
          <p>Last login: 2 hours ago</p>
        </section>
      )}

      {showQuickActions && (
        <section>
          <h2>Quick Actions</h2>
          <button>Create User</button>
          <button>Generate Report</button>
        </section>
      )}
    </div>
  )
}

export default DashboardWidgets
