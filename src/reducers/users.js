import { RECEIVE_USERS, SUBMIT_ANSWER } from "../actions/users";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
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
