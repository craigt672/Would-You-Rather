import {
  RECIEVE_QUESTIONS,
  ADD_VOTE,
  ADD_QUESTION
} from "../actions/questions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case ADD_VOTE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [state[action.questionId][action.option]]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].votes.push(
              action.userId
            )
          }
        }
      };
    default:
      return state;
  }
};
