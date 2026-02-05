# Backend API

## Overview
- Node + Express 기반 REST API 서버
- PostgreSQL 사용 예정
- Docker 컨테이너 배포 예정
- Clean Architecture 구조 적용
- 서비스 소개 데이터 제공 API 및 관리자(백오피스) API 구축

## Planned Features
- 서비스 소개 데이터 조회용 REST API
- 관리자 로그인
- 관리자용 서비스 데이터 변경 API

## Tech Stack
- Node.js
- Express
- PostgreSQL
- TypeScript
- Docker

## Project Structure
- `src/config` 환경 및 공통 설정
- `src/application` 유스케이스
- `src/domain` 엔티티 및 리포지토리 인터페이스
- `src/infrastructure/http` 컨트롤러/라우트/미들웨어
- `src/app.ts` 미들웨어 및 라우트 구성
- `src/server.ts` 서버 부트스트랩
- `dist` 빌드 산출물
- `tests` 테스트 코드(추가 예정)

## Scripts
- `npm run dev` — tsx로 개발 서버 실행
- `npm run build` — TypeScript 빌드
- `npm start` — 빌드 산출물 실행
- `npm test` — 테스트(추후 변경 예정)

## Notes
- 환경 변수 스키마는 `src/config/env.ts`에서 관리
- 테스트는 `tests/` 디렉터리에서 관리 예정
