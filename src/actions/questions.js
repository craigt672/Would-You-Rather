import { saveQuestion } from "../utils/api";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_VOTE = "ADD_VOTE";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  };
}

export function addVote(userId, questionId, option) {
  return {
    type: ADD_VOTE,
    userId,
    questionId,
    option
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(options) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText: options.optionOne,
      optionTwoText: options.optionTwo,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question));
    });
  };
}
