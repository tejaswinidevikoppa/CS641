import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import customStyle from "../styles/custom";

interface FunctionalComponentProps {
    buttonTitle: string;
    showButton: boolean;
}

const FunctionalComponent = (props: FunctionalComponentProps) => {
    const [count, setCount] = useState(100);
    const [onScreenTimer, setOnScreenTimer] = useState(0);
    const [dummyText, setDummyText] = useState('Initial');

    // Increase count
    function increase() {
        setCount(count + 1);
    }

    // Users data
    const users = [
        { firstName: 'A', lastName: 'B' },
        { firstName: 'C', lastName: 'D' },
        { firstName: 'E', lastName: 'F' },
    ];

    // Handle button press
    function handleButtonPress() {
        setDummyText('Button pressed');
    }

    // Decrease count
    function decrease() {
        setCount(count - 1);
    }

    // Effect to manage timer
    useEffect(() => {
        const value = setInterval(() => setOnScreenTimer((onScreenTimer) => onScreenTimer + 2), 2000);
        return () => clearInterval(value);
    }, []);

    return (
        <View style={customStyle.container}>
            <Text>Time on screen: {onScreenTimer}</Text>
            <Text>{dummyText}</Text>

            {/* Render list of users with a unique key prop */}
            {users.map((user, index) => {
                return <Text key={index}>{user.lastName}, {user.firstName}</Text>;
            })}

            {/* Increase count button */}
            <Button title={props.buttonTitle} onPress={increase} disabled />

            {/* Conditional rendering of the second button */}
            {props.showButton ? (
                <Button title={props.buttonTitle} onPress={handleButtonPress} />
            ) : (
                <Text>Ternary False</Text>
            )}
        </View>
    );
};

export default FunctionalComponent;
