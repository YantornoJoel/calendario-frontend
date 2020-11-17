import { types } from '../types/types';

// {
//     id: new Date().getTime,
//     title: 'Cumpleaños de ciclón',
//     start: moment().toDate(), //Sinonimo de new Date()
//     end: moment().add(2, 'hours').toDate(),
//     notes: 'Dormir',
//     user: {
//         _id: '123',
//         name: 'Joel'
//     }
// }


const initialState = {
    events: [],
    activeEvent: null
};



export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }


        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }


        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }


        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            };


        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
                activeEvent: null
            };


        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }


        case types.eventLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }

}