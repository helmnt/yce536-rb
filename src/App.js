import React from 'react';
import './style.css';
import TopNavBar from './TopNavBar';
import BottomInputBar from './BottomInputBar';
import Picks from './Picks';

export default function App() {
  return (
    <>
      <TopNavBar />
      <Picks />
      <BottomInputBar />
    </>
  );
}
