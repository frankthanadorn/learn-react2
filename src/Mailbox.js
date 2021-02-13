import React from 'react';

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            {unreadMessages.length > 0 && <p> You Have {unreadMessages.length} unread messages</p>}
        </div>
    )
}

export default Mailbox;