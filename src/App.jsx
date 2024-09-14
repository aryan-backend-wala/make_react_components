import { useState } from 'react';
import TabButtons from './components/TabButtons';
import TabContent from './components/TabContent ';
import './index.css'
import { petData } from './utils/petData';

export default function App(){
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab)
  return (
    <div className='main_container'>
      <h1>Choose your pet</h1>
      <TabButtons 
        pets={petData} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent pets={petData} activeTab={activeTab} />
    </div>
  );
}