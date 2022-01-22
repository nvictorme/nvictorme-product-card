# nvictorme-product-card

This is a test on how to publish TS React Components as NPM packages

## Examples:

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "nvictorme-product-card";
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>
```
