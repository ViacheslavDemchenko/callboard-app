import './ReviewsItem.css';

const ReviewsItem = ({date, review, user}) => {
    return(
        <div className="review__item">
            <div className="review__item-text">{review}</div>
            <div className="review__item-info">
                <div className="review__item-name">{user}</div>
                <div className="review__item-date">{date}</div>
            </div>
      </div>
    );
}

export { ReviewsItem };