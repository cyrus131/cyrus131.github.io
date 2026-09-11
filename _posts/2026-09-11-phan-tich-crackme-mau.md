---
title: "[Template] Phân tích một crackme đơn giản"
categories: [reverse-engineering]
tags: [x86, ida-pro, crackme]
---

> Đây là bài viết **mẫu** minh hoạ cấu trúc thường dùng cho một bài RE writeup. Xoá hoặc chỉnh sửa lại khi viết bài thật.

## Giới thiệu

Mô tả ngắn gọn: file/binary phân tích là gì, lấy từ đâu (CTF, malware sample, ...), mục tiêu phân tích.

```
$ file crackme.exe
crackme.exe: PE32 executable (console) Intel 80386, for MS Windows
```

## Static Analysis

Mở binary bằng IDA Pro / Ghidra, xem qua các hàm quan trọng.

```c
int check_password(char *input) {
    int key = 0x1337;
    for (int i = 0; input[i]; i++) {
        key ^= input[i];
    }
    return key == 0x42;
}
```

Nhận xét về logic, các hàm đáng chú ý, chuỗi string, import table, v.v.

## Dynamic Analysis

Dùng x64dbg / gdb để debug runtime, đặt breakpoint, theo dõi giá trị register.

```asm
xor   eax, eax
mov   ecx, [ebp-4]
loop_check:
xor   eax, [ecx]
inc   ecx
cmp   byte [ecx], 0
jnz   loop_check
cmp   eax, 0x42
```

## Kết luận

Tóm tắt kết quả: điều kiện để vượt qua check, flag tìm được, bài học rút ra.

```
FLAG{example_flag_here}
```
