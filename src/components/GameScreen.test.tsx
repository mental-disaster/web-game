import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import GameScreen from "@/components/GameScreen";
import { Scenario } from "@/data/scenario/treasureHunt";

// 타자 효과를 비활성화
jest.mock("@/lib/hooks/useTypewriter", () => ({
  useTypewriter: ({ text }: { text: string }) => ({
    displayText: text,
    isComplete: true,
    completeText: jest.fn(),
    reset: jest.fn(),
  }),
}));

const endText = "게임종료";
const endChoiceText = "다시하기";
const scenario: Scenario = {
  id: "1",
  name: "보물사냥.",
  scenes: {
    intro: {
      text: "선택지 1 입니다.",
      choices: [
        { text: "1-1", nextSceneId: "1-1" },
        { text: "엔딩행 버튼", nextSceneId: "" },
      ],
    },
    "1-1": {
      text: "선택지 1-1 입니다.",
      choices: [
        { text: "1-1-1", nextSceneId: "1-1-1" },
        { text: "엔딩행 버튼2", nextSceneId: "" },
      ],
    },
    "1-1-1": {
      text: "선택지 1-1-1 입니다.",
      choices: [{ text: "엔딩행 버튼3", nextSceneId: "" }],
    },
  },
};

describe("GameScreen", () => {
  beforeEach(() => {
    render(<GameScreen scenario={scenario} />);
  });

  it("초기 텍스트와 선택지가 보인다", () => {
    // 초기 텍스트 확인
    expect(screen.getByText(scenario.scenes["intro"].text)).toBeInTheDocument();

    // 첫 선택지 버튼들이 보이는지 확인
    scenario.scenes["intro"].choices.forEach((choice) => {
      expect(screen.getByRole("button", { name: choice.text })).toBeInTheDocument();
    });
  });

  it("선택지를 클릭하면 화면이 초기화되고 새로운 선택지가 보인다", async () => {
    // 첫 번째 선택지 클릭
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: scenario.scenes["intro"].choices[0].text })
      );
    });

    // nextText가 화면에 보이는지 확인
    expect(screen.getByText(scenario.scenes["1-1"].text)).toBeInTheDocument();

    // 다음 선택지 버튼들이 보이는지 확인
    scenario.scenes["1-1"].choices.forEach((choice) => {
      expect(screen.getByRole("button", { name: choice.text })).toBeInTheDocument();
    });
  });

  it('엔딩에 도달하면 "다시하기" 버튼이 보인다', async () => {
    // 두 번째 선택지 클릭 (엔딩으로 가는 경로)
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: scenario.scenes["intro"].choices[1].text })
      );
    });

    // 엔딩 텍스트(게임종료) 확인
    expect(screen.getByText(endText)).toBeInTheDocument();

    // "다시하기" 버튼 확인
    expect(screen.getByRole("button", { name: endChoiceText })).toBeInTheDocument();
  });
});
