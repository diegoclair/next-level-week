import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
  //this is a way to comunication between components, in this case CreatPoint and this component
  
  onFileUploaded: (file: File) => void; //void -> without return
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]; //we want only one file
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />

      { selectedFileUrl
        ? <img src={selectedFileUrl} alt='Point thumbnail' />
        : (
          <p>
            <FiUpload />
            Imagem do estabelecimento
          </p> 
        )
      }
    </div>
  )
}

export default Dropzone;