import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return (



            <div className={`header-container-${theme}`}>
                {theme === 'nature' && (
                    <div className="background-image"></div>
                )}
                <div className="content">
                    <h1>Teja Sayya</h1>
                    {theme === 'nature' && <p>Dev's</p> }
                </div>
            </div>


            
            /*
            <header className="custom-header">
                <h1>Welcome to my React App!</h1>
                <p>Unleash your creavitity</p>

            </header>
            */

            
        );
    }
}

export default Header;
