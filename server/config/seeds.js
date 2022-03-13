const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Choclate',
      description:
        'Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'choclate.jpeg',
      category: categories[0]._id,
      price: 1.50,
      quantity: 100
    },
    {
      name: 'Butter',
      description:
        'Nulla congue nibh magna, at feugiat nunc scelerisque quis.',
      image: 'butter.jpeg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 50
    },
    {
      name: 'Sanitizer',
      category: categories[1]._id,
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'sanitizer.jpeg',
      price: 2.99,
      quantity: 50
    },
    {
      name: 'Shampoo',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'shampoo.jpeg',
      price: 7.99,
      quantity: 200
    },
    {
      name: 'Plate',
      category: categories[1]._id,
      description:
        'Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'plate.jpeg',
      price: 8.99,
      quantity: 300
    },
    {
      name: 'Phone',
      category: categories[2]._id,
      description:
        'Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'phone.jpeg',
      price: 699.99,
      quantity: 100
    },
    {
      name: 'Laptop',
      category: categories[2]._id,
      description:
        'Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'laptop.jpeg',
      price: 1199.99,
      quantity: 50
    },
    {
      name: 'Ikigai book',
      category: categories[3]._id,
      description:
        'Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'book.jpeg',
      price: 19.99,
      quantity: 300
    },
    {
      name: 'Remote controlled car',
      category: categories[4]._id,
      description: 'Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'rc-car.jpg',
      price: 14.99,
      quantity: 200
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'teddy-bear.jpg',
      price: 18.99,
      quantity: 500
    },
    {
      name: 'Science Kit',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis. ',
      image: 'science-kit.jpeg',
      price: 9.99,
      quantity: 200
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Nadia',
    lastName: 'Alamgir',
    email: 'nadia@gmail.com',
    password: '12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Buzz',
    lastName: 'Aldrin',
    email: 'buzz@gmail.com',
    password: '12345'
  });

  console.log('users seeded');

  process.exit();
});
