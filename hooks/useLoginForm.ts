import { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function useLoginForm() {


    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform login logic (e.g., API call)
        console.log('Login form submitted:', formData, isChecked);
        router.push('/dashboard');
    };

    return {
        showPassword,
        togglePasswordVisibility,
        isChecked,
        handleCheckboxChange,
        formData,
        handleInputChange,
        handleSubmit,
    };
}
