# nvictorme-product-card

Este es un paquete de pruebas de despliegue en NPM

### Victor Noguera

## Examples:

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "nvictorme-product-card";
```

```
<ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 6,
          // maxCount: 10,
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
