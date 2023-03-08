import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        toast: []
    },
    reducers: {
        resSendMail: (state, action) => {
            // Ensuite nous integrons nos data dans le state github
            state.toast = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { resSendMail } = servicesSlice.actions

/* ************************************
 * Ici nous pouvons stocker nos actions
 * ************************************ */

export const sendMail: any = (_data: any) => async (dispatch: any) => {
    console.log('sendMail 1', _data)
    // // Ici nous utilisons axios afin de call l'API
    const res = await axios.get(`/api/mail`)
    console.log('sendMail 2', res.data)
    // Ensuite on dispatch notre resultat avec 
    dispatch({ type: 'services/resSendMail', payload: res.data })
};

// export const maFunction = () => (dispatch) => {
//     Faire des choses ...
//     Envoyer le résultat dans dispatch afin de trouver le bon setter (kelkechoseSlice.reducers)
//     dispatch({ type: 'leStore/leReducer', payload: data })
// };

export default servicesSlice.reducer