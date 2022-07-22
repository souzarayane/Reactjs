import SocialNetwork from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/avatar.png'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Rayane Souza" />
            <p className="title">Desenvolvedora</p>
            <SocialNetwork />
            <InformationContainer />
            <a href="#" className="btn">Download Currículo</a>
        </aside>
    )
}

export default Sidebar