import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogPostItem = ({article}) => {
  return (
    <div> 
       
    <Link to={`/blog-details/${article.newId}`}  style={{ textDecoration: 'none' }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={article.urlToImage}
          alt={article.title}
          style={{ cursor: "pointer" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
         {/* iddd  : {article.newId} */}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {article.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
</div>
  )
}

export default BlogPostItem