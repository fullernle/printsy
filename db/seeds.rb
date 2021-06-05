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
Review.destroy_all

demo_user = User.create(username: 'demo', email: 'demo@demo.com', password: '123123')
user1 = User.create(username: 'fuller', email: 'ful@ful.com', password: '123123')
user2 = User.create(username: 'john', email: 'john@john.com', password: '123123')
user3 = User.create(username: 'jane', email: 'jane@jane.com', password: '123123')
user4 = User.create(username: 'darren', email: 'darren@darren.com', password: '123123')
user5 = User.create(username: 'lina', email: 'lina@lina.com', password: '123123')
user6 = User.create(username: 'zachary', email: 'zach@zach.com', password: '123123')
user7 = User.create(username: 'spencer', email: 'spencer@spencer.com', password: '123123');

c1 = Category.create(name: 'Jewelry')
c2 = Category.create(name: 'Clothing')
c3 = Category.create(name: 'Shoes')
c4 = Category.create(name: 'Home')
c5 = Category.create(name: 'Toys')
c6 = Category.create(name: 'Entertainment')
c7 = Category.create(name: 'Art')
c8 = Category.create(name: 'Tools')

p1 = Product.create(name: "Baby Yoda", description: "Great gift for all star wars fans!", price: 10, seller_id: 1)
p2 = Product.create(name: "Baby Groot", description: "Desktop stand for your headphones!" , price: 5, seller_id: 1)
p3 = Product.create(name: "Bow Tie", description: "3d printed bow tie! So snazzy", price: 5, seller_id: 2)
p4 = Product.create(name: "Bracelet", description: "Circular lacey bracelet! ", price: 10, seller_id: 2)
p5 = Product.create(name: "Bubble Necklace", description: "Bubble like accessories! How cute!", price: 8, seller_id: 2 )
p6 = Product.create(name: "Cell Lamp", description: "Biology + Home decor? What more can you ask for!" , price: 1, seller_id: 3)
p7 = Product.create(name: "Chainmail", description: "3d printed lightweight chainmail! LARP LARP LARP !", price: 8, seller_id: 4)
p8 = Product.create(name: "Deadpool Bust", description: "Break the 4th wall will this magnficent piece!", price: 15, seller_id: 4)
p9 = Product.create(name: "Deer Wall Art", description: "Minimalistic deer decor.", price: 5, seller_id: 5)
p10 = Product.create(name: "DVA Necklace", description: "Love Overwatch and Giant Robots? How about a DVA Necklace?!", price: 6, seller_id: 5)
p11 = Product.create(name: "Ghost Decoration", description: "Ready for halloween? Get these spoooooky ghosts!" , price: 10, seller_id: 5)
p12 = Product.create(name: "Poly Hat", description: "Want a cap that doesn't provide shade, but looks cool? Look no further than this poly hat!", price: 9, seller_id: 6)
p13 = Product.create(name: "Headphone Stand", description: "Desk headphone stands. Universal size!", price: 7, seller_id: 6)
p14 = Product.create(name: "Hex Storage", description: "Completely modular hex storage! ", price: 5, seller_id: 6)
p15 = Product.create(name: "Kirby Exhaust", description: "Because why not? ", price: 8, seller_id: 7)
p16 = Product.create(name: "Custom Light Switch", description: "Bored of flipping a normal light switch? Turn that light switch into a steampunk switch!", price: 4, seller_id: 7)
p17 = Product.create(name: "Mario Planters", description: "It's a me, Mario!", price: 10, seller_id: 7)
p18 = Product.create(name: "Mini Catapault", description: "Medieval catapault for all the kix you don't eat." , price: 8, seller_id: 4)
p19 = Product.create(name: "Moon Lamp", description: "Highly detailed moon lamp, beautiful.", price: 9, seller_id: 3)
p20 = Product.create(name: "Music Necklace", description: "Necklace comprised of notes!", price: 10, seller_id: 1)
p21 = Product.create(name: "Octopus Toy", description: "Print in place with articulating limbs!", price: 8, seller_id: 1)
p22 = Product.create(name: "Wall Planter Decor", description: "Minimalist wall plant decor!", price: 5, seller_id: 2)
p23 = Product.create(name: "3D Puzzle", description: "Fun little puzzle for everyone!", price: 4, seller_id: 2)
p24 = Product.create(name: "Tealight Holder", description: "Lacey tealight holder!", price: 11 , seller_id:4 )
p25 = Product.create(name: "Hex Tie", description: "Actually a 3D Printed tie, actually.", price: 16, seller_id: 4)
p26 = Product.create(name: "Universal Mount", description: "Universal modular phone and camera mount" , price: 6, seller_id: 5)
p27 = Product.create(name: "Artsy Vase", description: "Artistic Vase for your minimalist home", price: 20, seller_id: 5)
p28 = Product.create(name: "Whistle", description: "One of the world's loudest whistles!", price: 5, seller_id:4 )
p29 = Product.create(name: "Wind Helix Decor", description: "Awesome minimal decor", price: 10, seller_id: 1)
p30 = Product.create(name: "Witcher Necklace", description: "Custom witcher necklace!", price: 10, seller_id: 1)