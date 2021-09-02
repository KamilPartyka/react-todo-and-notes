const initialState = {
  notes: [
    {
      id: 1,
      title: 'React on my mind',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
      created: '5 days',
    },
    {
      id: 4,
      title: 'Is it React you looking for?',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
      created: '10 days',
    },
    {
      id: 5,
      title: 'You it React bad gave for?',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
      created: '11 days',
    },
  ],
  todos: [
    {
      id: 1,
      title: 'React on my mind',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Delectus tempora quibusdam natus modi tempore esse adipisci',
        'dolore odit animi',
      ],
      created: '1 day',
    },
    {
      id: 2,
      title: 'Wish you React',
      content: [
        'Lorem ipsum dolor sit',
        'amet consectetur adipisicing elit',
        'Delectus tempora quibusdam natus',
        'modi tempore esse adipisci',
        'dolore odit animi',
      ],
      created: '1 day',
    },
    {
      id: 3,
      title: 'You gave React a bad name',
      content: [
        'Lorem ipsum dolor',
        'sit amet consectetur adipisicing',
        'Delectus',
        'tempora quibusdam natus modi tempore esse adipisci',
        'dolore odit animi',
      ],
      created: '5 days',
    },
    {
      id: 4,
      title: 'Is it React you looking for?',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus',
        'tempora quibusdam natus modi tempore esse adipisci',
        'dolore odit animi',
      ],
      created: '10 days',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
