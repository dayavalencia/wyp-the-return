import React, { Fragment } from 'react';
import { Button } from 'antd';

const items = [

  {
    key: 0,
    question: 'Which of these describe you best? ',
    answers: [ 
      { 
          label: 'Comical',
          points: 1234
      },
      { 
          label: 'Fitness Junkie',
          points: 1234
      },
      { 
          label: 'Social butterfly',
          points: 1234
      },
      { 
          label: 'Reserved but loyal',
          points: 1234
      }        
    ]
  },
  {
    key: 1,
    question: 'What traits would you like your dog to have?',
    answers: [ 
      { 
          label: 'Super friendly and follows you around wherever you go',
          points: 1234
      },
      { 
          label: 'Alert and protective',
          points: 1234
      },
      { 
          label: 'Lap dog',
          points: 1234
      },
      { 
          label: 'Active',
          points: 1234
      }        
    ]
  },
  {
    key: 2,
    question: 'You have some spare time, what do you want to do with your dog?',
    answers: [ 
      { 
          label: 'Cuddle!',
          points: 1234
      },
      { 
          label: 'Go to the park and play fetch!',
          points: 1234
      },
      { 
          label: 'Read a good book \n with your dog beside you.',
          points: 1234
      },
      { 
          label: 'Go jogging with your dog',
          points: 1234
      }        
    ]
  },
  {
    key: 3,
    question: 'What size of dog do you prefer?',
    answers: [ 
      { 
          label: 'Small',
          points: 1234
      },
      { 
          label: 'Medium',
          points: 1234
      },
      { 
          label: 'Large',
          points: 1234
      }       
    ]
  },
  {
    key: 4,
    question: 'What kind of home do you have? ',
    answers: [ 
      { 
          label: 'Apartment',
          points: 1234
      },
      { 
          label: 'House',
          points: 1234
      },
      { 
          label: 'House with a yard',
          points: 1234
      }       
    ]
  },
  {
    key: 5,
    question: 'If you have kids at home, how old are they?',
    answers: [ 
      { 
          label: 'Less than a year old',
          points: 1234
      },
      { 
          label: '1-8 years old',
          points: 1234
      },
      { 
          label: '8-12 years old',
          points: 1234
      },
      { 
        label: 'I have no kids',
        points: 1234
      }        
    ]
  },
  {
    key: 6,
    question: 'Will you be able to walk/exercise your dog everyday? If not, can somebody else do it for you?',
    answers: [ 
      { 
          label: 'Yes',
          points: 1234
      },
      { 
          label: 'No',
          points: 1234
      }     
    ]
  },
  {
    key: 7,
    question: 'Will you be able to get your dog regular check up?',
    answers: [ 
      { 
          label: 'Yes',
          points: 1234
      },
      { 
          label: 'No',
          points: 1234
      }     
    ]
  },
  {
    key: 8,
    question: 'When it comes to making your dog look good will you:',
    answers: [ 
      { 
          label: 'Give him a bath',
          points: 1234
      },
      { 
          label: 'Full groom at the groomers',
          points: 1234
      },
      { 
          label: 'Full groom and buy \n him/her dog clothes',
          points: 1234
      }          
    ]
  },
  {
    key: 9,
    question: 'What kind of fur parent will you be?',
    answers: [ 
      { 
          label: 'The cuddler',
          points: 1234
      },
      { 
          label: 'Strict and consistent',
          points: 1234
      },
      { 
          label: 'The pack leader',
          points: 1234
      }          
    ]
  }

]

function QuizItem (props) {
  return (
    <Fragment>
      <h2 style={{ color: '#fff' }}>Q{items[props.currentQuestion].key + 1}. {items[props.currentQuestion].question}</h2>
      {
        items[props.currentQuestion].answers.map((item,i) => (
          <Fragment>
            <Button key={i} 
                    type='primary' 
                    shape='round' 
                    size='large'
                    onClick={props.nextQuestion}
                    style={{ whiteSpace: 'normal' }}
            >
              {item.label}
            </Button>
            <br/>
          </Fragment>
        ))
      }
      <br />
    </Fragment>
  )
}

export default QuizItem;