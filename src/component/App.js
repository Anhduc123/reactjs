import React, { Component } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetalPanel";


const App = ({currentUser}) => (
  <Grid columns="equal" className="app" style={{ background: '#eee'}}>
    <ColorPanel />
    <SidePanel currentUser={currentUser} />
    <GridColumn style={{ marginLeft: 320}}>
    <Messages />
    </GridColumn>
<GridColumn width={4}>
<MetaPanel />
</GridColumn>

  </Grid>
)
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps) (App);
