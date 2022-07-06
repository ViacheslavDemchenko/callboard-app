import './ReviewsList.css';

import { ReviewsItem } from '../ReviewsItem/ReviewsItem';

const ReviewsList = ({reviews}) => {

    return(
      <div className="reviews-list">
        {
          reviews.length ? reviews.map( (item, i) => {
            return <ReviewsItem key={item.id} {...item} />
          }) : null
        }
      </div>
    );
}

export { ReviewsList };