import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideBar from './components/Navigation/sidebar/sidebar.js';
import BackDrop from './components/Navigation/Backdrop/Backdrop.js';
import Header from './components/Header/header';
import Caraousel from './components/Carousel/caraousel'
import Home from './components/Collections/collections';
import Footer from './components/Footer/footer';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './components/Images/watches.jpeg'

  class App extends Component {

    state = {
      sidebarOpen:false
    };
    sidebarToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sidebarOpen: !prevState.sidebarOpen}
      });
    };

    backdropClickHandler =  () => {
      this.setState({sidebarOpen :false});
    };
      

    render()
    {
      let sidebar;
      let backdrop;

      if(this.state.sidebarOpen)
      {
        sidebar=<SideBar />;
        backdrop = <BackDrop click={this.backdropClickHandler}/>;
      }
    return (
      <div>
      <div style={{height:'100%'}}>
      <Toolbar  sidebarClickHandler ={this.sidebarToggleClickHandler}/>
        {sidebar}
        {backdrop}
      </div>
      <BrowserRouter>
      <br /><br /><br />
      <Caraousel /> 
      <br /><br /><br />
      <div className="container">
      <div className="row"><Home/></div>
      </div>     
      </BrowserRouter>
      <Footer />
      </div>
    );
    }
  }


export default App;