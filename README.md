# ABM-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alan Beltrán

## Ejemplo

```
  <ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
  >
    {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
      <>
        <ProductImage img={product.img} />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>


```
