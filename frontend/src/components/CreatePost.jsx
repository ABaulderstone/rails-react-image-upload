import React, { useState } from 'react';
import { createPost } from '../services/post-services';

const CreatePost = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
    image: null,
  });
  const [imageUrl, setImageUrl] = useState('');

  const onChange = (e) => {
    const { value, id } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const onImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setFormValues({ ...formValues, image: selectedImage });
    setImageUrl(URL.createObjectURL(selectedImage));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in formValues) {
      formData.append(key, formValues[key]);
    }
    createPost(formData)
      .then(() => console.log('success'))
      .catch((e) => console.log(e));
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>Title</label>
        <input
          onChange={onChange}
          type='text'
          id='title'
          value={formValues.title}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea onChange={onChange} value={formValues.content} id='content' />
      </div>
      <div>
        <label>Image</label>
        <input onChange={onImageChange} type='file' />
      </div>
      {imageUrl && <img src={imageUrl} alt={formValues.title}></img>}
      <div>
        <button type='submit'>Create Post </button>
      </div>
    </form>
  );
};

export default CreatePost;
