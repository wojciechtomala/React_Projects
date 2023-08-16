import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {

  const [html, setHTML] = useLocalStorage('html','');
  const [css, setCSS] = useLocalStorage('css','');
  const [js, setJS] = useLocalStorage('js','');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() =>{
      setSrcDoc(
        `<html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>`
      )
    }, 250) 
    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <>
      <div className='pane top-pane'>
        <Editor 
        language='xml' 
        displayName='HTML' 
        value={html} 
        onChange={setHTML}
        />
        
        <Editor 
        language='css' 
        displayName='CSS' 
        value={css} 
        onChange={setCSS}
        />
        
        <Editor 
        language='javascript' 
        displayName='JS' 
        value={js} 
        onChange={setJS}
        />
      </div>
      <div className='pane'>
        <iframe 
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
