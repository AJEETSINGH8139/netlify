import logo1 from './assets/Z1.png'
import logo2 from './assets/S1.png'
import logo3 from './assets/V1.png'
import logo4 from './assets/G1.png'
function App() {
  return (
    <div className="App">

      <div className='left-side'>
        <div className="lside-top">
          <img src={logo1} alt="image Z"/>
        </div>
        <div className="lside-buttom">
          <span className="zip">ZIP</span><span className="input-mess">Messager</span>
          <br/>
          <div className='buttom-logo'>
          <img className='logo3' src={logo3} alt="image Z"/>
          <img className='logo2' src={logo2} alt="image Z"/>
          <img className='logo4' src={logo4} alt="image Z"/>
          </div>
          
        </div>
      </div>

      <div className='main'>
        <div className="message">
        <h1>Message</h1>
        <p className="input-mess">Enter Message Bellow</p>
        </div>
        
        <div className='box'></div>
      </div>
      <div className='right-side'>
        <button className="send">SEND</button>
        <button className="cancel">CANCEL</button>
      </div>
    </div>
  );
}

export default App;
