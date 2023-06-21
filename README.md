# ReactJSQuizGame
https://quizzle-eye.netlify.app/

![Screenshot 2023-06-21 at 02 02 53](https://github.com/spacejey/ReactJSQuizGame/assets/100433202/e20f26b1-d24d-4c81-8eb8-5e1de284a5be)

This is a quiz game application designed to enhance your understanding of router-dom, useState, and useEffect. Users can select multiple choices and earn 10 points for each question.

## Install
Install
```npm run start```


## Wireframe
![wireframe](https://github.com/spacejey/ReactJSQuizGame/assets/100433202/d5a6766d-90f8-43ae-a00e-d7cec58c2d8e)


## 1. Folder Structure
- 1-1. I will handle routing in the app.
- 1-2. I created the Home page for convenience and plan to add a design for a stretching goal later.
- 1-3. I will create code files in the components folder.
- 1-4. Inside the components folder, there will be the main routing page called "main" and a common data folder used by all components.
- 1-5. The first routing in the main component will be QuizIndex, followed by QuizDifficulty, and the last one will be QuizPage.


## 2. Dummy Data

<img width="734" alt="2-1" src="https://github.com/spacejey/ReactJSQuizGame/assets/100433202/3ea86624-1660-4312-8a7f-b5f0a914f065">

- 2-1. Later, I realized that it would be more convenient to have the data structured as multiple objects in a single array when dealing with difficulties. It makes more sense for each question to have a different ID. I can't believe I didn't think of that in the beginning!


## 3. Quiz Index
- TypeError: Cannot read properties of null (reading 'useContext')
It seems that this error occurs after installing react-bootstrap-validation using npm install react-bootstrap-validation --save. After installing the basic Bootstrap, the installation should be complete.


<img width="841" alt="3-1" src="https://github.com/spacejey/ReactJSQuizGame/assets/100433202/fbfbeac1-f6aa-4287-85d4-4752a6a539a3">

- 3-1. Initially, I attempted to directly insert dummy data into the index without using state. However, I realized the benefits of reusability with API later on and created the useEffect hook.

- 3-2. To prevent duplicate category names from being displayed, I created a function that uses the set method to remove duplicate values from an array and generate a new array. (Reference: Link to the blog post)

- 3-3. Using the generated arrays, I created the selectedCategory state to extract only the categories and store them.


## 4. Quiz Difficulty
- Error: Objects are not valid as a React child. If you meant to render a collection of children, use an array instead.
- It seems that I didn't provide an initial value as an array for the useState. Without a default value, it would return undefined, so when the type is an array, it is important to initialize it with an array as the default value.

- 4-1. Similarly, I used useEffect to make the data change based on the quizCategory value. The callback function will be executed whenever quizCategory changes.

- 4-2. I attempted to catch errors using try-catch blocks.

- 4-3. I filtered the data in the DummyData array based on the matching quizCategory and stored it in the selectedQuizData variable.

- 4-4. I used await to wait for asynchronous operations to complete.

- 4-5. I applied the values to the state variables.

![4-6](https://github.com/spacejey/ReactJSQuizGame/assets/100433202/dd324fef-698e-4f08-86ad-3fd55b7352dc)

- 4-6. When I added the dummy data, buttons were created for each question. I removed duplicate difficulty values and also made improvements to the button's routing path for cleaner code using params.


## 6. QuizPage
- I worked on creating a Link in QuizDifficulty to navigate to QuizPage ('/quizPage/${data.id}'). The data.id represents the unique ID for each quiz.

- 6-1. I used useEffect to asynchronously fetch the data.

- 6-2. I created the JSX for rendering, including the currentQuiz state and the score state.

  
![6-3](https://github.com/spacejey/ReactJSQuizGame/assets/100433202/b7411bee-8271-41cc-b30b-10f5d3a64429)
![6-3 error](https://github.com/spacejey/ReactJSQuizGame/assets/100433202/4ad3c7ff-4d27-4a05-939b-bf481f242fdb)

- 6-3. I encountered an error while fetching the data. It was consistently returning an empty array. I realized that the id needed to be recognized as a number, so I added Number(quizId). Additionally, since only one question should be returned, I used find method.

- 6-4. Completed the implementation.


<img width="1052" alt="6-5" src="https://github.com/spacejey/ReactJSQuizGame/assets/100433202/7929be9c-04e1-40ce-8735-ce379869bacc">

- 6-5. After adding dummy data, I realized that even if a question is not answered correctly, the next question should be displayed. I began making modifications. First, in QuizDifficulty, I removed duplicate buttons. However, after removing the duplicates, the data was not being linked to the quiz start page. I also modified the dummy data to include multiple quizzes for one difficulty. However, the data was not being received. It seemed that there was an issue with the filter in the useEffect. It appears that I may have misunderstood useParams. I found some areas of uncertainty.


![6-6](https://github.com/spacejey/ReactJSQuizGame/assets/100433202/fcd498e0-39be-49c3-92b9-18e4425a66a2)

- 6-6. I realized that I was consistently receiving the wrong values for params. After making adjustments in step 4-6, I re-received the values. It is now working correctly. (Reference: Link to YouTube video)

- 6-7. To display a modal when the prepared game ends, I added the setIsGameOver state and included it in handleNextQuiz.


## 7. Modal
- 7-1. I created a Modal file using React Bootstrap. I passed the score as a parameter to display it in the content. I also added a button to return to the index and an "Again" button to go back to the previous page.


## Challenge
- Multiple-choice answer implementation:
  - In fact, I made the modifications after the submission period had ended. It turned out to be much simpler than I had anticipated, as I was able to solve it using Boolean values.
 
- Mobile responsiveness:
  - I designed the grid to accommodate mobile screen sizes.

- SASS effects:
  - I was able to create a much more impressive UI than I had envisioned with the help of wireframing. Especially the animation effect in the footer is something I had been wanting to try out for a while.
 
  
## Key Learnings/Takeaways
- My understanding of react-router-dom has greatly improved.
- I have become much more comfortable with the usage of useEffect and useState.
- I have enhanced server speed by utilizing async, await, and Promises for asynchronous operations.
- I have created questions in JSON format using ChatGPT.
