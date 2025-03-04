import { useState } from 'react';
import {useRouter} from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

export default function useLoginForm() {


    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login form submitted:', formData, isChecked);
         const { email, password } = formData;
        const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        });
        if (!res!.ok) {
        toast.error(res!.error);
        setLoading(false);
        return;
        }
        toast.success("Logged in successfully");
        router.replace("/account");
        setLoading(false);
        // router.push('/dashboard');
    };

    return {
        showPassword,
        togglePasswordVisibility,
        isChecked,
        handleCheckboxChange,
        formData,
        handleInputChange,
        handleSubmit,
        loading,
        error
    };
}
