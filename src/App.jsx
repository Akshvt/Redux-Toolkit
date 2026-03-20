import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5 } from './redux/slices/counterSlice'
import Navbar from './components/Navbar'

const App = () => {

  const dispatch = useDispatch()
  const num = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          dispatch(increment())
        }}>
        increment
      </button>

      <button onClick={() => {
        dispatch(decrement())
      }}>decrement</button>

      <button onClick={() => {
        dispatch(incrementBy5())
      }}>increment by 5</button>

      <Navbar />
    </div>
  )
}

export default App