# React + TypeScript + Vite

## Extra Small (XS) - Điện thoại di động:
- Độ rộng: Dưới 576px

## Small (SM) - Máy tính bảng lớn, điện thoại lớn:
- Độ rộng: Từ 576px đến 767px

## Medium (MD) - Máy tính bảng, máy tính xách tay:
- Độ rộng: Từ 768px đến 991px

## Large (LG) - Máy tính xách tay lớn, máy tính để bàn:
- Độ rộng: Từ 992px đến 1199px

## Extra Large (XL) - Máy tính để bàn lớn:
- Độ rộng: 1200px trở lên

```css
@media only screen and (max-width: 576px) {
  /* CSS áp dụng cho màn hình điện thoại di động */
  .example-element {
    width: 100%;
  }
}

@media only screen and (min-width: 577px) and (max-width: 767px) {
  /* CSS áp dụng cho màn hình máy tính bảng lớn, điện thoại lớn */
  .example-element {
    width: 80%;
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
