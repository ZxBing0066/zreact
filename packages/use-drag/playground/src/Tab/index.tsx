import { ReactNode, useCallback, useState } from 'react';

import './style.scss';

const Tab = ({ tabs }: { tabs: { title: ReactNode; content: ReactNode }[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTab = useCallback(e => {
        setActiveIndex(+e.currentTarget.dataset['tabIndex']);
    }, []);
    return (
        <div className='tab'>
            <div className='title-list'>
                {tabs.map((tab, i) => (
                    <div
                        className='title'
                        onClick={handleTab}
                        data-tab-index={i}
                        data-active={activeIndex === i}
                        key={i}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div>{tabs[activeIndex].content}</div>
        </div>
    );
};
export default Tab;
