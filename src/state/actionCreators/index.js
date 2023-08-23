export const logIn=(status)=>{
    return(dispatch)=>{
        dispatch({
            type:'logIn',
            payload:status
        })
    }
};

export const logOut=(status)=>{
    return(dispatch)=>{
        dispatch({
            type:'logOut',
            payload:status
        })
    }
};

