# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
CartItem.destroy_all 
Cart.destroy_all
Category.destroy_all 
Product.destroy_all 
ProductCategory.destroy_all
Review.destroy_all

demo_user = User.create(
  username: 'demo', 
  email: 'demo@demo.com', 
  password: '123123')

user2 = User.create(
  username: 'fuller', 
  email: 'ful@ful.com', 
  password: '123123')

user3 = User.create(
  username: 'john', 
  email: 'john@john.com', 
  password: '123123')

user4 = User.create(
  username: 'jane', 
  email: 'jane@jane.com', 
  password: '123123')

user5 = User.create(
  username: 'darren', 
  email: 'darren@darren.com', 
  password: '123123')

user6 = User.create(
  username: 'lina', 
  email: 'lina@lina.com', 
  password: '123123')

user7 = User.create(
  username: 'zachary', 
  email: 'zach@zach.com', 
  password: '123123')

user8 = User.create(
  username: 'spencer', 
  email: 'spencer@spencer.com', 
  password: '123123');

c1 = Category.create(name: 'Jewelry')
c2 = Category.create(name: 'Clothing')
c3 = Category.create(name: 'Shoes')
c4 = Category.create(name: 'Home')
c5 = Category.create(name: 'Toys')
c6 = Category.create(name: 'Entertainment')
c7 = Category.create(name: 'Art')
c8 = Category.create(name: 'Tools')


p1 = Product.create(
  name: "Baby Yoda", 
  description: "Great gift for all star wars fans!", 
  price: 10.00, 
  seller_id: 1)

ProductCategory.create(product_id: 1, category_id: 5)
ProductCategory.create(product_id: 1, category_id: 6)

p2 = Product.create(
  name: "Baby Groot", 
  description: "Desktop stand for your headphones!" , 
  price: 5.50, 
  seller_id: 1)

ProductCategory.create(product_id: 2, category_id: 5)
ProductCategory.create(product_id: 2, category_id: 6)
ProductCategory.create(product_id: 2, category_id: 7)

p3 = Product.create(
  name: "Bow Tie", 
  description: "3d printed bow tie! So snazzy", 
  price: 5.99, 
  seller_id: 2)

ProductCategory.create(product_id: 3, category_id: 2)

p4 = Product.create(
  name: "Bracelet", 
  description: "Circular lacey bracelet! ",
  price: 10.50, 
  seller_id: 2)

ProductCategory.create(product_id: 4, category_id: 2)

p5 = Product.create(
  name: "Bubble Necklace", 
  description: "Bubble like accessories! How cute!", 
  price: 8.49, 
  seller_id: 2 )

ProductCategory.create(product_id: 5, category_id: 2)

p6 = Product.create(
  name: "Cell Lamp", 
  description: "Biology + Home decor? What more can you ask for!" , 
  price: 12.49, 
  seller_id: 3)

ProductCategory.create(product_id: 6, category_id: 4)
ProductCategory.create(product_id: 6, category_id: 7)

p7 = Product.create(
  name: "Chainmail", 
  description: "3d printed lightweight chainmail! LARP LARP LARP !", 
  price: 8.00, 
  seller_id: 4)

ProductCategory.create(product_id: 7, category_id: 2)
ProductCategory.create(product_id: 7, category_id: 1)

p8 = Product.create(
  name: "Deadpool Bust", 
  description: "Break the 4th wall will this magnficent piece!", 
  price: 15.50, 
  seller_id: 4)

ProductCategory.create(product_id: 8, category_id: 7)
ProductCategory.create(product_id: 8, category_id: 4)
ProductCategory.create(product_id: 8, category_id: 6)

p9 = Product.create(
  name: "Deer Wall Art", 
  description: "Minimalistic deer decor.", 
  price: 5.25, 
  seller_id: 5)

ProductCategory.create(product_id: 9, category_id: 4)
ProductCategory.create(product_id: 9, category_id: 7)

p10 = Product.create(
  name: "DVA Necklace", 
  description: "Love Overwatch and Giant Robots? How about a DVA Necklace?!", price: 6.99, 
  seller_id: 5)

ProductCategory.create(product_id: 10, category_id: 1)
ProductCategory.create(product_id: 10, category_id: 6)

p11 = Product.create(
  name: "Ghost Decoration", 
  description: "Ready for halloween? Get these spoooooky ghosts!" , 
  price: 10.25, 
  seller_id: 5)

ProductCategory.create(product_id: 11, category_id: 4)

p12 = Product.create(
  name: "Poly Hat", 
  description: "Want a cap that doesn't provide shade, but looks cool? Look no further than this poly hat!", 
  price: 9.50, 
  seller_id: 6)

ProductCategory.create(product_id: 12, category_id: 2)

p13 = Product.create(
  name: "Headphone Stand", 
  description: "Desk headphone stands. Universal size!", 
  price: 7.50, 
  seller_id: 6)

ProductCategory.create(product_id: 13, category_id: 8)

p14 = Product.create(
  name: "Hex Storage", 
  description: "Completely modular hex storage! ", 
  price: 5.00, 
  seller_id: 6)

ProductCategory.create(product_id: 14, category_id: 8)
ProductCategory.create(product_id: 14, category_id: 4)

