// import Versions from './components/Versions'
import '../assets/App.css'

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const handleBarCode = (e) => {
    console.log(e.target.value)
  }
  // const handleCheckBox = () => {
  // }
  const handleLength = (e) => {
    console.log(e.target.value)
  }
  return (
      <div className='content'>
        <div className='scann'>
          <label htmlFor="machine" >BARCODE</label>
          <input type="text" onChange={handleBarCode} />        
        </div>
        <div className='loss_typ'>
          <div className='checkbox'>
            <label htmlFor="machine">MACHINE</label>
            <input type="checkbox" name="machine" id="" onChange={handleBarCode}/>    
          </div>
          <div className='checkbox'>
            <label htmlFor="sample">SAMPLE</label>
            <input type="checkbox" name="sample" id="" onChange={handleBarCode} />
          </div>
          <div className='checkbox'>
            <label htmlFor="maintenance">MAINTENANCE</label>
            <input type="checkbox" name="maintenance" id="" onChange={handleBarCode}/>
          </div>
        </div>
        <div className='scann'>
          <label htmlFor="maintenance">WIRE LENGTH</label>
          <select name="cars" id="length" onChange={handleLength}>
            <option value="WIRE_1">WIRE 1</option>
            <option value="WIRE_2">WIRE 2</option>
            <option value="WIRE_3">WIRE 3</option>
            <option value="WIRE_4">WIRE 4</option>
          </select>       
        </div> 
    </div>
  )
}

export default App

