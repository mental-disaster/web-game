'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Scenario, Choice, Scene } from '@/types/scenario';

interface GameScreenProps {
  scenario: Scenario;
}

export default function GameScreen({scenario }: GameScreenProps) {
  const [currentScene, setCurrentScene] = useState<Scene>(scenario.scenes[0])

  const handleChoice = (choice: Choice) => {
    debugger;
    let isEnd = true 
    for(const scene of scenario.scenes){
      if (scene.id === choice.nextSceneId){
        setCurrentScene(scene)
        isEnd = false;
        
      }
    }
    if(isEnd){setCurrentScene({
      id: 'end',
      text: '게임종료',
      choices: [
        {
          text: '다시하기',
          nextSceneId: "intro",
        }
      ]
    })}
    console.log(currentScene)
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="h-[60vh] overflow-y-auto mb-4 p-4 bg-gray-700 rounded">
            <pre className="whitespace-pre-wrap font-mono">
              {currentScene.text}
            </pre>
          </div>
          
          <div className="flex flex-col gap-2">
            {currentScene.choices.map((choice, index) => (
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