import { combineReducers } from 'redux';

// Reducers
import { starshipsReducer as starships } from '../bus/starships/reducer';

export const rootReducer = combineReducers({
    starships,
});

//ts
export type AppState = ReturnType<typeof rootReducer>;
