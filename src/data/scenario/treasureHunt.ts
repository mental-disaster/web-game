import { Scenario } from "@/types/scenario";

export const treasureHunt: Scenario = {
  id : '1' ,
  name : '보물사냥',
  scenes : [
    {
      id: 'intro',
      text: '헬기에서 하차, 갈림길 선택',
      choices: [
        {text: '좁은 오솔길', nextSceneId: 'fogTrap'},
        {text: '경고된 큰길', nextSceneId: 'rake'},
        {text: '울창한 숲을 뚫기', nextSceneId: ''}
      ]
    },
    {
       id: 'fogTrap',
       text: '안개속 함정',
       choices: [
        {text: '점프하기', nextSceneId: ''},
        {text: '엎드려 기어가기', nextSceneId: ''},
       ],
    },
    {
      id: 'rake',
      text: '호수도착, 빛나는 돌 발견',
      choices: [
        {text: '무기룰 꺼냄', nextSceneId: ''},
        {text: '조용히 이동', nextSceneId: ''},
      ]

    }
  ]
}