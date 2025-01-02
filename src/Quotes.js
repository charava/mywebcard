import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function QuotesArchive() {
  return (
    <div className="App">
      <div className="main-container">

      <p>this is how I'm training myself to sound less dumb when i talk to other humans.</p>


            <div>
            <ul>
            <li>“Take more shots on goal.” - my mom (who likely paraphrased some other famous quote)</li>
                <li>“To explain the world of interactions and outcomes occurring at multiple levels, we also have to be willing to deal with complexity instead of rejecting it.” - Elinor Ostrom</li>
                <li>“Anything engineered—cars, bridges, buildings—can cause harm to people, and yet we have built a civilization on engineering.” - Jarod Lanier</li>
                <li>“The whole is greater than the sum of its parts” - Aristotle</li>
                <li>“Keep a running list of the nicest things anyone has ever said to or about you. It’s a lifesaver on days when the world is getting the best of you.” — Dave Clarke</li>
                <li>“A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.” - Lao Tzu</li>
                <li>"Those closest to the problem are closest to the solution."</li>
                <li>"Happiness begins within."</li>
                <li>“Set your own agenda or else someone will set it for you.”</li>
                <li>"Changing the world costs money, you need someone to pay." </li>
                <li>"Change happens at the speed of trust."</li>
                <li>"It’s not how big you are or how well connected you are." - Wendy Schmidt.</li>
                <li>"Your net worth is your network."</li>
                <li>“Never doubt that a small group of thoughtful, committed citizens can change the world; indeed it is the only thing that ever has.” - Margaret Mead</li>
                <li>"You cannot solve a problem that you don’t understand."</li>
                <li>"If I had an hour to solve a problem and my life depended on the solution, I would spend the first 55 minutes determining the proper question to ask, for once I know the proper question, I could solve the problem in less than five minutes.” - Albert Einstein</li>
                <li>“We face the greatest cascade of crises in our lifetimes,” yet, “solidarity is missing in action—just when we need it most.” - Antonio Guterres</li>
                <li>"None of us are safe until all of us are safe."</li>
                <li>“I don’t want to build just to build; I want to build to create impact.” - Christine Schindler</li>
                <li>"Home is where your absence is noticed." - my friend Saanvi</li>
                <li>"Sometimes the path we want to take doesn’t exist yet, so start walking until you find your path or the reason to create your own." - my yoga instructor Samara</li>
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
    </div>
  );
}

export default QuotesArchive;
