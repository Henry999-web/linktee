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

      <p style={{ color: '#fff', fontSize: '1.5rem', zIndex: 10, marginTop: '20px' }}>
        You really thought this was a real link?
      </p>

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
