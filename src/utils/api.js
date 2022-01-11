import axios from "axios";

const BASE_URL = 'https://my-json-server.typicode.com/modanisa/bootcamp-video-db';
const VIDEOS_URL = `${BASE_URL}/videos`;

export const getVideos = () => axios.get(VIDEOS_URL);