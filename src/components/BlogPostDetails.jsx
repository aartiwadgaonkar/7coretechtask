


import { Box, Button, Card, CircularProgress, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BlogPostDetails = () => {
  const { articleId } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=6fa37d152a7842e898e17df1f05ed9a0"
        );
        const articles = response.data.articles.map((row, index) => ({
          ...row,
          newId: index + 1,
        }));
        const foundArticle = articles.find(article => article.newId === parseInt(articleId));
        setArticle(foundArticle);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!article) {
    return <Typography>No article found</Typography>;
  }

  return (
    <div>
        

      <Grid
                item
                xs={12}
                sm={4}
                md={4}
                style={{
                    display: "flex",
                    width: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    flexDirection: "column",
                }}
            >
                <Link to={'/'}>
                <Button type="submit"
                variant="contained"
                color="primary"
                >Back</Button>
                </Link>
            </Grid>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    style={{
                        display: "flex",
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" gutterBottom>{article.title}</Typography>
                    <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto' }} />
                    <Typography variant="body1" gutterBottom>{article.description}</Typography>
                    <Typography variant="body2" color="textSecondary">{article.content}</Typography>
                </Grid>
            </div>
    </div>
  );
}

export default BlogPostDetails;
