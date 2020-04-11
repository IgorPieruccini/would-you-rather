import { _getUsersMock } from "./users-data";
import { _getQuestionsMock } from "./question-data";
import { getPollViewData } from "../utils/utils";
import { getUserFromQuestion } from "../utils/users";

describe("TEST: utils", () => {
  it("getPollViewData", () => {
    const users = _getUsersMock();
    const authUser = users["sarahedo"];
    const questions = _getQuestionsMock();
    const pollView = getPollViewData(users["sarahedo"], authUser, questions);
    const result = {
      ["8xf0y6ziyjabvozdd253nd"]: {
        id: "8xf0y6ziyjabvozdd253nd",
        optionOneText: "have horrible short term memory",
        timestamp: 1467166872634,
        avatarURL: "../../images/snow.jpg",
        name: "Sarah Edo",
        userHasAnswered: true,
      },
      ["am8ehyc8byjqgar0jgpub9"]: {
        id: "am8ehyc8byjqgar0jgpub9",
        optionOneText: "be telekinetic",
        timestamp: 1488579767190,
        avatarURL: "../../images/snow.jpg",
        name: "Sarah Edo",
        userHasAnswered: true,
      },
    };
    expect(pollView).toEqual(result);
  });

  it("getUserFromQuestion", () => {
    const users = _getUsersMock();
    const questions = _getQuestionsMock();
    const currentQuestion = questions["8xf0y6ziyjabvozdd253nd"];
    const user = getUserFromQuestion(currentQuestion, users);
    expect(user).toEqual({
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "../../images/snow.jpg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    });
  });
});
