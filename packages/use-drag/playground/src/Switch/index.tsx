import './style.scss';

const Switch = ({ on, onChange }: { on: boolean; onChange: (on: boolean) => void }) => {
    return (
        <div className={'switch ' + (on ? 'on' : 'off')} onClick={() => onChange(!on)}>
            {on ? 'ON' : 'OFF'}
        </div>
    );
};

export default Switch;
