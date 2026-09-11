---
title: "Hướng dẫn đăng bài & tuỳ chỉnh blog"
categories: [tutorials]
tags: [jekyll, huong-dan]
---

Bài này ghi lại cách **đăng bài mới** và **tuỳ chỉnh giao diện** (avatar, favicon, social link, danh mục...) cho blog này. Giữ lại bài này làm tài liệu tham khảo, hoặc xoá đi khi không cần nữa.

## Cấu trúc thư mục

```
blog/
├── _config.yml        # Cấu hình site: tên, bio, social link, danh mục nav
├── _posts/             # Toàn bộ bài viết
├── about.md            # Trang giới thiệu
├── assets/
│   ├── css/main.css    # Toàn bộ style
│   ├── js/              # TOC + search
│   └── images/          # Ảnh avatar, favicon, ảnh minh hoạ bài viết
```

## Đăng bài mới

1. Tạo file trong `_posts/`, đặt tên đúng định dạng:

   ```
   YYYY-MM-DD-slug-bai-viet.md
   ```

   Ví dụ: `2026-09-20-phan-tich-lockbit4.md`

2. Thêm front matter ở đầu file:

   ```yaml
   ---
   title: "Phân tích ransomware LockBit 4"
   categories: [malware-analysis]
   tags: [ransomware, windows, x86]
   ---
   ```

   `categories` nên chọn **đúng một** trong 4 slug sau để bài tự xuất hiện ở menu trên cùng:

   | Slug | Hiển thị trên navbar |
   |---|---|
   | `malware-analysis` | Malware Analysis |
   | `binary-exploitation` | Binary Exploitation |
   | `ctf-writeups` | CTF Writeups |
   | `tutorials` | Tutorials |

   Có thể dùng category khác không nằm trong danh sách — bài vẫn hiện ở trang `/categories/`, chỉ là không có link tắt trên navbar.

3. Viết nội dung Markdown bên dưới front matter. Vài thứ hay dùng khi viết bài RE:

   **Code block có syntax highlighting** (thêm tên ngôn ngữ sau dấu `` ``` ``):

   ```python
   def decrypt(data, key):
       return bytes(b ^ key for b in data)
   ```

   **Bảng**, **blockquote**, **ảnh** đều dùng cú pháp Markdown chuẩn:

   ```markdown
   ![Mô tả ảnh](/assets/images/ten-anh.png)

   > Ghi chú quan trọng
   ```

   Bỏ ảnh minh hoạ vào `assets/images/` rồi tham chiếu theo đường dẫn tuyệt đối `/assets/images/...`.

4. Mỗi bài tự có mục lục ("On this page") và "reading time" — tự sinh từ các heading `##`/`###` và số từ trong bài, không cần khai báo gì thêm.

## Chạy thử trước khi đăng (tuỳ chọn)

Cần cài [Ruby](https://www.ruby-lang.org/en/downloads/):

```bash
bundle install
bundle exec jekyll serve
```

Mở `http://localhost:4000` để xem trước khi push.

## Đăng bài lên GitHub Pages

```bash
git add _posts/ten-file-moi.md
git commit -m "Add post: ..."
git push origin main
```

Sau ~1 phút, bài sẽ xuất hiện tại `https://cyrus131.github.io`.

## Tuỳ chỉnh giao diện

Tất cả nằm trong `_config.yml`:

```yaml
author: "Cyrus"               # Tên hiển thị, cũng dùng để sinh chữ cái avatar/favicon
author_bio: ""                 # Mô tả ngắn dưới tên trong sidebar (để trống = ẩn)

email: ""
twitter_username: ""
linkedin_username: "cuongdq13"
github_username: "cyrus131"
coffee_url: ""

avatar_image: ""               # /assets/images/avatar.jpg — để trống dùng avatar chữ cái tự sinh
favicon_image: ""              # /assets/images/favicon.png — để trống dùng favicon chữ cái tự sinh
```

### Đổi avatar / favicon bằng ảnh thật

1. Bỏ ảnh vào `assets/images/` (ví dụ `avatar.jpg`, `favicon.png`).
2. Điền đường dẫn vào `avatar_image` / `favicon_image` trong `_config.yml`.
3. Commit + push như bình thường.

### Đổi danh mục trên navbar

Sửa mục `nav_categories` trong `_config.yml`:

```yaml
nav_categories:
  - name: "Malware Analysis"
    slug: "malware-analysis"
  - name: "Binary Exploitation"
    slug: "binary-exploitation"
```

`slug` phải khớp với `categories` dùng trong front matter các bài viết.

### Đổi màu / bố cục

Toàn bộ màu sắc nằm ở đầu `assets/css/main.css`, trong khối `:root { ... }` (theme tối) và `html[data-theme="light"] { ... }` (theme sáng). Đổi giá trị `--accent` để đổi màu nhấn (hiện đang là teal `#2dd4bf`).
