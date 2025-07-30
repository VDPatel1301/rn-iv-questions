import { StyleSheet, TextInput } from "react-native";

type CustomInputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
};

export default function CustomInput({ placeholder, value, onChangeText }: CustomInputProps) {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="lightgray"
            style={styles.input}
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
        />
    );
}



const styles = StyleSheet.create({
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 10,
        marginVertical: 5, width: '100%', fontWeight: 'bold', color: '#333'
    },

});
