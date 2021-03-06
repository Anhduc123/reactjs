import React from 'react';
import { Menu } from 'semantic-ui-react';
import Userpanel from './UserPanel';
class SidePanel extends React.Component{
    render() {
        const { currentUser} = this.props;
        return (
<Menu
size="large"
inverted
fixed="left"
vertical
style={{background: '#4c3c4c', fontSize: '1.2rem'}}
>
<Userpanel currentUser={currentUser}/>
</Menu>
        )
    }
}

export default SidePanel;