// src/pages/Home.jsx
import React from 'react';
import { useAuth } from '../store/auth';
import backgroundImage from '/images/test2.jpg'; 
import './Home.css'; 

const Home = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <main style={{ overflow: 'hidden' }}>
      <section className="section-hero" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', overflow: 'hidden' }}>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            {isLoggedIn && user ? (
              <>
                <p>Welcome {user.username}, glad to see you</p>
              </>
            ) : (
              <>
                <p>Welcome to our App</p>
              </>
            )}
            <h1>Welcome to Fake Review Monitoring</h1>
            <p>Monitor and Detect Fake Product Reviews</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
