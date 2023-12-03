const textContainer = document.querySelector(".newest-blogs-container");
const carouselWrapper = document.querySelector(".wrapper-container");

const url = "https://www.oddvarkristiansen.no/wp-json/wp/v2/posts/";


async function callApi(){
    try {
        const response = await fetch (url);
        const results = await response.json();

        for(let i = 0; i < results.length; i++){
            if (i < 3){
            textContainer.innerHTML += `
                                        <a href="/HTML/specific-blog.html?id=${results[i].id}">    
                                            <div class="blog-article">
                                                <div class="image-blog-article-container">
                                                    <img src="${results[i].content.rendered}" alt="${results[i].title.rendered}" class="blog-article-image">
                                                </div>
                                                <div class="blog-article-info">
                                                    <h3 class="newest-blog-h3">${results[i].title.rendered}</h3>
                                                </div>
                                            </div>
                                        </a>
                                        `
        }
    }

    } catch (error) {
        textContainer.innerHTML = message("error", error);
    }
}




function createPostsElements(textContainer) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(results[i].content.rendered, "text/html");
      const image = doc.querySelector("img")
    } catch (error) {
        message("error", error);
    }
}


callApi();