import { axiosInstance } from './axios-instance';

export const supportRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/support', body);
  return data;
};

export const updateProfileRequest = async (formData) => {
  try {
    const { data } = await axiosInstance.patch('/users/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
