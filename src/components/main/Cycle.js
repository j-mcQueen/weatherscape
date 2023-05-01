export default function Cycle({...props}) {
    return (
        <div className="cycle">
            <div className="cycle-container">
                <div className="cycle-btns">
                    <button 
                        type="button"
                        onClick={() => props.setCycle(0)}
                        className={props.cycle === 0 ? "active" : null}>
                    </button>

                    <button 
                        type="button"
                        onClick={() => props.setCycle(1)}
                        className={props.cycle === 1 ? "active" : null}>
                    </button>

                    <button 
                        type="button"
                        onClick={() => props.setCycle(2)}
                        className={props.cycle === 2 ? "active" : null}>
                    </button>
                </div>
            </div>
        </div>
    )
} 