import { Route, Routes } from 'react-router-dom'
import MainScreen from '../../main-screen/main.screen';
import AuthScreen from '../../auth/auth.screen';
import UsersScreen from '../../user-screens/admin-screen/users.screen';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth' element={<AuthScreen />} />
                    
            <Route path='/users' element={<UsersScreen />} />

            <Route path='/' element={<MainScreen />} />
        </Routes>
    )
}

export default AppRouter;