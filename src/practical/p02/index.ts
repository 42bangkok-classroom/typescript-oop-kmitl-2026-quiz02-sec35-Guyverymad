import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserPost {
  id: number;
  title: string;
}

export const getPostsByUser = async (userId: number): Promise<UserPost[]> => {
  try {
    const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    // Use filter to find matches, then map to format the output
    return data
      .filter((post) => post.userId === userId)
      .map(({ id, title }) => ({
        id,
        title,
      }));

  } catch (error) {
    throw error;
  }
};

