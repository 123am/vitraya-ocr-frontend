import { LOADER_START, LOADER_STOP } from "../reducers/common-reducer"


const commonActions = {
    loadOn:() => async(dispatch,_) => {
        try{
            dispatch(LOADER_START())
        } catch(error){
            
        }
    },
    loadOff:() => async(dispatch,_) => {
        try{
            dispatch(LOADER_STOP())
        } catch(error){
            
        }
    }

}


export default commonActions