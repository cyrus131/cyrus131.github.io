# cyrus131.github.io

Blog cá nhân về Reverse Engineering & Malware Analysis — [Jekyll](https://jekyllrb.com/), host trên GitHub Pages.

Live: https://cyrus131.github.io
Hướng dẫn đầy đủ (đăng bài, đổi avatar/favicon/social link...): xem bài [Hướng dẫn đăng bài & tuỳ chỉnh blog](https://cyrus131.github.io/tutorials/2026/09/11/huong-dan-su-dung-blog/).

## Đăng bài mới

Tạo file `_posts/YYYY-MM-DD-ten-bai.md`:

```yaml
---
title: "Tiêu đề bài viết"
categories: [malware-analysis]   # hoặc: binary-exploitation, ctf-writeups, tutorials
tags: [windows, x86, ida-pro]
---

Nội dung Markdown...
```

Push lên `main` là site tự build lại (~1 phút).

```bash
git add _posts/ten-bai.md
git commit -m "Add post: ..."
git push origin main
```

## Chạy thử local (tuỳ chọn)

```bash
bundle install
bundle exec jekyll serve
```

Mở http://localhost:4000

## Tuỳ chỉnh nhanh

Tất cả trong `_config.yml`: tên/bio, social link (`github_username`, `linkedin_username`, ...), avatar/favicon (`avatar_image`, `favicon_image`), danh mục navbar (`nav_categories`). Màu sắc/giao diện sửa ở `assets/css/main.css` (biến `--accent` trong `:root`).
