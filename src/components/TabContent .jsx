export default function TabContent({pets, activeTab}){
  return (
    <div className="tab_container">
      <div className="tab_content">
        <p>{pets[activeTab].fact}</p>
      </div>
    </div>
  );
}