import './stylesheets/app.scss';

import Toggle from './components/Toggle';
import Content from './components/Content';
import Buttons from './components/Buttons';
import Particles from './components/Particles';

export default function App() {
    return (
        <div className='app'>
            <Toggle />
            <Content />
            <Buttons />
            <Particles />
        </div>
    )
}
