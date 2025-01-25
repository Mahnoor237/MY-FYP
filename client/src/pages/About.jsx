// src/pages/About.jsx
import React from 'react';
import { useAuth } from '../store/auth';
import backgroundImage from '/images/test2.jpg';
import './About.css'; 

const About = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <main style={{ overflow: 'hidden' }}>
      <section className="about" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', overflow: 'hidden' }}>
        <div className="about-content">
          {isLoggedIn && user ? (
            <>
              <p>Welcome {user.username}, glad to see you</p>
            </>
          ) : (
            <>
              <p>Welcome to our App</p>
            </>
          )}
          <h2>About Us</h2>
          <p>Welcome to Fake Review Monitoring, your trusted source for identifying and combating fake product reviews.</p>
          <p>Our mission is to provide consumers, businesses, and online platforms with the tools they need to maintain trust and integrity in product reviews.</p>
          <p>With the rise of e-commerce and online reviews, fake product reviews have become a growing concern. These reviews can mislead consumers and harm the reputation of honest businesses. That's where we come in.</p>
          <p>At Fake Review Monitoring, we leverage advanced algorithms and data analysis to detect suspicious reviews and help you separate genuine feedback from the fake ones.</p>
          <p>Our dedicated team is committed to promoting transparency and trustworthiness in online product reviews. We believe that informed consumers make better choices, and honest businesses thrive when they are recognized for their quality products and services.</p>
          <p>Thank you for choosing Fake Review Monitoring. We look forward to helping you navigate the world of online reviews with confidence.</p>
        </div>
      </section>
    </main>
  );
};

export default About;
