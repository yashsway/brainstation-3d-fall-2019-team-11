import React from 'react';
import Modal from 'react-modal';
import ReactRotatingText from 'react-rotating-text';
import Background from './components/BackgroundEffect/BackgroundEffect';
import FlipSocialCard from './components/FlipSocialCard/FlipSocialCard';

import './App.scss';

import { Helmet } from 'react-helmet';
import Card from './components/Card/Card';
import close from './assets/Close-X.svg';
import marker  from './assets/marker-tag.svg';
import delhi from './assets/dehli -01.svg';
import fish from './assets/fish@2x.svg';
import fork from './assets/fork.svg';
import spinach from './assets/spinach.svg';
import kumar from './assets/kumar-samosa-wala.svg';
import sita from './assets/sita (1).svg';
import jung from './assets/jung-marker-info.svg'
import banner from './assets/banner.svg';
import card1 from './assets/card1.svg';
import card2 from './assets/card2.svg';
import card3 from './assets/card3.svg';
import top5modal from './assets/Top 5 Modal (1).svg';
import backgroundimg1 from './assets/brooke-lark-lcZ9NxhOSlo-unsplash.png';
import backgroundimg2 from './assets/spice.png'


class App extends React.Component {
  state={
    jung : false,
    sita : false,
    kumar : false,
    north : false
  }

  handleJung = () =>{
    console.log('thisgothhandled')
    this.setState({
      jung : !this.state.jung
    })
  }
  handleKumar = () =>{
    console.log('thisgothhandled')
    this.setState({
      kumar : !this.state.kumar
    })
  }
  handleSita = () =>{
    console.log('thisgothhandled')
    this.setState({
      sita : !this.state.sita
    })
  }
  handleTop5  = () => {
    console.log('this got triggered')
    this.setState({
      north: !this.state.north
    })
  }
  render(){
  return (
    <React.Fragment>
    <div className="background__app">
      <Background></Background>
      <Background></Background>
    </div>
    <div className="App">
      <Helmet>
        <title></title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i&display=swap" rel="stylesheet"></link>
      </Helmet>
      <section className="map">
        <img className="backgroundimg1" src={backgroundimg1}/>
        <img className="backgroundimg2" src={backgroundimg2}/>
        <div className="map-container">
          <img className="map-img" src={delhi}/>
          <img onClick={this.handleJung} src={marker} className="jung"></img>
          <img onClick={this.handleSita} src={marker} className="sita"></img>
          <img onClick={this.handleKumar} src={marker} className="kumar"></img>
        </div>
        <form className="search-bar"> 
          <label className="search-bar-label">What would you like to eat in New Delhi ?</label>
          <input className="search-bar-input"></input>
          <div className="rotating-text">
            <ReactRotatingText items={['Indian','test']}/>
          </div>
        </form>
      </section>
      <section className="cuisine">
        <div className="cuisine__card-container">
          <Card onClick={this.handleTop5} title="North Indian Chinese" image={fish}></Card>
          <Card title="I can eat anything" image={fork}></Card>
          <Card title="Mughalai" image={spinach}></Card>
        </div>
      </section>
      <section className="">
        
      </section>
      <Modal
      isOpen={this.state.kumar}
      contentLabel="onRequestClose Example"
      className="modal"
      >
        <img className="modal-close" onClick={this.handleKumar} src={close}/>
        <img src={kumar}/>
      </Modal>
      <Modal
      isOpen={this.state.jung}
      contentLabel="onRequestClose Example"
      className="modal"
      >
        <img className="modal-close" onClick={this.handleJung} src={close}/>
        <img src={kumar}/>
      </Modal>
      <Modal
      isOpen={this.state.sita}
      contentLabel="onRequestClose Example"
      className="modal"
      >
        <img className="modal-close" onClick={this.handleSita} src={close}></img>
        <img src={sita}/>
      </Modal>
    </div>
    <section className="north-indian-chinese">
      { this.state.north ? <img src={top5modal} className="north-img"/> : null}
    </section>
    <section className="socials">
      <div className="socials__container">
        <img src={banner} className="socials__banner"/>
        <img className="highest-rated" src={card1}/>
        <img className="most-affordable" src={card2}/>
        <img className="connect" src={card3}/>
      </div>
    </section>
   
    </React.Fragment>
  );
}
}
export default App;
