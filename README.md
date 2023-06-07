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

3. 인덱스 추가시 첫 에러
- TypeError: Cannot read properties of null (reading 'useContext') 
npm install react-bootstrap-validation --save 이걸 다운받아서 그럼. 기본 부스트랩 받으니 완료.
  3-1. 인덱스에는 state 사용 안하고 바로 더미데이터를 넣으려고 했다가, 나중에 API 재사용의 효용성을 높이기 위해 useEffect 제작했음.
  3-2. 이때 카테고리 이름이 중복되어 노출되는 것을 방지하기 위해 set 메소드를 사용하여 배열의 중복값 제거하고 새로운 배열을 생성하는 함수 제작.
  3-3. 그렇게 생성된 배열들의 카테고리만 뽑아내는 셀렉티드 카테고리 제작하여 state에 넣어주었다.

4. Quiz Difficulty
- 여기 역시 useEffect를 사용해서 데이터를 넣었다. 

5. 기본 구조 마무리 후, development 브랜치를 origin으로 푸쉬했다. 진작에 했었어야 했는데, 아직 깃허브 터미널 사용에 미숙하다.


  BuildQuizIndex
  DummyData
  development
  master
* quizPage
