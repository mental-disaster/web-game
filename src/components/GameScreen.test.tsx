import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import GameScreen from '@/components/GameScreen';
import { Scenario} from '@/types/scenario';

const scenario: Scenario = {   
      id: '1',
      name: '보물사냥.',
      scenes: [
        {
          id: 'intro',
          text: '선택지 1번 입니다.',
          choices: [
            {text: 'A로간다', nextSceneId:'sceneA'},
            {text: 'B로간다', nextSceneId:'sceneB'}
          ]
        },
        {
          id: 'sceneA',
          text: '장면A',
          choices: [
            {text: '다시 시작하기', nextSceneId:''}]
        },
        {
          id: 'sceneB',
          text: '엔딩',
          choices: [
            {text: '다시 시작하기', nextSceneId:''}
          ],
        }
      ]
      
}


describe('GameScreen', () => {
    beforeEach(() => {
        render(<GameScreen scenario={scenario} />);
    });

  it('초기 텍스트와 선택지가 보인다', () => {
    // 초기 텍스트 확인
    expect(screen.getByText(scenario.scenes[0].text)).toBeInTheDocument();

    // 첫 선택지 버튼들이 보이는지 확인
    scenario.scenes[0].choices.forEach(choice => {
      expect(screen.getByRole('button', { name: choice.text })).toBeInTheDocument();
    });
  });

  it('선택지를 클릭하면 화면이 초기화되고 새로운 선택지가 보인다', () => {
    // 첫 번째 선택지 클릭
    fireEvent.click(screen.getByRole('button', { name:scenario.scenes[0].choices[0].text }));

    // nextText가 화면에 보이는지 확인
    expect(screen.getByText(scenario.scenes[1].text)).toBeInTheDocument();

    // 다음 선택지 버튼들이 보이는지 확인
    scenario.scenes[1].choices.forEach(choice => {
      expect(screen.getByRole('button', { name: choice.text })).toBeInTheDocument();
    });
  });

  it('엔딩에 도달하면 "다시 시작하기" 버튼이 보인다', () => {
    // 두 번째 선택지 클릭 (엔딩으로 가는 경로)
    fireEvent.click(screen.getByRole('button', { name: scenario.scenes[0].choices[1].text}));

    // 엔딩 텍스트 확인
    expect(screen.getByText(scenario.scenes[2].text)).toBeInTheDocument();

    // "다시 시작하기" 버튼 확인
    expect(screen.getByRole('button', { name:scenario.scenes[2].choices[0].text})).toBeInTheDocument();
  });
});