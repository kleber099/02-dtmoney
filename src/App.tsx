import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import {  NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root');

export function App() {
  const  [isNewTrsansationModalOpen, setIsNewTrsansationModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTrsansationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTrsansationModalOpen(false);
  }

  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTrsansationModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </div>
  );
}
