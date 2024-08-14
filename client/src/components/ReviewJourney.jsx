import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './Reviews.css';

export default function App() {
  const [number, setNumber] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleText = () => {
    const rating = number;
    switch (rating) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatisfaction";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    const rating = number;
    switch (rating) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success('Successfully submitted!'); 

      navigate("/");
      
    }, 2000); 
  };

  return (
    <div className="App">
      <div className="popup">
        <div className="content">
          <div className="product">
            <img
              className="product-image"
              src="https://cdn.standardmedia.co.ke/images/wysiwyg/images/nQpbmBGgIp6DCfQpraWRirwizllYM0M6nvpWudXe.jpg"
              alt="name"
            />
            <h1>MatwanaMinder</h1>
          </div>
          <div className="stars-container">
            <h1>{handleText()}</h1>
            <div className="stars">
              {Array(5)
                .fill()
                .map((_, index) =>
                  number >= index + 1 ? (
                    <AiFillStar
                      key={index}
                      className="star filled"
                      onClick={() => setNumber(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      key={index}
                      className="star"
                      onClick={() => setNumber(index + 1)}
                    />
                  )
                )}
            </div>
          </div>
          <textarea
            placeholder={handlePlaceHolder()}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            className={`submit-button ${!number ? "disabled" : ""}`}
            onClick={handleSubmit}
            disabled={!number || loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {loading && <p className="loading-text">Processing your review...</p>}
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
}
