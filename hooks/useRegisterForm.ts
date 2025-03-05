'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';
import { signIn } from 'next-auth/react';
export default function useRegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('GB');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const handleSelectCountry = (selectedOption: any) => {
        setSelectedCountry(selectedOption.code);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) {
            toast.error('Please agree to the terms os service');
            return;
        }
        if(
            formData.password !== formData.confirmPassword
        ){
            toast.error('Passwords do not match');
            return;
        }
       
    try {
        setLoading(true);
        setError(false);
        setSuccess(false);

        const data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            username: formData.username,
            mobile: countryCode + formData.mobile,
            


        }
      const response = await axios.post("/api/auth/signup",data );
      if (response.status !== 200) {

        throw new Error("Something went wrong");
      }
      if (response.data.status !== 200) {
        toast.error(response.data.message);
        setError(true);
        return;
      }

      
          await axios.post("/api/create-contact",{
                  email: formData.email,
                  firstName: formData.firstName,
                  lastName: formData.lastName
             } );

      const { email, password } = formData;
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setSuccess(true);
      toast.success("User created successfully");
    } catch (error) {
      console.log(error);
      setError(true);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
        
    };

    return {
        showPassword,
        togglePasswordVisibility,
        selectedCountry,
        setSelectedCountry,
        handleSelectCountry,
        isChecked,
        handleCheckboxChange,
        formData,
        handleInputChange,
        handleSubmit,
        loading,
        error,
        success,
        countryCode,
        setCountryCode
    };
}
