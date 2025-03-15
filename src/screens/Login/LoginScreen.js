import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { InputField, CustomButton } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from './style';
import { authSchema, regexGmail, regexPassword } from '../../utils/heplers';
import router from '../../utils/router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { yupResolver ,yup} from '@hookform/resolvers/yup';
let i= 0;
const LoginScreen = ({ navigation }) => {
  const LockIcon = <Icon name="lock" size={20} color="white" />
  const userIcon = <Icon name="user" size={20} color="white" />
  
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    setFocus, 
    formState: { errors },
  } = useForm({
    resolver:yupResolver(authSchema),
    defaultValues:{
      email:"", 
      passWord:""
    }
  });

  const onSubmit = (data) => {
   navigation.replace(router.APP_STACK)
   // console.log("test")
  //  console.log("Form Submitted:", data);
reset({
email:"email1", 
passWord:"email2",
})
setFocus("passWord")
  }
  const test = () => {
    navigation.replace(router.APP_STACK)
  //setFocus("email")
  }
  useEffect(()=>{
setTimeout(()=>{
  console.log(i++)
  setFocus("email")

},200)
  },[setFocus])
  return (
    <View style={{ flex: 1 }}>
      <View
        style={Styles.container}
      >
        <View
          style={Styles.containerTxt}
        >
          <Text
            style={
              Styles.LoginTxt
            }
          >
            Login
          </Text>
        </View>

        <View style={{ height: '20%' }} />

        <InputField
          leftIcon={userIcon}
          label="Email"
          control={control}
          name="email"
          rules={{
            required: 'yêu cầu nhập email',
            pattern: {
              value: regexGmail,
              message: 'sai email',
            },
          }}
          hasError={errors.email?.message}
        />

        <InputField
          leftIcon={LockIcon}
          label="Password"
          control={control}
          name="passWord"
          isPassword
          rules={{
            required: 'yêu cầu nhập Password',
            minLength: {
              value: 5,
              message: 'ít nhất 5 ký tự',
            },
            pattern: {
              value: regexPassword,
              message: 'yêu cầu có ít nhất 1 chữ hoa, 1 chữ thường',
            },
          }}
          hasError={errors.passWord?.message}
        />

        <View style={{ height: 65 }} />

        <CustomButton
          label="Login"
          marginhorizontal={60}
          Padding={15}
          backgroundColor="blue"
          onPress={handleSubmit(onSubmit)}
        />

        <Text style={{ textAlign: 'center' }}>Forgot your Password?</Text>
      </View>
      <View style={{ paddingBottom: 40, alignItems: 'center' }}>
        <View
          style={Styles.Connect_Container}
        >
          <View style={{ height: 1, backgroundColor: 'grey', flex: 1 }} />
          <Text style={{ paddingHorizontal: 10 }}>or connect with</Text>
          <View style={{ height: 1, backgroundColor: 'grey', flex: 1 }} />
        </View>

        <View
          style={Styles.ContainerBtn}
        >
          <CustomButton
            Icon={<Icon name="facebook" size={15} />}
            isFlex
            label="Facebook"
            backgroundColor="blue"
            Padding={10}
            marginhorizontal={20}
          />

          <CustomButton
            onPress={() => test()}
            Icon={<Icon name="google" size={15} />}
            isFlex
            label="Google"
            backgroundColor="green"
            Padding={10}
            marginhorizontal={10}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Don't have an account?</Text>
          <Text style={{ marginLeft: 10, color: 'blue' }}>Sign up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
