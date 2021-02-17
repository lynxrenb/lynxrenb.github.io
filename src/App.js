import './stylesheets/app.scss';

import Toggle from './components/Toggle';
import Content from './components/Content';
import Particles from './components/Particles';

export default function App() {
    return (
        <div className='app'>
            <Toggle />
            <Content />
            <Particles />
        </div>
    )
}
