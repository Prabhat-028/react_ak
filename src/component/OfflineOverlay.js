
import React from "react";

export default function OfflineOverlay({ onRetry }) {
  return (
    <div
      className="offline-root"
      role="dialog"
      aria-labelledby="offline-title"
      aria-modal="true"
    >
      <div className="offline-bg" aria-hidden="true" />
      <div className="offline-card">
        <div className="offline-icon" aria-hidden="true">
          📡
        </div>
        <h1 id="offline-title" className="offline-title">
          You’re Offline
        </h1>
        <p className="offline-sub">
          We couldn’t reach the internet. Please check your connection and try
          again.
        </p>

        <div className="offline-chips">
          <span className="chip chip-danger">
            <span className="dot" /> No connection
          </span>
          <span className="chip">
            Last checked: {new Date().toLocaleTimeString()}
          </span>
        </div>

        <div className="offline-actions">
          <button className="btn btn-primary" onClick={onRetry}>
            Retry
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => window.location.reload()}
            title="Hard refresh"
          >
            Reload Page
          </button>
        </div>

        <div className="offline-tips">
          <ul>
            <li>Toggle Wi-Fi / Mobile Data</li>
            <li>Disable VPN/Proxy (if any)</li>
            <li>Check router or hotspot</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
