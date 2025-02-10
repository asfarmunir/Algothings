'use client';
import { useState } from "react";

const useCustomerSupport = () => {
  // States for customer support form
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState('');
  
  // Dropdown options
  const accountOption = ['Account 1', 'Account 2', 'Account 3'];
  const subjectOption = ['Subject 1', 'Subject 2', 'Subject 3'];

  // Handlers
  const handleSubjectSelect = (selectedSubject:any) => {
    setSubject(selectedSubject);
  };

  const handleMessageChange = (e:any) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const handleFileChange = (e:any) => {
    setFile(e.target.files[0]);
  };

  const handleAccountSelect = (selectedAccount:any) => {
    setSelectedAccount(selectedAccount);
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., API call)
    console.log({ subject, message, file, selectedAccount });
  };

  return {
    subject,
    message,
    file,
    selectedAccount,
    accountOption,
    subjectOption,
    handleSubjectSelect,
    handleMessageChange,
    handleFileChange,
    handleAccountSelect,
    handleSubmit,
  };
};

export default useCustomerSupport;