p15 = Product.create(
  name: "Kirby Exhaust", 
  description: "Because why not? ", 
  price: 8.00, 
  seller_id: 7)

ProductCategory.create(product_id: 15, category_id: 8)
ProductCategory.create(product_id: 15, category_id: 6)

p16 = Product.create(
  name: "Custom Light Switch", 
  description: "Bored of flipping a normal light switch? Turn that light switch into a steampunk switch!", 
  price: 4.20, 
  seller_id: 7)

ProductCategory.create(product_id: 16, category_id: 4)

p17 = Product.create(
  name: "Mario Planters", 
  description: "It's a me, Mario!", 
  price: 10.99, 
  seller_id: 7)

ProductCategory.create(product_id: 17, category_id: 6)
ProductCategory.create(product_id: 17, category_id: 4)

p18 = Product.create(
  name: "Mini Catapault", 
  description: "Medieval catapault for all the kix you don't eat." , 
  price: 8.99, 
  seller_id: 4)

ProductCategory.create(product_id: 18, category_id: 5)

p19 = Product.create(
  name: "Moon Lamp", 
  description: "Highly detailed moon lamp, beautiful.", 
  price: 9.98, 
  seller_id: 3)

ProductCategory.create(product_id: 19, category_id: 4)
ProductCategory.create(product_id: 19, category_id: 7)

p20 = Product.create(
  name: "Music Necklace", 
  description: "Necklace comprised of notes!", 
  price: 10.49, 
  seller_id: 1)

ProductCategory.create(product_id: 20, category_id: 1)

p21 = Product.create(
  name: "Octopus Toy", 
  description: "Print in place with articulating limbs!", 
  price: 8.00, 
  seller_id: 1)

ProductCategory.create(product_id: 21, category_id: 5)

p22 = Product.create(
  name: "Wall Planter Decor", 
  description: "Minimalist wall plant decor!", 
  price: 5.00, 
  seller_id: 2)

ProductCategory.create(product_id: 22, category_id: 4)
ProductCategory.create(product_id: 22, category_id: 8)

p23 = Product.create(
  name: "3D Puzzle", 
  description: "Fun little puzzle for everyone!", 
  price: 4.25, 
  seller_id: 2)

ProductCategory.create(product_id: 23, category_id: 5)

p24 = Product.create(
  name: "Tealight Holder", 
  description: "Lacey tealight holder!", 
  price: 11.25 , 
  seller_id:4 )

ProductCategory.create(product_id: 24, category_id: 4)

p25 = Product.create(
  name: "Hex Tie", 
  description: "Actually a 3D Printed tie, actually.", 
  price: 16.50, 
  seller_id: 4)

ProductCategory.create(product_id: 25, category_id: 2)

p26 = Product.create(
  name: "Universal Mount", 
  description: "Universal modular phone and camera mount" , 
  price: 6.99, 
  seller_id: 5)

ProductCategory.create(product_id: 26, category_id: 8)

p27 = Product.create(
  name: "Artsy Vase", 
  description: "Artistic Vase for your minimalist home", 
  price: 20.00, 
  seller_id: 5)

ProductCategory.create(product_id: 27, category_id: 7)
ProductCategory.create(product_id: 27, category_id: 4)

p28 = Product.create(
  name: "Whistle", 
  description: "One of the world's loudest whistles!", 
  price: 5.00, 
  seller_id:4 )

ProductCategory.create(product_id: 28, category_id: 5)
ProductCategory.create(product_id: 28, category_id: 8)

p29 = Product.create(
  name: "Wind Helix Decor", 
  description: "Awesome minimal decor", 
  price: 10.49, 
  seller_id: 1)

ProductCategory.create(product_id: 29, category_id: 4)
ProductCategory.create(product_id: 29, category_id: 7)

p30 = Product.create(
  name: "Full Shoe Rack", 
  description: "Custom Shoe Rack!", 
  price: 15.49, 
  seller_id: 1)

ProductCategory.create(product_id: 30, category_id: 4)
ProductCategory.create(product_id: 30, category_id: 3)

p31 = Product.create(
  name: "Shoe Organizer", 
  description: "Cleaner shoe orgnanizer for your closet!", 
  price: 2.49, 
  seller_id: 2)

ProductCategory.create(product_id: 31, category_id: 4)
ProductCategory.create(product_id: 31, category_id: 3)

p32 = Product.create(
  name: "Quick Shoe Ties", 
  description: "Who needs to lace ever again? ", 
  price: 3.49, 
  seller_id: 8)

ProductCategory.create(product_id: 32, category_id: 4)
ProductCategory.create(product_id: 32, category_id: 3)

p33 = Product.create(
  name: "Wall Mounted Shoe Rack", 
  description: "Defy gravity with these shoe hooks!", 
  price: 5.49, 
  seller_id: 8)

ProductCategory.create(product_id: 33, category_id: 4)
ProductCategory.create(product_id: 33, category_id: 3)



cart1 = Cart.create(user_id: 1)
cart2 = Cart.create(user_id: 2)
cart3 = Cart.create(user_id: 3)
cart4 = Cart.create(user_id: 4)
cart5 = Cart.create(user_id: 5)
cart6 = Cart.create(user_id: 6)
cart7 = Cart.create(user_id: 7)



