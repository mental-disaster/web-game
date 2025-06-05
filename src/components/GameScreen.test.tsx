import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import GameScreen from '@/components/GameScreen';
import { Choice } from '@/types/Choice';

const initialText = '게임을 시작합니다.';
const restartText = '다시 시작하기';
const scenario: Choice[] = [
    {   
      text: '선택지 1',
      nextText: '선택지 1번 입니다.',
      nextChoices: [
        {
          text: '선택지 1-1',
          nextText: '선택지 1-1번 입니다.',
          nextChoices: []
        },
        {
          text: '선택지 1-2',
          nextText: '1-2 엔딩',
          nextChoices: []
        }
      ]
    },
    {
      text: '선택지 2',
      nextText: '2 엔딩',
      nextChoices: []
    }
  ];

describe('GameScreen', () => {
    beforeEach(() => {
        render(<GameScreen initialText={initialText} scenario={scenario} />);
    });

  it('초기 텍스트와 선택지가 보인다', () => {
    // 초기 텍스트 확인
    expect(screen.getByText(initialText)).toBeInTheDocument();

    // 첫 선택지 버튼들이 보이는지 확인
    scenario.forEach(choice => {
      expect(screen.getByRole('button', { name: choice.text })).toBeInTheDocument();
    });
  });

  it('선택지를 클릭하면 화면이 초기화되고 새로운 선택지가 보인다', () => {
    // 첫 번째 선택지 클릭
    fireEvent.click(screen.getByRole('button', { name: scenario[0].text }));

    // nextText가 화면에 보이는지 확인
    expect(screen.getByText(scenario[0].nextText)).toBeInTheDocument();

    // 다음 선택지 버튼들이 보이는지 확인
    scenario[0].nextChoices.forEach(nextChoice => {
      expect(screen.getByRole('button', { name: nextChoice.text })).toBeInTheDocument();
    });
  });

  it('엔딩에 도달하면 "다시 시작하기" 버튼이 보인다', () => {
    // 두 번째 선택지 클릭 (엔딩으로 가는 경로)
    fireEvent.click(screen.getByRole('button', { name: scenario[1].text }));

    // 엔딩 텍스트 확인
    expect(screen.getByText(scenario[1].nextText)).toBeInTheDocument();

    // "다시 시작하기" 버튼 확인
    expect(screen.getByRole('button', { name: restartText })).toBeInTheDocument();
  });
});