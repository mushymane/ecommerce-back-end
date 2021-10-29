// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  // onUpdate: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  through: {
    model: ProductTag,
    unique: false
  } //alias?
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  through: {
    model: ProductTag,
    unique: false
  } //alias?
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
