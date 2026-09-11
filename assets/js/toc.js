(function () {
  var toc = document.getElementById("toc");
  var content = document.querySelector(".post-content");
  if (!toc || !content) return;

  var headings = content.querySelectorAll("h2, h3");
  if (headings.length === 0) {
    toc.remove();
    return;
  }

  var list = toc.querySelector(".toc-list");
  headings.forEach(function (heading) {
    if (!heading.id) {
      heading.id = heading.textContent.trim().toLowerCase()
        .replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    }
    var li = document.createElement("li");
    li.className = "toc-item toc-" + heading.tagName.toLowerCase();
    var a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });
})();
