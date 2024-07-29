import React from 'react';
import './app.css';
import Header from './components/Header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Emails from './components/Emails/Emails'
import Compose from './components/compose/Compose';
import { useState } from 'react';


const App = () => {

    const {click, onclick} = useState(false);

    const oncompose = () => { 
        onclick(true);
    }


    return (
        <div>
            <Header />

            <div className='box'>
                <Sidebar oncompose={oncompose}/> {/* use to pass the props to the sidebar component which is taking funciton as parameter */}
                <Emails />
            </div>

           {click && <Compose/>} 
            
        </div>

    )
};

export default App;