import { RECIEVE_QUESTIONS, SUBMIT_VOTE } from "../actions/questions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SUBMIT_VOTE:
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
