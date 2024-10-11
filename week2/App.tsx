import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, ActivityIndicator, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const CounterOne = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    return (
        <View style={styles.counterContainer}>
            <Text>Counter One: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    );
};

const CounterTwo = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue);

    return (
        <View style={styles.counterContainer}>
            <Text>Counter Two: {value}</Text>
            <Button title="Increment by 2" onPress={() => setValue(value + 2)} />
        </View>
    );
};

export default function App() {
    return (
        <ScrollView>
            <Text>Hello there</Text>
            <Text>How is it going?</Text>
            <ActivityIndicator />
            <Image 
            source={{ uri: 'https://rb.gy/oeq90r' }}
                style={styles.tinyLogo} 
            />
            <CounterOne initialCount={0} />
            <CounterTwo initialValue={0} />
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 500,
        height: 500,
    },
    counterContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
});



















