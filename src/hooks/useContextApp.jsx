import { useContext } from "react";
import { AppContext } from "../contextProvider";


export default function useContextApp(){
    return useContext(AppContext)
}