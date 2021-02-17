import './stylesheets/app.scss';

import Toggle from './components/Toggle';
import Particles from './components/Particles';

export default function App() {
    return (
        <div className='app'>
            <Toggle />
            <Particles />
        </div>
    )
}
