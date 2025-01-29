import './App.css';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');


  return (
    <div className="App">
      <button className={activeTab === 'image-generator' ? 'active' : ''} 
      onClick={() => setActiveTab('image-generator')}
      >Image Generator</button>
      <button className={activeTab === 'ask-ai' ? 'active' : ''}
      onClick={() => setActiveTab('ask-ai')}>Ask Ai</button>
      <button className={activeTab === 'recipe-creator' ? 'active' : ''}
      onClick={() => setActiveTab('recipe-creator')}> Recipe Generator</button>

      <div>
        {activeTab === 'image-generator' && (
          <div>
            <h2>Image Generator</h2>
            <input type="text" placeholder="Enter prompt" />
            <button>Generate Image</button>
          </div>
        )}
        {activeTab === 'ask-ai' && (
          <div>
            <h2>Ask Ai</h2>
            <input type="text" placeholder="Enter prompt" />
            <button>Ask Ai</button>
          </div>
        )}
        {activeTab === 'recipe-creator' && (
          <div>
            <h2>Recipe Generator</h2>
            <input type="text" placeholder="Enter ingredients" />
            <button>Generate Recipe</button>
      </div>
        )}
</div>
    </div>
  );
}

export default App;
