import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <img 
        src="https://scontent.fjnb5-1.fna.fbcdn.net/v/t39.30808-1/355695781_6404692009623238_4392886838917163482_n.jpg?stp=c16.0.160.160a_dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHFJ9Bu9U2jSuN54QuYDq662CjD2DTMAofYKMPYNMwChzZZ3GeQkJ3u-e0WPWpPGEsHrcyh3zOdPOnMuSaQ70rb&_nc_ohc=ffwtZVq372cQ7kNvgGjLzur&_nc_ht=scontent.fjnb5-1.fna&oh=00_AYAVjbRm3IXexvURWLhwU6zweB05bHQB5yoc9sewtjoUsw&oe=6685A401" 
        alt="Profile" 
        className="profile-image" 
      />
      <h1>Home</h1>
      <p>Welcome to my portfolio website!</p>
      <button className="hire-me-button">Hire Me</button>
    </section>
  );
};

export default Home;
