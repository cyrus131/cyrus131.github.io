(function () {
  var toggle = document.getElementById("search-toggle");
  var panel = document.getElementById("search-panel");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  if (!toggle || !panel || !input || !results) return;

  var indexData = null;
  var baseurl = document.body.getAttribute("data-baseurl") || "";

  function loadIndex() {
    if (indexData) return Promise.resolve(indexData);
    return fetch(baseurl + "/search.json")
      .then(function (res) { return res.json(); })
      .then(function (data) { indexData = data; return data; });
  }

  function render(items) {
    results.innerHTML = "";
    if (items.length === 0) {
      results.innerHTML = '<li class="search-empty">Không tìm thấy bài viết nào.</li>';
      return;
    }
    items.slice(0, 15).forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.url;
      a.innerHTML = '<span class="search-result-title">' + item.title +
        '</span><span class="search-result-date">' + item.date + "</span>";
      li.appendChild(a);
      results.appendChild(li);
    });
  }

  function search(query) {
    query = query.trim().toLowerCase();
    if (query === "") { results.innerHTML = ""; return; }
    loadIndex().then(function (data) {
      var matches = data.filter(function (item) {
        var haystack = [item.title, item.excerpt]
          .concat(item.categories || [], item.tags || [])
          .join(" ").toLowerCase();
        return haystack.indexOf(query) !== -1;
      });
      render(matches);
    });
  }

  toggle.addEventListener("click", function () {
    var isOpen = !panel.hidden;
    panel.hidden = isOpen;
    toggle.setAttribute("aria-expanded", String(!isOpen));
    if (!isOpen) {
      loadIndex();
      setTimeout(function () { input.focus(); }, 10);
    }
  });

  input.addEventListener("input", function () { search(input.value); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
