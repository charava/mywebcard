import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function QuotesArchive() {
  return (
    <div className="App">
      <div className="content-container">
        <p className="intro-text">
          this is how I'm training myself to sound less dumb when i talk to other humans.
        </p>

        <ul className="clean-list">
          <li className="list-item-compact">"Take more shots on goal." - my mom (who likely paraphrased some other famous quote)</li>
          <li className="list-item-compact">"To explain the world of interactions and outcomes occurring at multiple levels, we also have to be willing to deal with complexity instead of rejecting it." - Elinor Ostrom</li>
          <li className="list-item-compact">"Anything engineered—cars, bridges, buildings—can cause harm to people, and yet we have built a civilization on engineering." - Jarod Lanier</li>
          <li className="list-item-compact">"The whole is greater than the sum of its parts" - Aristotle</li>
          <li className="list-item-compact">"Keep a running list of the nicest things anyone has ever said to or about you. It's a lifesaver on days when the world is getting the best of you." — Dave Clarke</li>
          <li className="list-item-compact">"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves." - Lao Tzu</li>
          <li className="list-item-compact">"Those closest to the problem are closest to the solution."</li>
          <li className="list-item-compact">"Happiness begins within."</li>
          <li className="list-item-compact">"Set your own agenda or else someone will set it for you."</li>
          <li className="list-item-compact">"Changing the world costs money, you need someone to pay." </li>
          <li className="list-item-compact">"Change happens at the speed of trust."</li>
          <li className="list-item-compact">"It's not how big you are or how well connected you are." - Wendy Schmidt.</li>
          <li className="list-item-compact">"Your net worth is your network."</li>
          <li className="list-item-compact">"Never doubt that a small group of thoughtful, committed citizens can change the world; indeed it is the only thing that ever has." - Margaret Mead</li>
          <li className="list-item-compact">"You cannot solve a problem that you don't understand."</li>
          <li className="list-item-compact">"If I had an hour to solve a problem and my life depended on the solution, I would spend the first 55 minutes determining the proper question to ask, for once I know the proper question, I could solve the problem in less than five minutes." - Albert Einstein</li>
          <li className="list-item-compact">"We face the greatest cascade of crises in our lifetimes," yet, "solidarity is missing in action—just when we need it most." - Antonio Guterres</li>
          <li className="list-item-compact">"None of us are safe until all of us are safe."</li>
          <li className="list-item-compact">"I don't want to build just to build; I want to build to create impact." - Christine Schindler</li>
          <li className="list-item-compact">"Home is where your absence is noticed." - my friend Saanvi</li>
          <li className="list-item-compact">"Sometimes the path we want to take doesn't exist yet, so start walking until you find your path or the reason to create your own." - my yoga instructor Samara</li>
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

export default QuotesArchive;
