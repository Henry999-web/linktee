import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  const emojis = Array.from({ length: 50 });
  useEffect(() => {
    // 1. YOUR WEBHOOK URL GOES HERE
    const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1488783327564664872/LZoacfDdoxR-djnpZKPKjR1MXOeTMAT-4YW4jOW1aWi_2owpDhi8uo4mDvgF6Wv6crMP';

    // 2. Gather a little "intel" on the victim
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|Android/i.test(userAgent) ? "📱 Mobile" : "💻 Desktop";
    const time = new Date().toLocaleTimeString();

    // 3. Send the notification
    fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "Prank Bot 🤡",
        content: `**Got one!** 🎯`,
        embeds: [{
          title: "April Fool Victim Detected!",
          color: 16711680, // Red
          fields: [
            { name: "Time", value: time, inline: true },
            { name: "Device", value: isMobile, inline: true }
          ],
          footer: { text: "Victim is currently looking at the big fat April Fool text 😂" }
        }]
      }),
    }).catch(err => console.log("Prank successful, but notification failed."));
  }, []);

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#1a1a1a', // Dark mode makes the yellow emojis pop
      position: 'relative'
    }}>
      
      {/* The Big Fat Text */}
      <h1 style={{ 
        fontSize: 'clamp(4rem, 15vw, 12rem)', // Responsive sizing
        fontWeight: '900', 
        color: '#FFD700', 
        textAlign: 'center',
        margin: 0,
        zIndex: 10,
        textShadow: '10px 10px 0px #ff4500'
      }}>
        APRIL FOOL! 😂
      </h1>

      <p style={{ 
        color: '#fff', 
        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
        zIndex: 10, 
        marginTop: '20px',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        Gotcha! 😂
      </p>
      <p style={{ 
        color: '#fff', 
        fontSize: 'clamp(1rem, 3.5vw, 1.5rem)', 
        zIndex: 10, 
        marginTop: '10px',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        Please Follow Me on X (Formally Twitter) 👇
      </p>
      <a 
        href="https://x.com/henrydevx1" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          marginTop: 'clamp(20px, 4vw, 30px)',
          padding: 'clamp(12px, 3vw, 15px) clamp(25px, 6vw, 35px)',
          backgroundColor: '#000',
          color: '#fff',
          border: '1px solid #333',
          borderRadius: '50px',
          fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
          fontWeight: 'bold',
          textDecoration: 'none',
          zIndex: 10,
          boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(6px, 2vw, 10px)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#1da1f2';
          e.currentTarget.style.borderColor = '#1da1f2';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#000';
          e.currentTarget.style.borderColor = '#333';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        Follow me on X
      </a>

      {/* The Emoji Rain Logic */}
      {emojis.map((_, index) => (
        <span
          key={index}
          className="emoji-rain"
          style={{
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * (40 - 20) + 20}px`,
            animationDuration: `${Math.random() * (5 - 2) + 2}s`, // Falls between 2-5 seconds
            animationDelay: `${Math.random() * 5}s`, // Spreads out the start times
          }}
        >
          😂
        </span>
      ))}
    </div>
  );
};

export default App;
