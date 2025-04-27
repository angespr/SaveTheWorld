import React, { useRef } from 'react';
import profileImage from '../../assets/profile.png';
import Header from '../Header';

function UserProfile() {
  const user = {
    name: "Jennifer",
    talent: "NAIL TECH",
    description: "I have been a nail tech for 5 years now. I love experimenting with new styles of nails, so I'm excited to share my work with you! I am also a licensed esthetician and I love doing facials and waxing. I am open to trades for haircuts, tattoos, and lawn work."
  };

  const images = [
    { src: "https://media.glamour.com/photos/6801386a77591b9b0b66728b/1:1/w_1440,h_1440,c_limit/MixCollage-17-Apr-2025-01-20-PM-6718.jpg", link: "https://www.glamour.com/gallery/best-trending-nail-designs" },
    { src: "https://maniology.com/cdn/shop/articles/Frenchy_Spring_stamping_bundle_by_jbunny_dips_d07c52dc-679c-4435-a153-f07cfe28931f_1024x1024.png?v=1744478173", link: "https://maniology.com/blogs/maniology-blog/natural-looking-nail-designs" },
    { src: "https://www.realsimple.com/thmb/sS8oyzSufgOE7CYzIh1GEGhqd2Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nail-trends-big-in-2025-e9e6e2fdc2c4466da0f0d701d4c5c988.jpg", link: "https://www.realsimple.com/2025-nail-trends-8770806" },
  ];

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#F5E9E2', minHeight: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Header />

      <div style={styles.container}>
        <div style={styles.profileSection}>
          <img src={profileImage} alt="My Profile" style={styles.avatar} />
          <div style={styles.nameTalentStack}>
            <h2 style={styles.name}>{user.name}</h2>
            <h1 style={styles.talent}>{user.talent}</h1>
          </div>
          <button style={styles.add2} onClick={() => alert('Add talent clicked')}>Add talent +</button>
        </div>
        <div style={styles.info}>
          <p style={styles.description}>{user.description}</p>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.info}>
          <div style={styles.nameTalentContainer}>
            <h1 style={styles.name}>My Gallery</h1>
            <button style={styles.add3} onClick={() => alert('Add photo clicked')}>Add photo +</button>
          </div>
          <p>Check out my work!</p>
          <div style={styles.carouselWrapper}>
            <button onClick={() => scroll('left')} style={styles.arrow}>{'<'}</button>
            <div style={styles.carousel} ref={carouselRef}>
              {images.map((img, index) => (
                <div key={index} style={styles.slide}>
                  <a href={img.link} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={`Slide ${index + 1}`} style={styles.slideImage} />
                  </a>
                </div>
              ))}
            </div>
            <button onClick={() => scroll('right')} style={styles.arrow}>{'>'}</button>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.info}>
          <div style={styles.tradePreferencesHeader}>
            <h2 style={styles.name}>Trade Preferences</h2>
            <button style={styles.add} onClick={() => alert('Add preference clicked')}>Add Preference +</button>
          </div>
          <button style={styles.button}>Tattoo</button>
          <button style={styles.button}>Lawn Work</button>
          <button style={styles.button}>Haircut</button>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '1000px',
    margin: '30px auto',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '15px',
    padding: '5px',
  },
  nameTalentStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  info: {
    flex: 1,
    minWidth: '100%',
    marginTop: '10px'
  },
  name: {
    fontSize: '1.5rem',
    marginBottom: '2px',
  },
  talent: {
    fontSize: '14px',
    borderRadius: '50px',
    border: '1px solid #A52A2A',
    backgroundColor: '#fff',
    color: '#A52A2A',
    padding: '4px 8px',
    width: 'fit-content'
  },
  description: {
    margin: 0,
    padding: '8px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
    color: '#333',
  },
  carouselWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
    overflow: 'hidden'
  },
  arrow: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0 10px'
  },
  carousel: {
    display: 'flex',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    gap: '20px',
    maxWidth: '100%',
    padding: '10px 0',
    flex: 1
  },
  slide: {
    flex: '0 0 auto',
    width: '300px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  slideImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  button: {
    padding: '15px 25px 10px',
    backgroundColor: '#6A8D92',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '10px',
    marginTop: '10px',
    marginBottom: '10px',
  },
  add: {
    backgroundColor: '#6A8D92',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '10px 20px',
    marginLeft: '550px'
  },
  tradePreferencesHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  add2: {
    fontSize: '14px',
    borderRadius: '50px',
    border: '2px solid #A52A2A',
    backgroundColor: '#fff',
    color: '#A52A2A',
    padding: '5px 5px',
    marginLeft: 'auto',
    cursor: 'pointer'
  },
  add3: {
    fontSize: '14px',
    borderRadius: '50px',
    border: '2px solid #1B0E14',
    backgroundColor: '#fff',
    color: '#1B0E14',
    padding: '5px 12px',
    marginLeft: '850px',
    cursor: 'pointer'
  },
};
