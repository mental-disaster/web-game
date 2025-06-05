'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Choice } from '@/types/Choice';
import { initialChoices } from '@/data/scenario/treasureHunt';

interface GameScreenProps {
  initialText?: string;
}

export default function GameScreen({ initialText = '어느 날, 당신은 이상한 동굴 앞에 서있습니다. 동굴 안에서 은은한 빛이 새어나오고 있습니다.' }: GameScreenProps) {
  const [gameText, setGameText] = useState<string>(initialText);
  const [choices, setChoices] = useState<Choice[]>(initialChoices);

  const handleChoice = (choice: Choice) => {
    setGameText(choice.nextText);
    if (choice.nextChoices.length > 0) {
      setChoices(choice.nextChoices);
    } else {
      // 선택지가 없는 경우 (엔딩)
      setChoices([{
        text: '다시 시작하기',
        nextText: initialText,
        nextChoices: initialChoices
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="h-[60vh] overflow-y-auto mb-4 p-4 bg-gray-700 rounded">
            <pre className="whitespace-pre-wrap font-mono">
              {gameText}
            </pre>
          </div>
          
          <div className="flex flex-col gap-2">
            {choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(choice)}
              >
                {choice.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 