import { PostApi } from "../../oapi/apis/PostApi";
import { Post } from "@oapi/models/Post";
import { config } from "@/api/apiConfig";
import { useEffect, useState } from "react";

const About = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postApi = new PostApi(config);
    const fetchPosts = async () => {
      const data = await postApi.postsGet();
      setPosts(data);
    };
    fetchPosts();
  }, [setPosts]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.name}</h1>
          <p>{post.id}</p>
          <p>{post.updatedAt}</p>
          <p>{post.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
