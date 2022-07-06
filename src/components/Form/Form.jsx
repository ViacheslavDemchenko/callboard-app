import './Form.css';

const Form = ({user, setUser, addReview, review, setReview}) => {

    const userHandler = e => {
        setUser(e.target.value);
    }

    const reviewHandler = e => {
        setReview(e.target.value);
    }

    const submitReview = (e) => {
        e.preventDefault();
        let date = new Date().toISOString().split('T')[0];
        let data = new Date().getTime();

        if (user !== '' && review !== '' && date !== '') {
            addReview(user, review, dateFormat(date), data);
            setUser('');
            setReview('');
        } else {
            alert('Все поля формы должны быть заполнены');
        }
    }

    const dateFormat = (num) => {
        let currentDate = num.split('-');
        currentDate = currentDate.reverse();
        currentDate = currentDate.join('.');
        
        return currentDate;
      }

    return(
        <form className="form">
            <div className="form__left">
                <p>Введите имя</p>
                <input 
                    className="review-user" 
                    type="text" 
                    value={user}
                    onChange={userHandler}
                />
            </div>
            <div className="form__right">
                <p>Введите текст отзыва</p>
                <textarea 
                    className="review-text"
                    value={review}
                    onChange={reviewHandler}
                />
                <button 
                    className="review-btn" 
                    onClick={(e) => submitReview(e)}
                >
                    Оставить отзыв
                </button>
            </div>
      </form>
    );
}

export { Form };