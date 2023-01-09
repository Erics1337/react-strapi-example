import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import AuthProvider from '../context/AuthProvider'
import { Col, Layout, Row } from 'antd'

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html>
				<head />
				<body>
					<Navbar />
					{children}
					<Footer />
				</body>
			</html>
		</AuthProvider>
	)
}
