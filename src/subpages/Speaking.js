import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Speaking() {
  return (
    <div className="App">
      <div className="content-container">
        <h2 className="section-heading">conference presentations</h2>
        <ul className="clean-list" style={{ marginBottom: '2rem' }}>
            <li className="list-item-compact"><a href="https://www.youtube.com/watch?v=MMYgfBZnGcE" target="_blank" rel="noopener noreferrer">Social Innovation Summit 2025 - Bright Minds, Healthy Futures: Supporting Mental Health Globally</a></li>
            <li className="list-item-compact"><a href="https://www.youtube.com/watch?si=9uamBRSfOnogzM4n&v=yTPr2RdTxM0&feature=youtu.be" target="_blank" rel="noopener noreferrer">TEDx Talk - "No, I do not live in a perfect family"</a></li>
            <li className="list-item-compact"><a href="https://m.youtube.com/watch?v=Z4fx6zwIFx8" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness CA Conference - SearchMentalHealth Presentation</a></li>
            <li className="list-item-compact"><a href="https://namicon2023.nami.org/namicon-online/express-talks/" target="_blank" rel="noopener noreferrer">National Alliance for Mental Illness Convention 2023 Express Talk</a></li>
        </ul>
        
        <h2 className="section-heading">on the radio</h2>
        <ul className="clean-list" style={{ marginBottom: '2rem' }}>
          <li className="list-item-compact"><a href="https://www.kqed.org/perspectives/201601143947/charlotte-rosario-talking-about-suicide" target="_blank" rel="noopener noreferrer">KQED Radio - "Saying the Word Suicide"</a></li>
          <li className="list-item-compact"><a href="https://www.kalw.org/show/your-call/2023-08-15/young-people-discuss-solutions-to-the-worsening-mental-health-crisis" target="_blank" rel="noopener noreferrer">KALW Public Radio - "Young people discuss solutions to the worsening mental health crisis"</a></li>
        </ul>
        
        <h2 className="section-heading">podcasts</h2>
        <ul className="clean-list" style={{ marginBottom: '2rem' }}>
          <li className="list-item-compact"><a href="https://simple-acts-big-impact.castos.com/episodes/charlotte-community-photobooth" target="_blank" rel="noopener noreferrer">Simple Acts Big Impact - Natalie Silverstein (Community Photobooth)</a></li>
          <li className="list-item-compact"><a href="https://www.iheart.com/podcast/209-fearless-fabulous-you-27073519/episode/meet-four-of-the-newest-barron-268693214/" target="_blank" rel="noopener noreferrer">Fearless Fabulous You - Melanie Young (Community Photobooth)</a></li>
          <li className="list-item-compact"><a href="https://open.spotify.com/episode/2q7VB6RTO0HMHotJcc3dle?nd=1&dlsi=00e1713aed394f76" target="_blank" rel="noopener noreferrer">Closing the Gap - Kacey Montgomery (Regeneron STS Project)</a></li>
          <li className="list-item-compact"><a href="https://www.midvalleystem.org/2025/05/27/transgender-youth-mental-health-charlotte-rosario/" target="_blank" rel="noopener noreferrer">Mid Valley STEM - Transgender Youth Mental Health</a></li>
        </ul>
      </div>
      <div className="nav-back">
        <Link className="nav-link" to="/">
          ← back
        </Link>
      </div>
    </div>
  );
}

export default Speaking; 