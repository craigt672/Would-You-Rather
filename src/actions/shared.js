import { receiveUsers, saveAnswer } from "./users";
import { receiveQuestions, addVote } from "./questions";
import { getInitialData, saveQuestionAnswer } from "../utils/api";

export default function handleIntialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleSaveAnswer(questionId, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer: option
    }).then(() => {
      dispatch(addVote(authedUser, questionId, option));
      dispatch(saveAnswer(authedUser, questionId, option));
    });
  };
}
