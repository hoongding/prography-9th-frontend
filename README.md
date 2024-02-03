# Propgraphy 9th Frontend 과제 - 장훈석

## 프로젝트 실행방법

### 1. git clone

프로젝트를 실행하기 전, 프로젝트를 clone 받습니다.

```bash
git clone https://github.com/hoongding/prography-9th-frontend.git
```

### 2. clone 받은 프로젝트로 이동하여 package를 install합니다.

```bash
npm install
```

### 3. 프로젝트를 실행시킵니다.

```bash
npm start
```

---

## 사용 기술

React + TypeScript

Tanstack Query, Context API

Styled Components

---

## 주요 구현 내용

1. 카테고리 ✅
   - 카테고리를 클릭 시, 카테고리별 음식 조회 API를 호출한 뒤 카테고리를 보여준다. ✅
   - 카테고리를 클릭하지 않으면 아무런 목록도 안보이게끔 한다. ✅
   - 선택한 카테고리와 선택하지 않은 카테고리의 스타일을 구분한다. ✅
   - 카테고리는 복수 선택이 가능하며, 선택된 카테고리를 다시 클릭시, 카테고리 선택은 제외된다. ✅
2. 음식 목록 불러오기 ✅
   - 선택된 카테고리에 해당하는 음식 목록을 API를 호출하여 불러온다. ✅
   - 음식목록은 `2개씩보기`, `4개씩 보기` 로 보여준다. ✅
   - Mobile버전에서는 하나의 행에 한 개의 카드만 보여준다. ✅
   - 음식 목록은 무한 스크롤로 하나의 페이지당 20개씩 보여지게 구현한다. ✅
3. 필터링 ✅
   - 필터링은 최신등록순, 알파벳 오름차순, 내림차순으로 필터링 할 수 있다. ✅
   - 사용자가 아무것도 선택하지 않았을 시, 기본 필터링은 최신등록순과 4개씩 보여주기로 한다. ✅
4. 쿼리스트링 ✅
   - 사용자가 쿼리스트링으로 `?category=chicken,Seafood&filter=ASC` 로 접근 시, 해당하는 카테고리와 필터링 조건을 적용해서 보여지게 한다. ✅
5. 공통 컴포넌트
   - 공통 컴포넌트 구현 시, Compound Pattern 을 사용해서 구현 ✅
   - 카테고리 구현 시, Chip 컴포넌트를 공통 컴포넌트로 구현하여 적용. ✅
   - 필터링 선택 컴포넌트 구현 시 , DropDown 컴포넌트를 공통 컴포넌트로 구현하여 적용. ✅
6. Filtering & 음식 목록 상태 관리
   - 필터링과 음식목록 상태관리는 Context API를 사용해서 상태관리. ✅
