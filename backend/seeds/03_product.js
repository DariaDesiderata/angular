
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(() => {
      // Inserts seed entries
      return knex('product').insert([
        {id: 1, name: 'carrot', quantity: 10, uom: 'pound', price: 4, category_id: 1, img: "https://unsplash.com/photos/eFFnKMiDMGc"},
        {id: 2, name: 'tomato', quantity: 10, uom: 'pound', price: 5, category_id: 1, img: "https://unsplash.com/photos/uVPDAwgqLXY"},
        {id: 3, name: 'green bean', quantity: 10, uom: 'pound', price: 2, category_id: 1, img: "https://unsplash.com/photos/H5k8PoC1BBc"},
        {id: 4, name: 'orange', quantity: 10, uom: 'pound', price: 2, category_id: 2, img: "https://unsplash.com/photos/sZnRKLItmwo"},
        {id: 5, name: 'peach', quantity: 10, uom: 'pound', price: 2, category_id: 2, img: "https://unsplash.com/photos/jf6EbeBE8UQ"},
        {id: 6, name: 'raspberry', quantity: 10, uom: 'box', price: 3, category_id: 2, img: "https://unsplash.com/photos/vIje66HsIcU"},
        {id: 7, name: 'honey', quantity: 10, uom: 'each', price: 4, category_id: 3, img: "https://unsplash.com/photos/9HajXdvKpIk"},
        {id: 8, name: 'bread', quantity: 10, uom: 'each', price: 4, category_id: 3, img: "https://unsplash.com/photos/ztgcyQILXsM"},
        {id: 9, name: 'cheese', quantity: 10, uom: 'pound', price: 4, category_id: 3, img: "https://unsplash.com/photos/KaK2jp8ie8s"}
      ]);
    });
};
