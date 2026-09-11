# cyrus131.github.io

Blog cá nhân về Reverse Engineering & Malware Analysis, xây bằng [Jekyll](https://jekyllrb.com/) và host trên GitHub Pages.

## Chạy thử ở local

Cần cài [Ruby](https://www.ruby-lang.org/en/downloads/) trước (bản ổn định gần nhất).

```bash
bundle install
bundle exec jekyll serve
```

Mở [http://localhost:4000](http://localhost:4000).

## Viết bài mới

Tạo file trong `_posts/` theo định dạng `YYYY-MM-DD-ten-bai-viet.md`:

```yaml
---
title: "Tiêu đề bài viết"
categories: [reverse-engineering]
tags: [windows, x86, ida-pro]
---

Nội dung bài viết (Markdown)...
```

## Deploy

Repo này tên `cyrus131.github.io` nên GitHub Pages tự build và publish tại
`https://cyrus131.github.io` mỗi khi push lên nhánh `main`.

Cần bật một lần trong **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / (root)**.

## Tuỳ chỉnh

- `_config.yml`: tên site, tagline, author, mô tả.
- `about.md`: trang giới thiệu bản thân.
- `assets/css/main.css`: giao diện (đã hỗ trợ dark/light mode toggle).
