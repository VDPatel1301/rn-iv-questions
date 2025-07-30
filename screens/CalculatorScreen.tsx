import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import CustomInput from '../components/CustomInput';

export default function CalculatorScreen() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState<number | null>(null);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Add Two Numbers</Text>
            <CustomInput
                placeholder="First number"
                value={num1}
                onChangeText={setNum1}
            />
            <CustomInput
                placeholder="Second number"
                value={num2}
                onChangeText={setNum2}
            />
            <Pressable
                onPress={() => {
                    if (num1.trim() === '' || num2.trim() === '') {
                        alert('Please enter both numbers before calculating.');
                        return;
                    }
                    setResult(Number(num1) + Number(num2));
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>

            <Text style={styles.result}>Total : {result !== null ? result : '-'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#f36911' },
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 10,
        marginVertical: 5, width: '100%', fontWeight: 'bold', color: '#333'
    },
    result: { marginTop: 15, fontSize: 18, color: '#333', fontWeight: 'bold' },
    button: {
        backgroundColor: '#f36911', padding: 10, borderRadius: 12, alignItems: 'center',
        marginTop: 12
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
