
import './App.css';
import Profilesidebar from './Psidebar';
import PRecentActivities from './PRecentActivities';
import UserBio from './UserBio';

function App() {
  return (
    <div className="App">
     <Profilesidebar/>
   
     <div className="flex-container">
      <UserBio/>
     <PRecentActivities/>
     </div>
    
    </div>
  );
}

export default App;
