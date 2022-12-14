import { 
  CHANGE_SEARCH_FIELD ,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants.js";

import * as reducers from './reducers';


describe('searchRobots reducer', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots('', {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({searchField: 'abc'})
  })
})

describe('requestRobots reducer', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      robots: [],
      isPending:  true,
      error: ''
    })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id:'123',
        name:'Jane',
        email: 'jane@gmail.com'
      }]

    })).toEqual({
      robots: [{
        id:'123',
        name:'Jane',
        email: 'jane@gmail.com'
      }],
      isPending: false,
      error: ''
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'Noooooo!!!'

    })).toEqual({
      robots: [],
      isPending: false,
      error: 'Noooooo!!!'
    })
  })
})