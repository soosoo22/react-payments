# react-payments

## Step1 핵심 기능

사용자가 올바른 카드 정보를 입력했는지 식별한다.

## 기능 구현 사항

### 카드 번호 입력 및 식별

- 사용자가 입력하는 카드 번호를 실시간으로 파악하여, Visa나 MasterCard에 해당하면 해당 브랜드의 로고를 UI에 표시한다.
  [x] 입력은 숫자만 가능하며, 유효하지 않은 번호 입력 시 피드백을 제공
- 카드 종류
  - Visa: 4로 시작하는 16자리 숫자
  - MasterCard: 51~55로 시작하는 16자리 숫자
  - Visa나 MasterCard가 아니면 이미지를 띄워주지 않는다.

### 카드 유효기간 입력

[x] 숫자만 입력 가능
[] 월과 년도를 지정된 범위 내에서만 입력할 수 있음

- 범위
  - 월: 1 ~ 12 (단, 24년도인 경우 4 ~ 12)
    [x] 년도: 24 ~ 29

### 카드 소유자 이름 입력

[x] 영문 대문자만 입력 가능
[x] 길이 제한: 띄어쓰기 포함 30자

### 실시간 프리뷰 업데이트

[x] 사용자의 카드 정보 입력에 맞춰 카드 프리뷰를 동시에 업데이트
[x] 첫 8자리는 숫자를 그대로 보여주고 마지막 8자리는 \* 으로 암호화
