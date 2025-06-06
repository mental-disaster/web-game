# 텍스트 어드벤처 게임

Next.js로 구현된 인터랙티브 텍스트 어드벤처 게임입니다.

## 기술 스택

- **프레임워크**: [Next.js](https://nextjs.org) (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS, Shadcn/UI

## 프로젝트 구조

```
web-game/
├── src/                   # 소스 코드
│   ├── app/               # Next.js App Router 구조
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   └── ui/            # 쉐이든 ui 컴포넌트
│   ├── lib/               # 유틸리티 함수
│   ├── types/             # TypeScript 타입 정의
│   └── data/              # 게임 데이터 및 스토리
├── public/                # 정적 파일
```

## 개발 환경 설정

1. 저장소 클론
```bash
git clone https://github.com/mental-disaster/web-game.git
cd web-game
```

2. 의존성 설치
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. 개발 서버 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 게임을 확인할 수 있습니다.

## 빌드 및 배포

### 빌드
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 배포
이 프로젝트는 [Vercel](https://vercel.com)을 통해 배포예정입니다. GitHub 저장소와 연동하여 자동 배포가 가능합니다.
