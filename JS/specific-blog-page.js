document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector(".specific-blog-container");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const url = "https://www.oddvarkristiansen.no/wp-json/wp/v2/posts/" + id;

    async function callApi() {
        try {
            const response = await fetch(url);
            const result = await response.json();

            createHtml(result);

        } catch (error) {
            productContainer.innerHTML = message("error", error);
        }
    }
    callApi();

    function createHtml(result) {
        productContainer.innerHTML = `
                                        <div class="h2-specific-title">
                                            <h3>${result.title.rendered}</h3>
                                        </div>
                                        <div class="image-container">
                                            <img src="${result.content.rendered}" class="specific-image" alt="${result.title.rendered}">
                                        </div>`;
    }
});