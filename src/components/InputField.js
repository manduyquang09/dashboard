import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { InputStyle } from './style';

const InputField = ({
  isPassword,
  label,
  control,
  name,
  rules,
  leftIcon,
  rightIcon,
  isMultiple,
  hasError,
}) => {
  console.log(JSON.stringify(name))
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 40 }}>
      <View
        style={InputStyle.containerInput}
      >
        {leftIcon}
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={label}
              style={{
                flex: 1,
                fontSize: 16,
                marginLeft: 10,
              }}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={isPassword}
              multiline={isMultiple}
            />
          )}
        />
        {rightIcon}
      </View>
      {hasError && (
        <Text style={InputStyle.erorrTxt}>{hasError}</Text>
      )}
    </View>
  );
};

export default InputField;
