import React from 'react'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import './style.css';

export default function App() {
  return (
    <div>
      <NavBar/>
      <div className='app'/>
      <SearchBar/>
    </div>
  )
}
