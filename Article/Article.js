// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector(".expandButton");
    this.expandButton.textContent = "expand";
    this.content = domElement.querySelector(".content");
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    const close = document.createElement("span");
    close.textContent = "×";
    close.classList.add("close");
    domElement.insertBefore(close, domElement.firstChild);
    this.close = close;
    this.close.addEventListener('click', () => this.deleteArticle());
  }

  deleteArticle() {
    this.domElement.classList.add("deleting");
    setTimeout(() => this.domElement.parentNode.removeChild(this.domElement), 200);
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if (this.content.classList.contains("article-open")) {
      this.content.classList.remove("article-open");
      this.content.classList.add("article-close");
      this.expandButton.textContent = "expand";
    } else {
      this.content.classList.add("article-open");
      this.content.classList.remove("article-close");
      this.expandButton.textContent = "collapse";
    }
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");
articles.forEach((article) => new Article(article));
