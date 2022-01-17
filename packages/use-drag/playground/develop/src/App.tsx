import DragList from './DragList';
import DragReplaceList from './DragReplaceList';
import DragZone from './DragZone';
import Tab from './Tab';

function App() {
    const tabs = [
        { title: 'drag-list', content: <DragList /> },
        { title: 'drag-replace-list', content: <DragReplaceList /> },
        { title: 'drag-zone', content: <DragZone /> }
    ];
    return (
        <div>
            <Tab tabs={tabs} />
        </div>
    );
}

export default App;
