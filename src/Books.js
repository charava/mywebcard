import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function BooksArchive() {
  const books = [
    { title: 'When Breath Becomes Air', author: 'Paul Kalinithi', date: '12/30/24' },
    { title: 'A Heart in a Body in a World' },
    { title: 'A Little Life' },
    { title: 'A Very Large Expanse of Sea' },
    { title: 'A View From the Stars', author: 'Cixin Liu', date: '8/18/24' },
    { title: 'All the Bright Places' },
    { title: 'Are You There God? It’s Me, Margaret' },
    { title: 'Between Shades of Grey' },
    { title: 'Bill Bryson - I’m a Stranger Here Myself', author: 'Bill Bryson', date: '2024' },
    { title: 'Brave New World', author: 'Aldous Huxley', date: '7/31/24' },
    { title: 'Brown Girl Dreaming' },
    { title: 'Chains' },
    { title: 'Counting By Sevens' },
    { title: 'Curious Incident of the Dog in the Night' },
    { title: 'Dead End in Norvelt' },
    { title: 'Doing Good Better', author: 'William MacAskill', date: '7/12/24' },
    { title: 'Educated', author: 'Tara Westover' },
    { title: 'Eleanor and Park' },
    { title: 'Elon Musk', author: 'Walter Isaacson', date: '6/9/24' },
    { title: 'Everything Everything' },
    { title: 'Factfulness', author: 'Hans Rosling', date: '7/24/24' },
    { title: 'Far from the Tree' },
    { title: 'Frankenstein' },
    { title: 'Girl in Pieces', author: 'Kathleen Glasgow' },
    { title: 'Holding Up the Universe' },
    { title: 'I’m Not Your Perfect Mexican Daughter' },
    { title: 'I’ll Give You the Sun' },
    { title: 'Kira Kira' },
    { title: 'Lord of the Flies', author: 'William Golding', date: '7/23' },
    { title: 'Long Way Down' },
    { title: 'Me and Earl and the Dying Girl' },
    { title: 'My Year of Rest and Relaxation', author: 'Ottessa Moshfegh', date: '6/23/24' },
    { title: 'Never Let Me Go', author: 'Kazuo Ishiguro' },
    { title: 'Olive’s Ocean' },
    { title: 'On the Come Up' },
    { title: 'Opposite of Always' },
    { title: 'Ordinary Hazards' },
    { title: 'Paper Towns', author: 'John Green' },
    { title: 'Rationality', author: 'Steven Pinker' },
    { title: 'Sapiens', author: 'Yuval Noah Harari', date: '7/19/24' },
    { title: 'Shout' },
    { title: 'Stutz - Therapist with Parkinson\'s Life' },
    { title: 'Tell Me Three Things' },
    { title: 'The 57 Bus' },
    { title: 'The Apology' },
    { title: 'The Book Thief', author: 'Markus Zusak' },
    { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', date: '7/2023' },
    { title: 'The Girl Who Fell from the Sky' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', date: '2024' },
    { title: 'The Hate U Give' },
    { title: 'The Light We Carry', author: 'Michelle Obama', date: '6/19/24' },
    { title: 'The Ministry of the Future' },
    { title: 'The Mysterious Benedict Society' },
    { title: 'The Night Watchman', author: 'Louise Erdrich', date: '7/4/24' },
    { title: 'The Poet X' },
    { title: 'The Reason I Jump', author: 'Naoki Higashida' },
    { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', date: '7/10/24' },
    { title: 'The Sky is Everywhere' },
    { title: 'The Thing About Luck' },
    { title: 'The Three-Body Problem', author: 'Liu Cixin' },
    { title: 'The Way to Bea' },
    { title: 'The Witch of Blackbird Pond', author: 'Elizabeth George Speare' },
    { title: 'There There' },
    { title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', date: '8/10/24' },
    { title: 'Took' },
    { title: 'Turtles All the Way Down' },
    { title: 'Watch Us Rise' },
    { title: 'Weapons of Math Destruction', author: 'Cathy O\'Neil' },
    { title: 'We Are Okay' },
    { title: 'We Were Liars' },
    { title: 'When You Reach Me' },
    { title: 'Wonder' }
  ];

  const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="App">
      <div className="main-container">
        <div>
          <p>Books have very good nutritional value. I consume them as training data. If we're all just AI, might as well have high accuracy.</p>
          <p><small><i>I only recently started recording the exact date I finished reading the book. I've forgotten a lot of the books I've read in the past, but here is a list of some.</i></small></p>

          <ul>
            {sortedBooks.map((book, index) => (
              <li key={index}>
                {book.title}
                {book.author && ` - ${book.author}`}
                {book.date && ` - ${book.date}`}
              </li>
            ))}
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

export default BooksArchive;
