import { Route, Routes } from 'react-router-dom'
import MainScreen from '../../main-screen/main.screen';
import AuthScreen from '../../auth/auth.screen';
import NavigationBar from '../navbar/navbar';
import ProtectedRoute from './protected.route';



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth' element={<AuthScreen />} />

            <Route path='/' element={
                <ProtectedRoute>
                    <div className='w-full h-full pb-0 md:pb-4 max-w-5xl flex flex-col gap-4 relative'>
                        <NavigationBar />
                        <MainScreen />
                    </div>
                </ProtectedRoute>
            } />
        </Routes>
    )
}

export default AppRouter;