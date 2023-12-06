import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//loading
import Loading from './Components/Loading/Loading';

// Translation
import './Services/Translations/Translation.tsx';

// React Router
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Suspense fallback={<Loading />}>
      <BrowserRouter basename={'/'}>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.Fragment>,
)
