import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    setValue,
}: {
    setValue: (update: (prev: number) => number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((prev) => prev * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setValue,
}: {
    setValue: (update: (prev: number) => number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((prev) => prev * 0.5);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10); // Initial value set to 10 as an example

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler setValue={setValue} />
            <Halver setValue={setValue} />
        </div>
    );
}
