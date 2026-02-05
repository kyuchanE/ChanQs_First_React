# TODO

## 리팩터링 필요 항목
- 유스케이스가 데이터 소스를 직접 소유: `src/application/use-cases/list-products.ts`의 MOCK 데이터는 인프라 레이어로 이동 필요
- 리포지토리 계약 부재: `src/domain/repositories`에 인터페이스 정의 필요
- 의존성 주입(Composition Root) 부재: 유스케이스가 구현체를 직접 만들지 않도록 `src/app.ts` 또는 별도 구성 파일에서 주입 필요
- (선택) 시스템 시간/프로세스 의존성 분리: `src/application/use-cases/check-health.ts`에서 시간/uptime provider 추상화 가능

## 작업 일정(예시, 2~3일 기준)

Day 1 — 구조 정리 및 계약 설계
- Domain: `ProductRepository` 인터페이스 정의 (`src/domain/repositories/product-repository.ts`)
- Domain 엔티티 export 정리 (`src/domain/entities/index.ts`)
- Application: 유스케이스 시그니처 변경 (repo 주입 방식)
- (선택) Application: 유스케이스 테스트 구조 초안

Day 2 — 인프라 구현 및 주입
- Infrastructure: InMemoryProductRepository 구현 (현재 MOCK 데이터 이동)
- Application ↔ Infrastructure 연결: `src/app.ts` 또는 별도 composition 파일에서 DI 구성
- Controller 수정: repo 주입된 유스케이스 호출로 전환

Day 3 — 정리 및 확장 기반
- (선택) HealthCheck provider 추상화
- (선택) PostgresRepository 스캐폴딩
- 문서 업데이트(README, 구조 설명)

## 디렉터리 역할
- `src/config`: 환경 변수 및 앱 공통 설정
- `src/application`: 유스케이스/서비스 로직(도메인 동작 조율)
- `src/domain`: 엔티티와 리포지토리 계약(인터페이스)
- `src/infrastructure/http`: Express 어댑터(컨트롤러, 라우트, 미들웨어)
- `src/app.ts`: 미들웨어 및 라우트 구성
- `src/server.ts`: HTTP 서버 부트스트랩
- `dist`: 빌드 산출물
- `tests`: 테스트 코드(추가 예정)
