# ReactJSQuizGame
TEST_Ogmi
Install
```npm run start```

1. 파일 스트럭쳐
- App에서 라우팅 할거다. 
- Home은 있으면 마음이 편하고 나중에 스트레치 골로 디자인 넣으려고 제작했다. 
- components폴더 만들고 그 안에 코드 파일 생성할거다.
- components폴더 안에는 라우팅 페이지인 main과 공통으로 쓰이는 데이터 폴더 common이 있다.
- main에는 QuizIndex가 첫번째로 라우팅 될거고, QuizDifficulty가 두번째, 마지막은 QuizPage이다.

2. 더미데이터 -> 구성 변경!
  2-1. 나중에 difficulty할 때 그냥 한 배열에 여러 오브젝트들로 나눠져있는 데이터 형식이 편하다는 것을 깨닫고 수정함.
  각 문제마다 다른 id를 가지고 있는 것이 더 말이 된다. 바보같이 왜 처음에 생각 못했지?

3. Quiz Index
- TypeError: Cannot read properties of null (reading 'useContext') 
npm install react-bootstrap-validation --save 이걸 다운받아서 그럼. 기본 부스트랩 받으니 완료.
  3-1. 인덱스에는 state 사용 안하고 바로 더미데이터를 넣으려고 했다가, 나중에 API 재사용의 효용성을 높이기 위해 useEffect 제작했음.
  3-2. 이때 카테고리 이름이 중복되어 노출되는 것을 방지하기 위해 set 메소드를 사용하여 배열의 중복값 제거하고 새로운 배열을 생성하는 함수 제작.
  (참고: https://jsikim1.tistory.com/227)
  3-3. 그렇게 생성된 배열들의 카테고리만 뽑아내는 셀렉티드 카테고리 제작하여 state에 넣어주었다.

4. Quiz Difficulty
- 에러 발생 Objects are not valid as a React child. If you meant to render a collection of children, use an array instead
useState에 기본값 배열로 주지 않고 있었다. 안그러면 undefined가 반환되기 때문에 타입이 배열이라면 꼭 초기화값으로 배열 넣어줘야 한다. 
4-1 여기 역시 quizCategory 값에 따라 데이터가 달라지도록 useEffect를 사용했다. quizCategory가 변경될 때마다 콜백함수가 실행될 것이다. 
4-2 try catch로 에러를 캐치하려고 했고
4-3 DummyData 배열에서 quizCategory와 일치하는 데이터를 필터링하여 selecQuizData 변수에 저장했다.
4-4 await로 비동기 작업이 완료될때까지 기다림.
4-5 state 변수애 값을 적용시켰다.
4-6 더미 데이터를 추가했더니 버튼이 문제수만큼 생김. 중복 난이도값을 없앴다. 그리고 버튼 클릭시 이동하는 경로도 깔끔하게 손봤다. params 을 사용하기 위해.


5. 기본 구조 마무리 후, development 브랜치를 origin으로 푸쉬했다. 진작에 했었어야 했는데, 아직 깃허브 터미널 사용에 미숙하다.

6. QuizDifficulty에서 Link로 이동된 QuizPage('/quizPage/${data.id}') 작업. data.id는 고유 퀴즈마다의 아이디이다.
6-1. useEffect를 사용하여 데이터 비동기로 불러오고
6-2. 랜더링 jsx 생성
  - currentQuiz state
  - score state
6-3. 데이터 불러오던 중 에러 발견. 계속 빈 배열이 반환된다는 점이었는데, id는 숫자로 인식해주어야 한다. Number(quizId) 추가. 또한 한가지 문제만 반환해야하니까 find를 사용했다.
6-4. 작성 완료
6-5. 더미데이터 추가했는데 발견한 사실, 못맞춰도 다음 문제로 넘어가야된다. 수정 시작. 일단 QuizDifficulty로 가서 중복 버튼좀 없애자. 중복값을 없앴더니 퀴즈스타트 페이지에 데이터 연동이 안됨. 
6-6. Params 값을 계속 잘못 받고 있었다. 4-6에서 루트 수정 후 다시 값 받아옴. 작동 완료.
6-7. 준비된 게임이 끝나면 모달창을 띄우기 위해 setIsGameOver state를 추가하고, handleNextQuiz에 넣었다.

7.QuizPage
7-1. 한 난이도에 여러개의 퀴즈를 넣으려고 더미데이터도 바꿈. 6-5에서 버튼 중복값 일어나길래 중복값 제거도 했음. 그런데 데이터가 들어오질 않음. useEffect에 필터가 잘못되어있는 것 같다. 아무래도 useParams를 잘못 이해하고 있는듯 하다. 모르는 점 찾음. 


  QuizIndex
  DummyData
  development
  master
  quizPage
