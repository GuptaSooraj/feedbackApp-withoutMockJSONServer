import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="#ff6a95" size={15} />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="#ff6a95" size={15} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
