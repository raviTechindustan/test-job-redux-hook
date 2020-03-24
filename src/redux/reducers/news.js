const initialState = {
    news : [],
    loading:false,
    error:''
}

export default function (state= {...initialState},action) {
    switch (action.type) {
        case "GETNEWS_REQUEST":
            return {...state,loading:true,error:''}
        case "GETNEWS_SUCCESS":
            return {...state,loading:false,news:action.news}
        case "GETNEWS_FAILED":
            return {...state,loading:false,error:action.error}
        default:
            return {...state}
    }
}