// first notice I created a post folder inside the app folder and inside the post folder I have a folder 
// [id] - this is used for dynamic routing and inside the [id] folder I have this particular file, page.js 

// to see how dynamic routing works route to "localhost:3000/posts/1" or "localhost:3000/posts/this 1 can be any 
// number of your choice, it can also be a string or boolean or any data type".  

// This dynamic routing can be used in creating blog pages where each blog have different IDs. 

"use client"


// useParams is a hook that allows you to access the parameters of the current route


//  useSearchParams is a hook that allows you to access and manipulate the search parameters 
// (query string) of the current URL

import { useParams, useSearchParams } from 'next/navigation';

function Post() {

  const params = useParams();
  const useSearch = useSearchParams(); 
// check what you have in your console at this point you will see list of functions you can perform with the 
// useSearchParama and you will see a get function which I will use...
  console.log(useSearch)

  const newParams = useSearch.get('new')
  console.log(newParams);

//   to see how the above works route to the "post/id?new=4". you will see 4 in the console
// the ? stands for query, you can research more about query.


  return (
    <div>
      <h1>Post {params.id}</h1>    
      <h1>{newParams}</h1>
    </div>   
  );
}

export default Post;