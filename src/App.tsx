import { useState, MouseEvent } from "react";

import "./App.css";
import { TableOne, TableTwo } from "./components";

const buttons = new Array(4)
    .fill(1)
    .map((v, i) => v + i);

const App = () => {
    const [ table, setTable ] = useState(1);

    const handleChangeTable = (event: MouseEvent<HTMLButtonElement>) => {
        //@ts-ignore
        setTable(Number(event.target.value));
    };

    const renderTable = () => {
        switch (table) {
            case 1:
                return <TableOne />;
            case 2:
                return <TableTwo />;

            default:
                return <span>no table</span>;
        }
    };

    return (
        <div className = "App">
            <nav className = "nav">
                {buttons.map((value) => (
                    <button
                        className = "button"
                        key = { value }
                        value = { value }
                        onClick = { handleChangeTable }>
                        Table {value}
                    </button>
                ))}
            </nav>
            {renderTable()}
        </div>
    );
};

export default App;
