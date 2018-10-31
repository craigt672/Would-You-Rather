import { RECEIVE_USERS, SUBMIT_ANSWER } from "../actions/users";
import { ADD_QUESTION } from "../actions/questions";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat(
            action.question.id
          )
        }
      };

    case SUBMIT_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.option
          }
        }
      };
    default:
      return state;
  }
};
