import { useDispatch } from 'react-redux'
import {createStore} from 'redux'

const dispatch = useDispatch()

const decrementHandler = ()=> {
    dispatch{type: 'decrement'}
}