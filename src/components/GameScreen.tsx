"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scenario, Choice, Scene } from "@/data/scenario/treasureHunt";
import { useTypewriter } from "@/lib/hooks/useTypewriter";

interface GameScreenProps {
  scenario: Scenario;
}

export default function GameScreen({ scenario }: GameScreenProps) {
  const [currentScene, setCurrentScene] = useState<Scene>(scenario.scenes["intro"]);
  const { displayText, isComplete, completeText, reset } = useTypewriter({
    text: currentScene.text,
  });

  useEffect(() => {
    reset();
  }, [currentScene, reset]);

  const handleChoice = (choice: Choice) => {
    if (choice.nextSceneId && scenario.scenes[choice.nextSceneId]) {
      setCurrentScene(scenario.scenes[choice.nextSceneId]);
    } else {
      setCurrentScene({
        text: "게임종료",
        choices: [
          {
            text: "다시하기",
            nextSceneId: "intro",
          },
        ],
      });
    }
  };

  const handleScreenClick = () => {
    if (!isComplete) {
      completeText();
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4"
      onClick={handleScreenClick}
    >
      <div className="max-w-2xl w-full mx-auto">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="h-[60vh] overflow-y-auto mb-4 p-4 bg-gray-700 rounded">
            <pre className="whitespace-pre-wrap font-mono">{displayText}</pre>
          </div>

          <div className="flex flex-col gap-2">
            {currentScene.choices.map((choice, index) => (
              <Button key={index} onClick={() => handleChoice(choice)} disabled={!isComplete}>
                {isComplete ? choice.text : "..."}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
