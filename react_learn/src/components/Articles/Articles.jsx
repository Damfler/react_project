import Header from "../Header/Header";
import React, { useState } from "react";
import axios from "axios";
import styles from "./Articles.module.scss";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Articles</h1>

      {loading && "Загрузка..."}

      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <a href="/">Read now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
