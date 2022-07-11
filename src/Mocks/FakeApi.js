export const productos = [
  {
      id: 1,
      title: 'samsung galaxy s10',
      price: 80000,
      stock: 4,

      image: 'https://images.fravega.com/f300/fa53805370e7eed1fc1eb974d668d857.jpg.webp',
      category: 'samsung',
      description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
  },
  {
      id: 2,
      title: 'samsung galaxy s20',
      price: 90000,
      stock: 10,

      image: 'https://images.samsung.com/my/smartphones/galaxy-s20/images/galaxy-s20-share-image.jpg',
      category: 'samsung',
      description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
  },
  {
      id: 3,
      title: 'iphone 11',
      price: 120000,
      stock: 4,

      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021766023',
      category: 'iphone',
      description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
  },
  {
      id: 4,
      title: 'ihpone 12',
      price: 130000,
      stock: 4,

      image: 'https://www.mylshop.com.ar/wp-content/uploads/2022/03/apple-iphone-12-128gb-verde.jpg',
      category: 'iphone',
      description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
  },

  {
      id: 5,
      title: 'motorola one vision',
      price: 100000,
      stock: 20,

      image: 'https://http2.mlstatic.com/D_NQ_NP_667419-MLA31651956517_082019-O.webp',
      category: 'motorola',
      description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
  },
  {
      id: 6,
      title: 'motorola one fusion',
      price: 85000,
      stock: 5,

      image: 'https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70008437.jpg',
      category: 'motorola',
      description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
  },
];

export const getProds = (categoryId) => {
  return new Promise((resolve, reject) => {
      const productosFiltrados = productos.filter(
          (prod) => prod.category === categoryId
      );
      setTimeout(() => {
          categoryId ? resolve(productosFiltrados) : resolve(productos);
      }, 1000);
  });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
      const productoEncontrado = productos.find(
          (prod) => prod.id === Number(id)
      );
      setTimeout(() => {
          resolve(productoEncontrado);
      }, 1000);
  });
};

  

    

  