import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Rating from '@mui/material/Rating';
import { memo, useState } from 'react';
import AvatarIcon from "../components/AvatarIcon";
import useAuth from "../context/useAuth";
import { createReview } from "../services/reviewService";

// for those who trying to learn,
// memo react function helps cache component not to re-render when something change
// it's great for when use onChange stuff (like in TextArea component in this page).
// if not using memo, it's will lack a lot when typing since it will rerender the reviews display.
const ReviewDisplay = memo(({ review }) => {
  return (
    <>
      <div className="flex">
        {/* Review icons */}
        <AvatarIcon />

        {/* Comment Text section */}
        <div className="flex flex-col w-full gap-2 ml-4">
          <div className="flex justify-between">
            <p className="text-sm font-medium">{review.firstName}</p>
            <Rating
              readOnly
              name={`rating-${review.firstName}`}
              precision={0.5}
              size="small"
              value={review.star}
              max={5}
            />
          </div>
          <p className="text-xs">
            {review.comment}
          </p>
          <p className="text-xs text-gray-500">
            {review.time}
          </p>
        </div>
      </div>
      <hr className="text-gray-500" />
    </>
  )
})

const Review = ({ reviews, productId, setReview }) => {

  const [displayCount, setDisplayCount] = useState(3);
  const [rating, setRating] = useState(0)
  const [commentText, setCommentText] = useState('')

  const { user } = useAuth();

  const reivewsCount = reviews.length

  const handleRating = (e) => {
    setRating(e.target.value);
  }

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  }

  const handleSubmitReview = async () => {
    try {
      const review = { productId: productId, star: rating, comment: commentText, firstName: user.firstName }
      const newReview = await createReview(review);
      setReview((prev) => [newReview, ...prev]);
    } catch (error) {
      console.log(error);
    }
    setRating(0);
    setCommentText('');
  }

  const handleShowMore = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 3, reivewsCount));
  }

  return (
    <div className="flex flex-col sm:w-1/2">


      {/* --- New Review Input Section --- */}
      {!user ? (
        <div><p className="text-gray">กรุณาล็อกอินก่อนเพิ่มคอมเมนต์ใหม่</p></div>
      ) : (
        <>
          <h2 className="text-xl md:2.5rem font-semibold my-4">เพิ่มรีวิวของคุณ</h2>
          <div className='flex flex-col gap-8'>
            <Rating
              name="new-review-rating"
              precision={0.5}
              size='large'
              value={rating}
              onChange={handleRating}
              max={5}
            />

            <div className="relative flex w-full">
              <Textarea
                className="py-6 pl-4 text-sm pr-14 rounded-2xl"
                placeholder="แบ่งปันความเห็นของคุณ..."
                onChange={handleCommentChange}
                value={commentText}
              />
              <Button
                onClick={handleSubmitReview}
                className="absolute flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-black rounded-full cursor-pointer top-8 right-2 active:bg-gray-700 hover:bg-gray-800"
              >
                <ArrowRightAltIcon />
              </Button>
            </div>
          </div>
        </>
      )


      }

      {/* --- End New Review Input Section --- */}


      {/* --- Existing Reviews Section --- */}
      <div className="my-8">
        <h3 className="mb-8 font-medium">{reivewsCount} ความเห็น</h3>

        {/* Review comments section */}
        <div className="flex flex-col gap-8 ">
          {reivewsCount > 0 ? (
            reviews.slice(0, displayCount).map((review) => (
              <ReviewDisplay key={`${review._id}-${review.firstName}-${review.createdAt}`} review={review} />
            ))
          ) : (
            <p className="my-4 text-center text-gray-500">ยังไม่มีรีวิวสำหรับสินค้านี้</p>
          )}
        </div>
      </div>

      {/* Show More Button */}
      {reivewsCount > displayCount && (
        <Button
          onClick={handleShowMore}
          className="w-1/2 mt-8 text-black transition-all duration-300 ease-out border border-gray-300 rounded-full cursor-pointer hover:bg-gray-50 active:bg-gray-200 active:shadow-md font-semi hover"
        >
          แสดงเพิ่มเติม
        </Button>
      )}
    </div>
  )
}

export default Review