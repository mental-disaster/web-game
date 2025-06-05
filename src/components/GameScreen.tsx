'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Choice } from '@/types/choice';

interface GameScreenProps {
  initialText?: string;
  scenario: Choice[];
}

export default function GameScreen({ initialText = '게임 시작...', scenario }: GameScreenProps) {
  const [gameText, setGameText] = useState<string>(initialText);
  const [choices, setChoices] = useState<Choice[]>(scenario);

  const handleChoice = (choice: Choice) => {
    setGameText(choice.nextText);
    if (choice.nextChoices.length > 0) {
      setChoices(choice.nextChoices);
    } else {
      setChoices([{
        text: '다시 시작하기',
        nextText: initialText,
        nextChoices: scenario
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full mx-auto">
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