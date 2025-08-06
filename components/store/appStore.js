import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './activeTabSlice'
import dashboardReducer from './dashboardSlice'
import profileDataReducer from './profileDataSlice';


const appstore = configureStore({
  reducer: {
    tab: tabReducer,
    dashboard: dashboardReducer,
    profileData: profileDataReducer,

  }
})

export default appstore
