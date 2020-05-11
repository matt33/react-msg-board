// a library to wrap and simplify api calls

import apisauce from 'apisauce'
import NetworkActivityActions from '../redux/networkRequestsRedux'

const create = (dispatch) => {
  const baseURL = 'http://localhost:8080/api'
  const api = apisauce.create({
    baseURL,
    timeout: 20000,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type':  'application/json'
    }
  })

  function removePendingRequest({config: {url, method}}) {
    const requestCode = `${method}-${url}`
    dispatch(NetworkActivityActions.requestFinished(requestCode))
  }

  function addPendingRequest({url, method}) {
    const requestCode = `${method}-${baseURL}${url}`
    dispatch(NetworkActivityActions.requestStarted(requestCode))
  }

  api.addMonitor(removePendingRequest)
  // add global handler of every api call for main loader indicator
  api.addRequestTransform(addPendingRequest)

  // api calling functions
  const fetchMessages = (params) => api.get('/messages', {_sort: 'id', _order: 'desc', ...params})
  const fetchColors = (params) => api.get('/colors', {_sort: 'id', _order: 'desc', ...params})
  const postMessage = (content, color) => api.post('/messages', {content, color})

  // public interface
  return {
    fetchMessages,
    fetchColors,
    postMessage
  }
}

export default {create}
