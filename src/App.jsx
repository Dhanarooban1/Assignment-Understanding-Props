import './App.css';
import imageData from './Component/DataComponents'
import AppClass from './AppClass';

function App() {
  return(
    <div>
      <AppClass data={imageData} />
    </div>
  )
}

export default App;