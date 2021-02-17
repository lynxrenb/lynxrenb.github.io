import React from 'react';

import '../stylesheets/toggle.scss'

import Moon from '../icons/Moon'
import Sun from '../icons/Sun'

import Persistence from '../hooks/Persistence';

const Theme = () => {
    const key = 'theme'
    const darkDefault = true

    const [darkTheme, setTheme] = Persistence(key, darkDefault)

    React.useEffect(() => {
        darkTheme ?
            document.documentElement.classList.add('other') :
            document.documentElement.classList.remove('other')
    });

    return (
        <div>
            <main>
                <input id='toggle' name='toggle' type='checkbox' checked={darkTheme}
                    onChange={event => setTheme(event.target.checked)} />
                <label htmlFor='toggle' className='switch' id='switch'>
                    {darkTheme ? <Moon /> : <Sun />}
                </label>
            </main>
        </div>
    )
}

class Toggle extends React.Component {
    render() {
        return (
            <Theme />
        )
    }
}

export default Toggle;
