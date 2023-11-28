import '/public/assets/css/Style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Header from './components/Header.jsx'

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/Home" element={<Home />} />
					<Route exact path="/Blog" element={<Blog />} />
				</Routes>
			</Router>  
		</>
	)
}

export default App
