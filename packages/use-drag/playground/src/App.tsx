import DragList from './DragList';
import DragReplaceList from './DragReplaceList';
import DragTransfer from './DragTransfer';
import DragZone from './DragZone';
import Effect from './Effect';
import Tab from './Tab';

const tabs = [
    { title: 'drag-list', content: <DragList /> },
    { title: 'drag-replace-list', content: <DragReplaceList /> },
    { title: 'drag-zone', content: <DragZone /> },
    { title: 'drag-transfer', content: <DragTransfer /> },
    { title: 'effect', content: <Effect /> }
].map(tab => ({
    ...tab,
    content: <div className='playground'>{tab.content}</div>
}));
function App() {
    return (
        <div>
            <Tab tabs={tabs} />
        </div>
    );
}

export default App;
