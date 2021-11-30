import {
  REMOVE_ITEM_SUCCESS,
  ADD_ITEM_SUCCESS,
  AUTHENTICATE_SUCCESS,
  FETCH_SUCCESS,
} from 'redux/actionsTypes';

const initialState = {
  userID: '615c451b1254a51694927019',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          // eslint-disable-next-line no-underscore-dangle
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;

/*
 notes: [
    {
      id: 1,
      title: 'React on my mind',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
    },
    {
      id: 2,
      title: 'Wish you React',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
    },
    {
      id: 3,
      title: 'You gave React a bad name',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
    },
    {
      id: 4,
      title: 'Is it React you looking for?',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
    },
    {
      id: 5,
      title: 'You it React bad gave for?',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      ],
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
    },
    {
      id: 4,
      title: 'Is it React you looking for?',
      content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus',
        'tempora quibusdam natus modi tempore esse adipisci',
        'dolore odit animi',
      ],
    },
  ],
  */
