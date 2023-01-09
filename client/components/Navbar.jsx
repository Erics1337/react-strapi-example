'use client'

import Link from 'next/link'
import { removeToken } from '../helpers'
import { useAuthContext } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { Button, Space } from 'antd'

const Navbar = () => {
	const router = useRouter()
	const { user } = useAuthContext()

	const handleLogout = () => {
		removeToken()
		router.push('/')
	}

	return (
		<header className='sticky top-0 z-10 text-gray-600 bg-white shadow-lg body-font'>
			<div className='container flex flex-row flex-wrap items-center justify-between p-5 mx-auto'>
				<div className='flex items-center font-medium text-indigo-500'>
					<span className='ml-1 text-xl text-center'>Secure Job</span>
				</div>
				<nav className='flex flex-wrap items-center justify-center text-base md:ml-auto'>
					{user ? (
						<>
							<Link href='/'>
								<a className='mr-5 underline hover:text-gray-900 underline-offset-2 decoration-2 decoration-indigo-500'>
									Home
								</a>
							</Link>
							<Link href='/jobs'>
								<a className='mr-5 hover:text-gray-900'>Jobs</a>
							</Link>
							<a
								target={'_blank'}
								href='https://github.com/TreciaKS/secure-job'
								className='mr-5 hover:text-gray-900'>
								Github
							</a>
							<Button
								className='auth_button_login'
								href='/profile'
								type='link'>
								{user.username}
							</Button>
							<Button
								className='auth_button_signUp'
								type='primary'
								onClick={handleLogout}>
								Logout
							</Button>
						</>
					) : (
						<>
							<Button
								className='auth_button_login'
								href='/signin'
								type='link'>
								Login
							</Button>
							<Button
								className='auth_button_signUp'
								href='/signup'
								type='primary'>
								SignUp
							</Button>
						</>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
