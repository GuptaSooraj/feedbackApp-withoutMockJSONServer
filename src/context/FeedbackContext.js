import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([
    {
      text: "This is feedback item 1 coming from backend",
      rating: 10,
      id: 1,
    },
    {
      text: "This is feedback item 2 coming from backend",
      rating: 9,
      id: 2,
    },
    {
      text: "This is feedback item 3 coming from the backend",
      rating: 8,
      id: 3,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update Feedback Item
  const updateFeedback = (id, updatedItemId) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItemId } : item
      )
    );

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  //Set Item to be Updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        // isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
