export default function TabButtons({pets, activeTab, setActiveTab}){
  return (
    <div className="tab_header">
      {pets.map((pet, index) => (
        <li 
          key={pet.animal} 
          className={`${index === activeTab && "active"} tab__button`} 
          onClick={() => setActiveTab(index)}>
          {pet.animal}
        </li>
      ))}
    </div>
  );
}