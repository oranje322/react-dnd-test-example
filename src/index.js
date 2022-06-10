import { createRoot } from 'react-dom/client';
import Example from './example';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const styles = {
  backgroundColor: '#F7F7F8',
  height: '800px',
};

function App() {
  return (
    <div style={{ ...styles }} className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
