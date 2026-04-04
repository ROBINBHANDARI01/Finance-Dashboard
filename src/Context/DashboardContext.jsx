import {Children, createContext ,useContext } from "react"
import {user , summaryCards, balanceTrend} from "../data/mockData"

const DashboardContext = createContext();

export function DashboardProvider({ children }){
    return(
        <DashboardContext.Provider value={{user, summaryCards, balanceTrend}}>
        {children}
        </DashboardContext.Provider>  
     )
}

export function useDashboard(){
    return useContext(DashboardContext);
}
