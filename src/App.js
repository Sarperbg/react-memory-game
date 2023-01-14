import GameBoardPage from './pages/GameBoardPage'
import LoginPage from './pages/LoginPage'
import GameSettingsPage from './pages/GameSettingsPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          <Route  path="/"element={<LoginPage/>}/>
          <Route  path="/GameBoardPage" element={<GameBoardPage/>}/>
          <Route  path="/GameBoardPage" element={<GameBoardPage/>}/>


        </Routes>
    </Router>

    </div>
  );
}

export default App;
