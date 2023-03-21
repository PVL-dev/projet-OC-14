import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateEmployee from './pages/CreateEmployee';
import Employees from './pages/Employees';

function App() {
	return (
		<div id="App">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/home" element={<CreateEmployee />} />
					<Route path="/employees" element={<Employees />} />
					<Route path="*" element={<CreateEmployee />} />
				</ Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

