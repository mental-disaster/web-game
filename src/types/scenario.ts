export interface Choice {
  text: string;
  nextSceneId: string;
}

export interface Scene {
  id: string;
  text: string;
  choices: Choice[];
}

export interface Scenario {
  id: string;
  name: string;
  scenes: Scene[];
}
