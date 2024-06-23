import style from "./ProductList.module.css";

const ProductList = ({ post }) => {
  return (
    <div className={style.productContainer}>
      <div className={style.productCard}>
        <img
          src={post.img}
          alt="Product 1"
          className={style.productImage}
          width={300}
          height={200}
        />
        <h2 className={style.productTitle}>{post.title}</h2>
        <p className={style.productDescription}>{post.description}</p>
        <p className={style.productDescription}>Price:{post.price}RS </p>
      </div>
    </div>
  );
};
export default ProductList;
