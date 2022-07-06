import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							{' '}
							<Header /> <Login />
						</>
					}
				/>
				<Route
					path='/home'
					element={
						<>
							{' '}
							<Header /> <Home />
						</>
					}
				/>
				<Route
					path='/detail/:id'
					element={
						<>
							{' '}
							<Header /> <Detail />
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
