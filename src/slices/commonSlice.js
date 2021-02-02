import { createSlice } from '@reduxjs/toolkit';

export const CommonTypes = {
  IS_MODAL_OPEN: false
}

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isModalOpen: CommonTypes.IS_MODAL_OPEN
  },
  reducers: {
    toggleModal (state, action) {
      return {
        ...state,
        isModalOpen: action.payload
      }
    }
  }
})

export const { toggleModal } = commonSlice.actions;

export const selectIsModalOpen = (state) => state.common.isModalOpen;

export default commonSlice.reducer;
