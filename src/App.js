import logo from './logo.svg';
import './App.css';
import { Translation } from 'react-i18next'

function App() {

  const changeLanguage = code => e => {
    localStorage.setItem('language', code)
    window.location.reload() 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Translation>
          {(t) => <p>{t('sample.title')}</p>}
        </Translation>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <button onClick={changeLanguage('en')}>
            EN
          </button>
          <button onClick={changeLanguage('mm')}>
            MM
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
