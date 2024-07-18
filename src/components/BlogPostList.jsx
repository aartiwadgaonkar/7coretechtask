import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogPostItem from "./BlogPostItem";

const BlogPostList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=6fa37d152a7842e898e17df1f05ed9a0`
        );

        if (!response.ok) {
          throw new Error("network error ");
        }
        const data = await response.json();
        setData(
          data.articles.map((item, index) => ({
            newId: index + 1,
            author: item.author,
            title: item.title,
            description: item.description,
            url: item.url,
            urlToImage: item.urlToImage,
          }))
        );

        console.log(data, "data");
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    console.log(data, "new data");
  }, [data]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
          padding: "0.5%",
          color: "black",
          fontSize: 19,
          fontWeight: 500,
          backgroundColor: "#87ceeb",
          marginBottom: "20px",
        }}
      ></Box>
      <Grid container spacing={2}>
        {currentArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BlogPostItem key={index} article={article} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Pagination
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            count={Math.ceil(data.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BlogPostList;
