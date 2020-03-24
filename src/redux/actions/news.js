
import {
    getNewsAPI,
  } from '../api/getNews';
  
  
  export function getNews (data) {
  
    return (dispatch) => {
      dispatch({
        type: 'GETNEWS_REQUEST'
      })
  
      return new Promise((res, rej) => getNewsAPI().then(success => {
          dispatch({
          type: 'GETNEWS_SUCCESS',
          news: success
        })
        return res(success);
      }).catch(error => {
        dispatch({
          type: 'GETNEWS_FAILED'
        })
        return rej(error)
      }))
    }
  }