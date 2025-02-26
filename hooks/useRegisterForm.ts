'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useRegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('GB');
    const [isChecked, setIsChecked] = useState(false);
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) {
            alert('You must agree to the terms of service.');
            return;
        }
        // Perform form submission logic (e.g., API call)
        console.log('Form submitted:', formData, selectedCountry);
        router.push('/dashboard');
        
    };

    return {
        showPassword,
        togglePasswordVisibility,
        selectedCountry,
        handleSelectCountry,
        isChecked,
        handleCheckboxChange,
        formData,
        handleInputChange,
        handleSubmit,
    };
}
