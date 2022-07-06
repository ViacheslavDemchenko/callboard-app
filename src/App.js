import './App.css';

import { useState } from 'react';

import { Form } from './components/Form/Form';
import { ReviewsList } from './components/ReviewsList/ReviewsList';

function App() {
  const [user, setUser] = useState('');
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);


  const addReview = (userName, reviewText, date, data) => {

    const newReview = {
      id: data,
      user: userName,
      review: reviewText,
      date: date
    }

    setReviews([newReview, ...reviews]);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="App__title">Гостевая книга</h1>
        <ReviewsList 
          reviews={reviews}
        />
        <Form 
          user={user}
          setUser={setUser}
          addReview={addReview}
          review={review}
          setReview={setReview}
        />
      </div>
    </div>
  );
}

export default App;
