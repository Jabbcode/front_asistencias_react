import { Outlet } from 'react-router-dom'

export const SubLayout = () => {
  return (
    <div className='px-4 pt-4'>
      <Outlet />
    </div>
  )
}
