import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer cZw2JToriBxan-5D3aaKV1V-0eAgkiZ4cimZO7XIyxNUvXR2CWWMcRYPAWisHeYtkKCpNcBRjiSZCvjz0RdHNlybLVhEuGNHD9Ypy89q0eIzL8SrVggOl2vAvjZeX3Yx',
  },
});
