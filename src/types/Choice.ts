export interface Choice {
    text: string;
    nextText: string;
    nextChoices: Choice[];
  }