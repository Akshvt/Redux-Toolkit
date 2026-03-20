
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeToDark, changeThemeToLight } from '../redux/slices/themeSlice'

const Navbar = () => {

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)


    return (
        <div>
            <h1>Current Theme is : {theme}</h1>

            <button onClick={()=>{
                dispatch(changeThemeToLight())
            }}>Change Theme to Light</button>
            <button
            onClick={()=>{
                dispatch(changeThemeToDark())

            }}
            >Change Theme to Dark</button>
        </div>
    )
}

export default Navbar