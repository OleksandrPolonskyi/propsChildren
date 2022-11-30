import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

const Wrapper = styled.div`
    width:1000px;
    margin: 80px auto 0 auto;
`;

const DynamicCreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
        })
      }
    </div>
  )
}

const HelloCreating = () => {
  return (
    <div style={{ 'width': 'auto', 'margin': '0 auto' }}>
      <DynamicCreating color={'primary'}>
        <h2>Простий текст на укр на ліво</h2>
        <h2>Простий текст на укр номер 2</h2>
      </DynamicCreating>
    </div>
  )
}


const Message = (props) => {
  return (
    <h2>The sounnter = {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }
  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }
  render() {
    return (
      <>
        <button className='btn btn-primary' onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.newRender(this.state.counter)}
      </>
    )
  }
}


function App() {
  return (
    <Wrapper>
      <HelloCreating />
      <BootstrapTest
        left={
          <Counter newRender={count => (<Message counter={count} />)} />
        }
        right={
          <DynamicCreating color={'primary'}>
            <h2>Простий текст на укр на ліво</h2>
            <h2>Простий текст на укр номер 2</h2>
          </DynamicCreating>
        }
      />
    </Wrapper>
  );
}

export default App;