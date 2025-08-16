import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

// add writing blogs page (// history research paper on 20th century mental health )
// invention ideas list page
// add photos to travel page


function Home() {
  return (
    <div className="App home-layout">
      
      {/* Vertical Name on Left */}
      <div className="vertical-name">
        charlotte rosario
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        
        {/* Column 1 */}
        <div className="content-column">
          <div>
            <h2 className="home-section-heading">
              building
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="https://searchmentalhealth.com" target="_blank" rel="noopener noreferrer">searchmentalhealth</a></li>
              <li className="list-item-home"><a href="https://joinknowme.vercel.app" target="_blank" rel="noopener noreferrer">knowme</a></li>
              <li className="list-item-home"><a href="https://greenswingenergy.com/" target="_blank" rel="noopener noreferrer">greenswing</a></li>
              <li className="list-item-home"><a href="https://sites.google.com/nuevaschool.org/istudio/welcome" target="_blank" rel="noopener noreferrer">invention studio</a></li>
            </ul>
          </div>

          <div>
            <h2 className="home-section-heading">
              researching
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="/stanford-mchri">stanford hong lab neuro</a></li>
              <li className="list-item-home"><a href="https://www.societyforscience.org/regeneron-sts/2025-student-finalists/charlotte-rosario/" target="_blank" rel="noopener noreferrer">regeneron sts</a></li>
              <li className="list-item-home"><a href="https://aclanthology.org/2023.ranlp-stud.4/" target="_blank" rel="noopener noreferrer">depression nlp</a> <a href="https://aclanthology.org/2023.ranlp-stud.4/" target="_blank" rel="noopener noreferrer">(acl)</a> <a href="https://underline.io/lecture/90669-an-exploratory-analysis-of-differential-linguistic-features-of-depression-in-adolescents-and-adults-via-social-media-video" target="_blank" rel="noopener noreferrer">(emnlp)</a></li>
            </ul>
          </div>

          <div>
            <h2 className="home-section-heading">
              thinking
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="https://epics02.wordpress.com/" target="_blank" rel="noopener noreferrer">existential philosophy</a></li>
              <li className="list-item-home"><Link to="/questions">questions</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="content-column">
          <div>
            <h2 className="home-section-heading">
              advocating
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="https://communityphotobooth.com" target="_blank" rel="noopener noreferrer">community photobooth</a></li>
              <li className="list-item-home"><a href="https://www.unicefusa.org/about-unicef-usa/leadership/youth-leadership" target="_blank" rel="noopener noreferrer">unicef youth rep</a></li>
              <li className="list-item-home"><a href="https://smcbhrsblog.org/2024/05/02/celebrating-community-at-the-2024-tony-hoffman-awards/" target="_blank" rel="noopener noreferrer">behavioral health commission</a></li>
              <li className="list-item-home"><a href="https://www.smdailyjournal.com/news/local/open-mic-for-mental-health-in-san-mateo/article_760f7d12-8283-11ed-bc31-9f21b4af9384.html" target="_blank" rel="noopener noreferrer">mental health open mic</a></li>
            </ul>
          </div>

          <div>
            <h2 className="home-section-heading">
              interning
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="https://www.somethings.com" target="_blank" rel="noopener noreferrer">somethings (NYC)</a></li>
            </ul>
          </div>

          <div>
            <h2 className="home-section-heading">
              crafting
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="https://www.youtube.com/watch?v=EpYAJdZWzZ4" target="_blank" rel="noopener noreferrer">mini documentary</a></li>
              <li className="list-item-home"><Link to="/art">mixed media</Link></li>
              <li className="list-item-home"><Link to="/photos">photography</Link></li>
              <li className="list-item-home"><Link to="/faces">face drawings</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="content-column">
          <div>
            <h2 className="home-section-heading">
              documenting
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><Link to="/books">books</Link></li>
              <li className="list-item-home"><Link to="/articles">articles</Link></li>
              <li className="list-item-home"><Link to="/travel">travel</Link></li>
              <li className="list-item-home"><Link to="/speaking">speaking</Link></li>
              {/* <li>writing</li> */}
              <li className="list-item-home"><Link to="/press"> features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="home-section-heading">
              learning
            </h2>
            <ul className="home-list">
              <li className="list-item-home"><a href="https://stanford.edu" target="_blank" rel="noopener noreferrer">stanford 2025-29</a></li>
              <li className="list-item-home"><a href="https://nuevaschool.org" target="_blank" rel="noopener noreferrer">nueva 2021-25</a></li>
              <li className="list-item-home"><a href="https://www.printschool.org/" target="_blank" rel="noopener noreferrer">montessori 2010-2013</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Right Contact Info */}
      <div className="contact-info">
        <div>interdisciplinary</div>
        <div>tinkerer of</div>
        <div>various things</div>
        <div className="social-links">
          <a href="mailto:charlotterosario@gmail.com">email</a>
          <a href="https://youtube.com/@charava" target="_blank" rel="noopener noreferrer">youtube</a>
        </div>
        <div className='social-links'>
          <a href="https://github.com/charava" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/charlotterosario/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </div>

      {/* Archive Link
      <div style={{
        position: 'fixed',
        bottom: '40px',
        left: '40px',
        fontSize: '0.9rem'
      }}>
        <Link to="/archive" style={{ color: '#000000', textDecoration: 'none' }}>[+]</Link>
      </div> */}
    </div>
  );
}

export default Home;

/* 

email - charlottearosario@

linkedin
instagram
youtube
github
calendly
send me an email button 

https://www.jemoka.com/card
jklsnt.com

*/
