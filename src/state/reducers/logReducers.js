const logReducers=(logstatus, action)=>{
    if(action.type==='logIn'){
        return (logstatus,
            console.log({logstatus})
        );
    }
    else if(action.type==='logOut'){
        return (logstatus,
            console.log({logstatus})
        );
    }
    else{
        return logstatus;
    }
};

export default logReducers;