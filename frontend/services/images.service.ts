import axios from 'axios';

export interface Image {
  id: string;
  title: string;
  src: string;
} 


class ImagesService {
  static async getImages(): Promise<Image[]> {
    const { data } = await axios.get('http://localhost:9090/v1/images');
    return data;
  }
}

export default ImagesService;
