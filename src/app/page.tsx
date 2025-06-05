import GameScreen from '@/components/GameScreen';
import { treasureHunt } from '@/data/scenario/treasureHunt';

export default function Home() {
  return (
    <div className="min-h-screen">
      <GameScreen scenario={treasureHunt} />
    </div>
  );
}
