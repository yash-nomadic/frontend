'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const UploadFiles = () => {

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if(!file) toast.error('no file selected');

        const formData = new FormData();
        formData.append('files',file);
        formData.append('upload_present','mypresent');
        formData.append('cloud_name','ditmbkjtc');


        axios.post('https://api.cloudinary.com/v1_1/ditmbkjtc/image/upload', formData)
        .then((result) => {
            toast.success('File uploaded successfully');
        }).catch((err) => {
            toast.error('Failed to upload File');
            
        });
    }


  return (
    <div>

        <input type='file' onChange={handleFileUpload}/>

    </div>
  )
}

export default UploadFiles;