import React, { Fragment } from 'react';
import { Button } from 'antd';

const items = [
  {
    key: 0,
    question: 'Which of these describe you best? ',
    answers: [
      {
          label: 'Comical',
          points: ['pug']
      },
      {
          label: 'Fitness Junkie',
          points: ['husky', 'shepherd']
      },
      {
          label: 'Social butterfly',
          points: ['corgi']
      },
      {
          label: 'Reserved but loyal',
          points: ['chihuahua']
      }
    ]
  },
  {
    key: 1,
    question: 'What traits would you like your dog to have?',
    answers: [
      {
          label: 'Super friendly and follows you around wherever you go',
          points: ['corgi']
      },
      {
          label: 'Alert and protective',
          points: ['shepherd']
      },
      {
          label: 'Lap dog',
          points: ['pug', 'chihuahua']
      },
      {
          label: 'Active',
          points: ['husky']
      }
    ]
  },
  {
    key: 2,
    question: 'You have some spare time, what do you want to do with your dog?',
    answers: [
      {
          label: 'Cuddle!',
          points: ['pug', 'chihuahua']
      },
      {
          label: 'Go to the park and play fetch!',
          points: ['husky', 'corgi', 'shepherd']
      },
      {
          label: 'Read a good book \n with your dog beside you.',
          points: ['pug', 'chihuahua']
      },
      {
          label: 'Go jogging with your dog',
          points: ['husky', 'shepherd']
      }
    ]
  },
  {
    key: 3,
    question: 'What size of dog do you prefer?',
    answers: [
      {
          label: 'Small',
          points: ['chihuahua']
      },
      {
          label: 'Medium',
          points: ['corgi', 'pug']
      },
      {
          label: 'Large',
          points: ['husky', 'shepherd']
      }
    ]
  },
  {
    key: 4,
    question: 'What kind of home do you have? ',
    answers: [
      {
          label: 'Apartment',
          points: ['corgi', 'chihuahua', 'pug']
      },
      {
          label: 'House',
          points: ['corgi', 'chihuahua', 'pug']
      },
      {
          label: 'House with a yard',
          points: ['corgi', 'chihuahua', 'pug', 'shepherd', 'husky']
      }
    ]
  },
  {
    key: 5,
    question: 'If you have kids at home, how old are they?',
    answers: [
      {
          label: 'Less than a year old',
          points: []
      },
      {
          label: '1-8 years old',
          points: ['husky']
      },
      {
          label: '8-12 years old',
          points: ['corgi','pug']
      },
      {
        label: 'I have no kids',
        points: ['corgi', 'chihuahua', 'pug', 'shepherd', 'husky']
      }
    ]
  },
  {
    key: 6,
    question: 'Will you be able to walk/exercise your dog everyday? If not, can somebody else do it for you?',
    answers: [
      {
          label: 'Yes',
          points: ['corgi', 'husky', 'shepherd', 'chihuahua']
      },
      {
          label: 'No',
          points: ['pug']
      }
    ]
  },
  {
    key: 7,
    question: 'Will you be able to get your dog regular check up?',
    answers: [
      {
          label: 'Yes',
          points: ['husky', 'chihuahua', 'pug']
      },
      {
          label: 'No',
          points: ['shepherd', 'corgi']
      }
    ]
  },
  {
    key: 8,
    question: 'When it comes to making your dog look good will you:',
    answers: [
      {
          label: 'Give him a bath',
          points: ['corgi', 'shepherd', 'husky', 'pug', 'chihuahua']
      },
      {
          label: 'Full groom at the groomers',
          points: []
      },
      {
          label: 'Full groom and buy \n him/her dog clothes',
          points: []
      }
    ]
  },
  {
    key: 9,
    question: 'What kind of fur parent will you be?',
    answers: [
      {
          label: 'The cuddler',
          points: ['corgi']
      },
      {
          label: 'Strict and consistent',
          points: ['chihuahua', 'pug']
      },
      {
          label: 'The pack leader',
          points: ['shepherd', 'husky']
      }
    ]
  }

]

class QuizItem extends React.Component {
    render () {
        return (
            <Fragment>
            <h2 style={{ color: '#fff' }}>Q{items[this.props.currentQuestion].key + 1}. {items[this.props.currentQuestion].question}</h2>
            {
                items[this.props.currentQuestion].answers.map((item,i) => (
                <Fragment>
                    <Button key={i}
                            type='primary'
                            shape='round'
                            size='large'
                            onClick={this.props.nextQuestion}
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
}

export default QuizItem;