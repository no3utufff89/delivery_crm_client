import { createSlice } from "@reduxjs/toolkit";
import { SettingsType } from "../../types/types";


const initialState: SettingsType = {
  isActive: true,
  currentPageTitle: undefined,
  defaultText: {
    title: 'Welcome to CRM App',
    text: 'This is a simple CRM application, made with React(TypeScript) and Redux.'
  },
  isModalOpen: false,
    
}
const settingsSlice = createSlice({
  name:'settings',
  initialState: initialState,
  reducers: {
    remove: (state) => {
      state.isActive = false;
    },
    changeModalStatus: (state) => {
      state.isModalOpen =!state.isModalOpen;
    },
    setCurrentPageTitle: (state, action) => {
      state.currentPageTitle = action.payload;
    }
  },
   selectors: {
     isModalActive: (state) => state.isModalOpen,
     getCurrentPageTitle: (state) => state.currentPageTitle,
     getDefaultText: (state) => state.defaultText,
   }
})
export const { isModalActive, getCurrentPageTitle, getDefaultText} = settingsSlice.selectors;
export const {remove, setCurrentPageTitle, changeModalStatus} = settingsSlice.actions;
export default settingsSlice.reducer;