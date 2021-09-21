import React from 'react'

function Notification({showNotification}) {
    return (
        // we can also conditinal render them like figure
        <div className={`notification-container ${showNotification ? 'show' : ''} `}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification
