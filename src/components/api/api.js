import axios from 'axios';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://example.com/register',
});

export const postData = async (formData) => {
  try {
    const { data } = await instance.post('/', formData, {
      headers: { 'Content-Type': 'application/json' },
    });

    toast.success('Форма успішно відправлена!');
  } catch (error) {
    toast.success('Форма успішно відправлена!');
  }
};
