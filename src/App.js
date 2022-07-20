
import './App.css';
import LeftNav from './components/LeftNav/index';
// import Header from './components/RightNav/header';
import RightNav from './components/RightNav/index';
function App() {
  return (

    <div className='workspace'>
      <div className='left-side'>
        <LeftNav />
      </div>
      <div className='right-side'>
        <RightNav />
      </div>
    </div>

  );
}

export default App;
