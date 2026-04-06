import {Children, createContext ,useContext } from "react"
import {user , summaryCards, balanceTrend, insights, transactions} from "../data/mockData"

const DashboardContext = createContext();

export function DashboardProvider({ children }){
    return(
        <DashboardContext.Provider value={{user, summaryCards, balanceTrend, insights, transactions}}>
        {children}
        </DashboardContext.Provider>  
     )
}

export function useDashboard(){
    return useContext(DashboardContext);
}
