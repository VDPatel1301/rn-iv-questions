import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import { useForm, Controller } from 'react-hook-form';
import { calculatorSchema, CalculatorForm } from '../schemas/calculatorSchema ';
import { AddTwoNumbers, Calculate, textFontSize } from '../shared/constants';
import { colors } from '../shared/colors';
import CustomButton from '../components/CustomButton';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';

export default function CalculatorScreen() {
    const [result, setResult] = useState<number | null>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CalculatorForm>({
        resolver: zodResolver(calculatorSchema),
        defaultValues: { num1: '', num2: '' },
    });

    const onSubmit = (data: CalculatorForm) => {
        const total = Number(data.num1) + Number(data.num2);
        setResult(total);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{AddTwoNumbers}</Text>

            <Controller
                control={control}
                name="num1"
                render={({ field: { onChange, onBlur, value } }) => (
                    <CustomInput
                        placeholder="First number"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        errorMessage={errors.num1?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="num2"
                render={({ field: { onChange, onBlur, value } }) => (
                    <CustomInput
                        placeholder="Second number"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        errorMessage={errors.num2?.message}
                    />
                )}
            />
            <CustomButton
                title={Calculate}
                onPress={handleSubmit(onSubmit)}
            />
            <Text style={styles.result}>Sum : {result !== null ? result : '0'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { padding: 20 },
    title: { fontSize: textFontSize.large, fontWeight: 'bold', marginBottom: 24, color: colors.orange, textAlign: 'center' },
    result: { marginTop: 15, fontSize: textFontSize.large, color: colors.black, fontWeight: 'bold' },
    button: {
        backgroundColor: colors.orange,
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: { color: colors.white, fontSize: textFontSize.medium, fontWeight: 'bold' },
});
