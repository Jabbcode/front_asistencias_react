import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div className='px-4 pt-4'>
				<Outlet />
			</div>
		</div>
	)
}
