import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function QuestionsArchive() {
  return (
    <div className="App">
      <div className="main-container">

      <p>t<i>(h)</i>ink<s>er</s>ing: i ask questions but i typically don't have the answers (yet)</p>
        

      <ul>
        <li>Is culture across the country and world homogenizing now with the younger generation?</li>
        <li>What is the data of our brains? Versus AI data, qualia?</li>
        <li>How can we give real-time data on someone’s bipolar disorder</li>
        <li>How does philosophy physically change our brains? Mental health?</li>
        <li>Why do teens get into existential philosophy? Is it a safety anthropological mechanism? Is this early forms of depression? Does depression have a deeper philosophical root?</li>
        <li>How does nature help cure bipolar disorder?</li>
        <li>Why do we cry? Why not something else?</li>
        <li>Is there such thing as pure altruism? Selflessness? How do we measure that?</li>
        <li>When we slip into moods so quickly, how do we get people to feel the same thing as others? To empathize? Can we create empathy with technology?</li>
        <li>How can we monitor moods?</li>
        <li>Can we pass memories from one person to another in an objective and accurate way? So as to help human society remember the pain, the struggle, and to empathize, to not create more problems because we forget</li>
        <li>Why do we want to know why?</li>
        <li>Why do humans kill themselves?</li>
        <li>Why do we die?</li>
        <li>Why do we dream?</li>
        <li>How do we understand how people make really big decisions or possess certain personalities in life? And how do we make this understanding/information accessible so people can better their lives?</li>
        <li>How might our experiences/stories create biases and naturally make us more conservative?</li>
        <li>How do we move past stigma?</li>
        <li>Why are we so bad at knowing what makes us happy?</li>
        <li>How do we make people more introspective? How do we help people understand and empathize with themselves?</li>
        <li>How do we induce more empathy? Can we use technology to do this?</li>
      </ul>
    </div>
    <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '40px' }}>
          <Link
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: 'gray',
                }}
                to="/archive"
              >
                ← take me back
              </Link>
              </div>
      
    </div>
  );
}

export default QuestionsArchive;
