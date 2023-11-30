import { Route, Routes } from 'react-router-dom'
import MainScreen from '../../main-screen/main.screen';
import AuthScreen from '../../auth/auth.screen';
import NavigationBar from '../navbar/navbar';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth' element={<AuthScreen />} />

            <Route path='/' element={<div className='w-full h-full pt-4 pb-4 max-w-5xl flex flex-col gap-4 relative'>
                    <NavigationBar />
                    <MainScreen />
                </div>
            } />
        </Routes>
    )
}

export default AppRouter;