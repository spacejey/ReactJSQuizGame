const DummyData = [

  //! Art
  {
    category: 'Art',
    id: 1,
    questions: [
      {
        difficulty: 'Easy',
        question: 'Who painted the \'Mona Lisa\'?',
        answerOptions: [
          { answerText: 'Leonardo da Vinci', isCorrect: true },
          { answerText: 'Vincent van Gogh', isCorrect: false },
          { answerText: 'Pablo Picasso', isCorrect: false }
        ],
      },
      {
        difficulty: 'Medium',
        question: 'Which artist is associated with the \'Campbell\'s Soup Cans\' artwork?',
        answerOptions: [
          { answerText: 'Andy Warhol', isCorrect: true },
          { answerText: 'Jackson Pollock', isCorrect: false },
          { answerText: 'Henri Matisse', isCorrect: false }
        ],
      },
      {
        difficulty: 'Hard',
        question: 'Which artist created the \'Guernica\' painting?',
        answerOptions: [
          { answerText: 'Pablo Picasso', isCorrect: true },
          { answerText: 'Edvard Munch', isCorrect: false },
          { answerText: 'Gustav Klimt', isCorrect: false }
        ],
      }
    ],
  },


  //! Fashion
  {
    category: 'Fashion',
    id: 2,
    questions: [
      {
        difficulty: 'Easy',
        question: 'Who is the founder of the fashion brand \'Dior\'?',
        answerOptions: [
          { answerText: 'Ralph Lauren', isCorrect: false },
          { answerText: 'Giorgio Armani', isCorrect: false },
          { answerText: 'Christian Dior', isCorrect: true }
        ],
      },
      {
        difficulty: 'Medium',
        question: 'Which designer is known for the creation of the \'Little Black Dress\'?',
        answerOptions: [
          { answerText: 'Alexander McQueen', isCorrect: false },
          { answerText: 'Coco Chanel', isCorrect: true },
          { answerText: 'Vivienne Westwood', isCorrect: false }
        ],
      },
      {
        difficulty: 'Hard',
        question: 'Which fashion house is famous for its red-soled shoes?',
        answerOptions: [
          { answerText: 'Gucci', isCorrect: false },
          { answerText: 'Prada', isCorrect: false },
          { answerText: 'Christian Louboutin', isCorrect: true }
        ],
      }
    ],
  },


  //! Music
  {
    category: 'Music',
    id: 3,
    questions: [
      {
        difficulty: 'Easy',
        question: 'Which artist released the song \'Shape of You\'?',
        answerOptions: [
          { answerText: 'Justin Bieber', isCorrect: false },
          { answerText: 'Ed Sheeran', isCorrect: true },
          { answerText: 'Taylor Swift', isCorrect: false }
        ],
      },
      {
        difficulty: 'Medium',
        question: 'Who is the lead vocalist of the band \'Coldplay\'?',
        answerOptions: [
          { answerText: 'Chris Martin', isCorrect: true },
          { answerText: 'Bono', isCorrect: false },
          { answerText: 'Freddie Mercury', isCorrect: false }
        ],
      },
      {
        difficulty: 'Hard',
        question: 'Which singer\'s real name is Robyn Fenty?',
        answerOptions: [
          { answerText: 'Rihanna', isCorrect: false },
          { answerText: 'Beyoncé', isCorrect: false },
          { answerText: 'Rihanna', isCorrect: true }
        ],
      }
    ],
  }
]

export default DummyData
