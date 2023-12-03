const textContainer = document.querySelector(".newest-blogs-container");

const url = "https://www.oddvarkristiansen.no/wp-json/wp/v2/posts/";


let displayedBlogs = 10;

async function callApi() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        for (let i = 0; i < displayedBlogs + 10 && i < results.length; i++) {
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
            `;
        }
    
    } catch (error) {
        textContainer.innerHTML = message("error", error);
    }
}

document.querySelector('.see-more-blogs-box').addEventListener('click', showMoreBlogs);

function showMoreBlogs() {
    callApi(); 
}




callApi();