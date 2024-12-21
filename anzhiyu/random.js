var posts=["2024/12/20/2/","2024/11/10/1/","2024/12/20/3/","2024/12/21/4/","2024/12/21/5/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };