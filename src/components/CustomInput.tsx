import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { colors } from '../shared/colors';
import { textFontSize } from '../shared/constants';

type CustomInputProps = {
    value: string;
    onChange: (text: string) => void;
    onBlur: () => void;
    placeholder: string;
    errorMessage?: string;
};

export default function CustomInput({
    value,
    onChange,
    onBlur,
    placeholder,
    errorMessage,
}: CustomInputProps) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="gray"
                style={[
                    styles.input,
                    errorMessage && styles.inputError,
                ]} keyboardType="numeric"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { width: '100%' },
    input: {
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 12,
        padding: 10,
        marginVertical: 5,
        width: '100%',
        fontWeight: 'bold',
        color: colors.black,
    },
    error: {
        color: colors.red,
        fontSize: textFontSize.semiMedium,
        marginTop: 2,
        marginLeft: 5,
    },
    inputError: {
        borderColor: colors.red,
    },
});
