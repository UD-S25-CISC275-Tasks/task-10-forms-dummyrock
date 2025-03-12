import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE); // No need to modify this
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        setTeam((prevTeam) =>
            prevTeam.includes(newMember) ? prevTeam : [...prevTeam, newMember],
        );
    }

    function clearTeam() {
        setTeam([]); // Correctly resets the team
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    <ul>
                        {team.map((member) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
