import { createSlice } from '@reduxjs/toolkit';

export const CommonTypes = {
  IS_MODAL_OPEN: false
}

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isModalOpen: CommonTypes.IS_MODAL_OPEN,
    modals: {}
  },
  reducers: {
    toggleModal (state, action) {
      return {
        ...state,
        isModalOpen: action.payload
      }
    },
    setModals (state, action) {
      state.modals[action.payload.id] = action.payload.val;
    },
    toggleSpecificModal (state, action) {
      state.modals[action.payload.id] = action.payload.val;
    }
  }
})

export const { toggleModal, toggleSpecificModal, setModals } = commonSlice.actions;

export const selectIsModalOpen = (state) => state.common.isModalOpen;
export const selectModals = (state) => state.common.modals;

export default commonSlice.reducer;
