import { HistoryElement } from "./PrintHistoryElement"

export function History (openHistory, historyHandler,history ) {
    return (
        <div className={`history__wrap ${openHistory ? 'history__open' : ''}`}>
            <div className={`history ${openHistory ? 'history__open' : ''}`}>
                <div className="history__header">
                    <h2 className = "history__title">Your history</h2>
                    <button className="history__close-btn" onClick={() => {historyHandler()}}>&#10006;</button>
                </div>
                <div className="history__li">
                    <p className="history__name title">Country, City</p>
                    <p className="history__temperature title">Temperature, &#8451;</p>
                    <p className="history__weather title">Weater</p>
                    <p className="history__wind title">Wind</p>
                </div>
                <ul className="history__ul">
                  {history.map((element) => (HistoryElement(element)))}
                </ul>
            </div>
        </div>
    )
}