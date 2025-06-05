import { Choice } from "@/types/Choice";

export const initialChoices: Choice[] = [
    {   
      text: '동굴 안으로 들어간다',
      nextText: '동굴 안은 생각보다 넓습니다. 앞쪽에서 물이 떨어지는 소리가 들립니다.',
      nextChoices: [
        {
          text: '물소리가 나는 쪽으로 간다',
          nextText: '물이 떨어지는 곳에 도착했습니다. 작은 연못이 있고, 그 안에서 무언가 반짝입니다.',
          nextChoices: [
            {
              text: '반짝이는 물건을 건져본다',
              nextText: '물건을 건져보니 이상한 보석이 나왔습니다. 이 보석은 특별한 힘을 가지고 있는 것 같습니다.',
              nextChoices: []
            },
            {
              text: '연못 주변을 살펴본다',
              nextText: '연못 주변에는 이상한 문양이 새겨진 돌들이 있습니다.',
              nextChoices: []
            }
          ]
        },
        {
          text: '동굴 벽을 살펴본다',
          nextText: '벽에는 이상한 그림들이 그려져 있습니다. 마치 어떤 이야기를 전하고 있는 것 같습니다.',
          nextChoices: []
        }
      ]
    },
    {
      text: '주변을 살펴본다',
      nextText: '동굴 주변에는 이상한 식물들이 자라고 있습니다. 그 중 하나가 은은한 빛을 내고 있네요.',
      nextChoices: [
        {
          text: '빛나는 식물을 자세히 살펴본다',
          nextText: '식물을 자세히 보니 마치 작은 별들이 모여있는 것 같습니다.',
          nextChoices: []
        },
        {
          text: '다른 식물들도 살펴본다',
          nextText: '다른 식물들도 각각 특이한 모양과 색을 가지고 있습니다.',
          nextChoices: []
        }
      ]
    }
  ];