# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
CartItem.delete_all
Cart.delete_all
Category.delete_all
Product.delete_all
ProductCategory.delete_all
Review.delete_all

demo_user = User.create!(
  username: 'demo', 
  email: 'demo@demo.com', 
  password: '123123')

user2 = User.create!(
  username: 'fuller', 
  email: 'ful@ful.com', 
  password: '123123')

user3 = User.create!(
  username: 'john', 
  email: 'john@john.com', 
  password: '123123')

user4 = User.create!(
  username: 'jane', 
  email: 'jane@jane.com', 
  password: '123123')

user5 = User.create!(
  username: 'darren', 
  email: 'darren@darren.com', 
  password: '123123')

user6 = User.create!(
  username: 'lina', 
  email: 'lina@lina.com', 
  password: '123123')

user7 = User.create!(
  username: 'zachary', 
  email: 'zach@zach.com', 
  password: '123123')

user8 = User.create!(
  username: 'spencer', 
  email: 'spencer@spencer.com', 
  password: '123123');

c1 = Category.create!(name: 'Accessories')
c2 = Category.create!(name: 'Fashion')
c3 = Category.create!(name: 'Games')
c4 = Category.create!(name: 'Home')
c5 = Category.create!(name: 'Toys')
c6 = Category.create!(name: 'Entertainment')
c7 = Category.create!(name: 'Art')
c8 = Category.create!(name: 'Tools')


p1 = Product.create!(
  name: "Baby Yoda", 
  description: "Great gift for all star wars fans!", 
  price: 10.00, 
  seller_id: 1)

ProductCategory.create!(product_id: 1, category_id: 5)
ProductCategory.create!(product_id: 1, category_id: 6)
# p1.photo.attach(io: URI.open("s3://printsy-dev/seed/1.png"), filename: "1.png")
p1.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/1.png"), filename: "1.png")

p2 = Product.create!(
  name: "Baby Groot", 
  description: "Desktop stand for your headphones!" , 
  price: 5.50, 
  seller_id: 1)

ProductCategory.create!(product_id: 2, category_id: 5)
ProductCategory.create!(product_id: 2, category_id: 6)
ProductCategory.create!(product_id: 2, category_id: 7)
# p2.photo.attach(io: URI.open("s3://printsy-dev/seed/2.png"), filename: "2.png")
p2.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/2.png"), filename: "2.png")


p3 = Product.create!(
  name: "Bow Tie", 
  description: "3d printed bow tie! So snazzy", 
  price: 5.99, 
  seller_id: 2)

ProductCategory.create!(product_id: 3, category_id: 2)
# p3.photo.attach(io: URI.open("s3://printsy-dev/seed/3.png"), filename: "3.png")
p3.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/3.png"), filename: "3.png")

p4 = Product.create!(
  name: "Bracelet", 
  description: "Circular lacey bracelet! ",
  price: 10.50, 
  seller_id: 2)

ProductCategory.create!(product_id: 4, category_id: 2)
# p4.photo.attach(io: URI.open("s3://printsy-dev/seed/4.png"), filename: "4.png")
p4.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/4.png"), filename: "4.png")

p5 = Product.create!(
  name: "Bubble Necklace", 
  description: "Bubble like accessories! How cute!", 
  price: 8.49, 
  seller_id: 2 )

ProductCategory.create!(product_id: 5, category_id: 2)
# p5.photo.attach(io: URI.open("s3://printsy-dev/seed/5.png"), filename: "5.png")
p5.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/5.png"), filename: "5.png")

p6 = Product.create!(
  name: "Cell Lamp", 
  description: "Biology + Home decor? What more can you ask for!" , 
  price: 12.49, 
  seller_id: 3)

ProductCategory.create!(product_id: 6, category_id: 4)
ProductCategory.create!(product_id: 6, category_id: 7)
# p6.photo.attach(io: URI.open("s3://printsy-dev/seed/6.png"), filename: "6.png")
p6.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/6.png"), filename: "6.png")

p7 = Product.create!(
  name: "Chainmail", 
  description: "3d printed lightweight chainmail! LARP LARP LARP !", 
  price: 8.00, 
  seller_id: 4)

ProductCategory.create!(product_id: 7, category_id: 2)
ProductCategory.create!(product_id: 7, category_id: 1)
# p7.photo.attach(io: URI.open("s3://printsy-dev/seed/7.png"), filename: "7.png")
p7.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/7.png"), filename: "7.png")

p8 = Product.create!(
  name: "Deadpool Bust", 
  description: "Break the 4th wall will this magnficent piece!", 
  price: 15.50, 
  seller_id: 4)

ProductCategory.create!(product_id: 8, category_id: 7)
ProductCategory.create!(product_id: 8, category_id: 4)
ProductCategory.create!(product_id: 8, category_id: 6)
# p8.photo.attach(io: URI.open("s3://printsy-dev/seed/8.png"), filename: "8.png")
p8.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/8.png"), filename: "8.png")

p9 = Product.create!(
  name: "Deer Wall Art", 
  description: "Minimalistic deer decor.", 
  price: 5.25, 
  seller_id: 5)

ProductCategory.create!(product_id: 9, category_id: 4)
ProductCategory.create!(product_id: 9, category_id: 7)
# p9.photo.attach(io: URI.open("s3://printsy-dev/seed/9.png"), filename: "9.png")
p9.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/9.png"), filename: "9.png")

p10 = Product.create!(
  name: "DVA Necklace", 
  description: "Love Overwatch and Giant Robots? How about a DVA Necklace?!", price: 6.99, 
  seller_id: 5)

ProductCategory.create!(product_id: 10, category_id: 1)
ProductCategory.create!(product_id: 10, category_id: 6)
# p10.photo.attach(io: URI.open("s3://printsy-dev/seed/10.png"), filename: "10.png")
p10.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/10.png"), filename: "10.png")

p11 = Product.create!(
  name: "Ghost Decoration", 
  description: "Ready for halloween? Get these spoooooky ghosts!" , 
  price: 10.25, 
  seller_id: 5)

ProductCategory.create!(product_id: 11, category_id: 4)
# p11.photo.attach(io: URI.open("s3://printsy-dev/seed/11.png"), filename: "11.png")
p11.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/11.png"), filename: "11.png")

p12 = Product.create!(
  name: "Poly Hat", 
  description: "Want a cap that doesn't provide shade, but looks cool? Look no further than this poly hat!", 
  price: 9.50, 
  seller_id: 6)

ProductCategory.create!(product_id: 12, category_id: 2)
# p12.photo.attach(io: URI.open("s3://printsy-dev/seed/12.png"), filename: "12.png")
p12.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/12.png"), filename: "12.png")

p13 = Product.create!(
  name: "Headphone Stand", 
  description: "Desk headphone stands. Universal size!", 
  price: 7.50, 
  seller_id: 6)

ProductCategory.create!(product_id: 13, category_id: 8)
# p13.photo.attach(io: URI.open("s3://printsy-dev/seed/13.png"), filename: "13.png")
p13.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/13.png"), filename: "13.png")

p14 = Product.create!(
  name: "Hex Storage", 
  description: "Completely modular hex storage! ", 
  price: 5.00, 
  seller_id: 6)

ProductCategory.create!(product_id: 14, category_id: 8)
ProductCategory.create!(product_id: 14, category_id: 4)
# p14.photo.attach(io: URI.open("s3://printsy-dev/seed/14.png"), filename: "14.png")
p14.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/14.png"), filename: "14.png")

p15 = Product.create!(
  name: "Kirby Exhaust", 
  description: "Because why not? ", 
  price: 8.00, 
  seller_id: 7)

ProductCategory.create!(product_id: 15, category_id: 8)
ProductCategory.create!(product_id: 15, category_id: 6)
# p15.photo.attach(io: URI.open("s3://printsy-dev/seed/15.png"), filename: "15.png")
p15.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/15.png"), filename: "15.png")

p16 = Product.create!(
  name: "Custom Light Switch", 
  description: "Bored of flipping a normal light switch? Turn that light switch into a steampunk switch!", 
  price: 4.20, 
  seller_id: 7)

ProductCategory.create!(product_id: 16, category_id: 4)
# p16.photo.attach(io: URI.open("s3://printsy-dev/seed/16.png"), filename: "16.png")
p16.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/16.png"), filename: "16.png")

p17 = Product.create!(
  name: "Mario Planters", 
  description: "It's a me, Mario!", 
  price: 10.99, 
  seller_id: 7)

ProductCategory.create!(product_id: 17, category_id: 6)
ProductCategory.create!(product_id: 17, category_id: 4)
# p17.photo.attach(io: URI.open("s3://printsy-dev/seed/17.png"), filename: "17.png")
p17.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/17.png"), filename: "17.png")

p18 = Product.create!(
  name: "Mini Catapault", 
  description: "Medieval catapault for all the kix you don't eat." , 
  price: 8.99, 
  seller_id: 4)

ProductCategory.create!(product_id: 18, category_id: 5)
# p18.photo.attach(io: URI.open("s3://printsy-dev/seed/18.png"), filename: "18.png")
p18.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/18.png"), filename: "18.png")

p19 = Product.create!(
  name: "Moon Lamp", 
  description: "Highly detailed moon lamp, beautiful.", 
  price: 9.98, 
  seller_id: 3)

ProductCategory.create!(product_id: 19, category_id: 4)
ProductCategory.create!(product_id: 19, category_id: 7)
# p19.photo.attach(io: URI.open("s3://printsy-dev/seed/19.png"), filename: "19.png")
p19.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/19.png"), filename: "19.png")

p20 = Product.create!(
  name: "Music Necklace", 
  description: "Necklace comprised of notes!", 
  price: 10.49, 
  seller_id: 1)

ProductCategory.create!(product_id: 20, category_id: 1)
# p20.photo.attach(io: URI.open("s3://printsy-dev/seed/20.png"), filename: "20.png")
p20.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/20.png"), filename: "20.png")

p21 = Product.create!(
  name: "Octopus Toy", 
  description: "Print in place with articulating limbs!", 
  price: 8.00, 
  seller_id: 1)

ProductCategory.create!(product_id: 21, category_id: 5)
# p21.photo.attach(io: URI.open("s3://printsy-dev/seed/21.png"), filename: "21.png")
p21.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/21.png"), filename: "21.png")

p22 = Product.create!(
  name: "Wall Planter Decor", 
  description: "Minimalist wall plant decor!", 
  price: 5.00, 
  seller_id: 2)

ProductCategory.create!(product_id: 22, category_id: 4)
ProductCategory.create!(product_id: 22, category_id: 8)
# p22.photo.attach(io: URI.open("s3://printsy-dev/seed/22.png"), filename: "22.png")
p22.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/22.png"), filename: "22.png")

p23 = Product.create!(
  name: "3D Puzzle", 
  description: "Fun little puzzle for everyone!", 
  price: 4.25, 
  seller_id: 2)

ProductCategory.create!(product_id: 23, category_id: 5)
# p23.photo.attach(io: URI.open("s3://printsy-dev/seed/23.png"), filename: "23.png")
p23.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/23.png"), filename: "23.png")

p24 = Product.create!(
  name: "Tealight Holder", 
  description: "Lacey tealight holder!", 
  price: 11.25 , 
  seller_id:4 )

ProductCategory.create!(product_id: 24, category_id: 4)
# p24.photo.attach(io: URI.open("s3://printsy-dev/seed/24.png"), filename: "24.png")
p24.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/24.png"), filename: "24.png")

p25 = Product.create!(
  name: "Hex Tie", 
  description: "Actually a 3D Printed tie, actually.", 
  price: 16.50, 
  seller_id: 4)

ProductCategory.create!(product_id: 25, category_id: 2)
# p25.photo.attach(io: URI.open("s3://printsy-dev/seed/25.png"), filename: "25.png")
p25.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/25.png"), filename: "25.png")

p26 = Product.create!(
  name: "Universal Mount", 
  description: "Universal modular phone and camera mount" , 
  price: 6.99, 
  seller_id: 5)

ProductCategory.create!(product_id: 26, category_id: 8)
# p26.photo.attach(io: URI.open("s3://printsy-dev/seed/26.png"), filename: "26.png")
p26.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/26.png"), filename: "26.png")

p27 = Product.create!(
  name: "Artsy Vase", 
  description: "Artistic Vase for your minimalist home", 
  price: 20.00, 
  seller_id: 5)

ProductCategory.create!(product_id: 27, category_id: 7)
ProductCategory.create!(product_id: 27, category_id: 4)
# p27.photo.attach(io: URI.open("s3://printsy-dev/seed/27.png"), filename: "27.png")
p27.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/27.png"), filename: "27.png")

p28 = Product.create!(
  name: "Whistle", 
  description: "One of the world's loudest whistles!", 
  price: 5.00, 
  seller_id:4 )

ProductCategory.create!(product_id: 28, category_id: 5)
ProductCategory.create!(product_id: 28, category_id: 8)
# p28.photo.attach(io: URI.open("s3://printsy-dev/seed/28.png"), filename: "28.png")
p28.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/28.png"), filename: "28.png")

p29 = Product.create!(
  name: "Wind Helix Decor", 
  description: "Awesome minimal decor", 
  price: 10.49, 
  seller_id: 1)

ProductCategory.create!(product_id: 29, category_id: 4)
ProductCategory.create!(product_id: 29, category_id: 7)
# p29.photo.attach(io: URI.open("s3://printsy-dev/seed/29.png"), filename: "29.png")
p29.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/29.png"), filename: "29.png")

p30 = Product.create!(
  name: "Full Shoe Rack", 
  description: "Custom Shoe Rack!", 
  price: 15.49, 
  seller_id: 1)

ProductCategory.create!(product_id: 30, category_id: 4)
ProductCategory.create!(product_id: 30, category_id: 3)
# p30.photo.attach(io: URI.open("s3://printsy-dev/seed/30.png"), filename: "30.png")
p30.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/30.png"), filename: "30.png")

p31 = Product.create!(
  name: "Shoe Organizer", 
  description: "Cleaner shoe orgnanizer for your closet!", 
  price: 2.49, 
  seller_id: 2)

ProductCategory.create!(product_id: 31, category_id: 4)
ProductCategory.create!(product_id: 31, category_id: 3)
# p31.photo.attach(io: URI.open("s3://printsy-dev/seed/31.png"), filename: "31.png")
p31.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/31.png"), filename: "31.png")

p32 = Product.create!(
  name: "Quick Shoe Ties", 
  description: "Who needs to lace ever again? ", 
  price: 3.49, 
  seller_id: 8)

ProductCategory.create!(product_id: 32, category_id: 4)
ProductCategory.create!(product_id: 32, category_id: 3)
# p32.photo.attach(io: URI.open("s3://printsy-dev/seed/32.png"), filename: "32.png")
p32.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/32.png"), filename: "32.png")

p33 = Product.create!(
  name: "Wall Mounted Shoe Rack", 
  description: "Defy gravity with these shoe hooks!", 
  price: 5.49, 
  seller_id: 8)

ProductCategory.create!(product_id: 33, category_id: 4)
ProductCategory.create!(product_id: 33, category_id: 3)
# p33.photo.attach(io: URI.open("s3://printsy-dev/seed/33.png"), filename: "33.png")
p33.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/33.png"), filename: "33.png")


p34 = Product.create!(
  name: "Witcher Necklace",
  description: "White wolf medallion!",
  price: 10.99,
  seller_id: 4
)


ProductCategory.create!(product_id: 34, category_id: 1)
ProductCategory.create!(product_id: 34, category_id: 6)
# p34.photo.attach(io: URI.open("s3://printsy-dev/seed/34.png"), filename: "34.png")
p34.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/34.png"), filename: "34.png")


p35 = Product.create!(
  name: "Slim Card Wallet",
  description: "Flip up card wallet! Holds 5 to 8 cards (:",
  price: 10.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 35, category_id: 1)
ProductCategory.create!(product_id: 35, category_id: 8)

p35.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/35.png"), filename: "35.png")



p36 = Product.create!(
  name: "Hand of the King Pin",
  description: "For all you game of throne fans! Be the hand of the king!",
  price: 8.99,
  seller_id: 1
)


ProductCategory.create!(product_id: 36, category_id: 1)
ProductCategory.create!(product_id: 36, category_id: 6)

p36.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/36.png"), filename: "36.png")



p37 = Product.create!(
  name: "Batman Cufflinks",
  description: "Up that style with some custom batman cuff links!",
  price: 4.89,
  seller_id: 7
)

ProductCategory.create!(product_id: 37, category_id: 1)
ProductCategory.create!(product_id: 37, category_id: 2)
ProductCategory.create!(product_id: 37, category_id: 6)

p37.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/37.png"), filename: "37.png")



p38 = Product.create!(
  name: "Mask Quick Release Buckle",
  description: "Tired of your ears hurting? Come print these quick release buckles!",
  price: 3.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 38, category_id: 1)
ProductCategory.create!(product_id: 38, category_id: 8)

p38.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/38.png"), filename: "38.png")



p39 = Product.create!(
  name: "Dragon Hair Pin",
  description: "Take hat updo to the next level! Beautiful dragon sculpted hair pin",
  price: 12.99,
  seller_id: 6
)


ProductCategory.create!(product_id: 39, category_id: 1)
ProductCategory.create!(product_id: 39, category_id: 2)

p39.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/39.png"), filename: "39.png")



p40 = Product.create!(
  name: "Oni mask",
  description: "Awesome looking oni mask! Especially during these times!",
  price: 19.99,
  seller_id: 6
)


ProductCategory.create!(product_id: 40, category_id: 1)
ProductCategory.create!(product_id: 40, category_id: 2)
ProductCategory.create!(product_id: 40, category_id: 7)

p40.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/40.png"), filename: "40.png")



p41 = Product.create!(
  name: "Vase collection",
  description: "Awesome artistic articulating vases!",
  price: 29.99,
  seller_id: 4
)


ProductCategory.create!(product_id: 41, category_id: 4)
ProductCategory.create!(product_id: 41, category_id: 7)

p41.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/41.png"), filename: "41.png")



p42 = Product.create!(
  name: "Tensegrity Planter",
  description: "Amaze visitors with this awesome tensigrity planter!",
  price: 14.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 42, category_id: 4)
ProductCategory.create!(product_id: 42, category_id: 7)

p42.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/42.png"), filename: "42.png")



p43 = Product.create!(
  name: "Artistic Lantern",
  description: "Need more art for that 'minimalistic' home? Look no further! ",
  price: 39.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 43, category_id: 4)
ProductCategory.create!(product_id: 43, category_id: 7)

p43.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/43.png"), filename: "43.png")



p44 = Product.create!(
  name: "Collapsable Basket",
  description: "Save some space with these neat collapsable baskets!",
  price: 9.99,
  seller_id: 1
)


ProductCategory.create!(product_id: 44, category_id: 1)
ProductCategory.create!(product_id: 44, category_id: 8)

p44.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/44.png"), filename: "44.png")



p45 = Product.create!(
  name: "Bag handle",
  description: "Save your hands with this nifty bag handle! ",
  price: 4.99,
  seller_id: 1
)


ProductCategory.create!(product_id: 45, category_id: 8)

p45.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/45.png"), filename: "45.png")



p46 = Product.create!(
  name: "Home Mini Retro Alarm Clock",
  description: "Not only can they listen to you, but you can make it look like an old alarm clock!",
  price: 14.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 46, category_id: 4)

p46.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/46.png"), filename: "46.png")



p47 = Product.create!(
  name: "Iron Man Mask",
  description: "I mean... why wouldn't you want something like this? With the right tools, you can make it open and close automatically!",
  price: 29.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 47, category_id: 3)
ProductCategory.create!(product_id: 47, category_id: 6)
ProductCategory.create!(product_id: 47, category_id: 7)

p47.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/47.png"), filename: "47.png")



p48 = Product.create!(
  name: "Mechanical mini vise",
  description: "Miniature vise for smaller parts!",
  price: 8.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 48, category_id: 8)

p48.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/48.png"), filename: "48.png")



p49 = Product.create!(
  name: "DIY Rotary Drill Press",
  description: "Who needs an expensive drill press when you can make a miniature one that uses a dremel tool!",
  price: 14.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 49, category_id: 8)

p49.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/49.png"), filename: "49.png")



p50 = Product.create!(
  name: "Mini Sand Block",
  description: "Miniature sand block for all your needs!",
  price: 4.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 50, category_id: 8)

p50.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/50.png"), filename: "50.png")



p51 = Product.create!(
  name: "Pegboard Tools Holder",
  description: "Dynamic tool holder for your peg wall! Tons of variety for all your tools!",
  price: 10.99,
  seller_id: 4
)


ProductCategory.create!(product_id: 51, category_id: 8)

p51.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/51.png"), filename: "51.png")



p52 = Product.create!(
  name: "Soldering Wire Station",
  description: "Helping hands to keep your wires still while soldering! Comes in three sizes for a variety of wire diameters.",
  price: 5.99,
  seller_id: 4
)


ProductCategory.create!(product_id: 52, category_id: 8)

p52.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/52.png"), filename: "52.png")



p53 = Product.create!(
  name: "Hex tool handles",
  description: "Tired of hurting your hands trying to tigthen those dang hex screws? Print out some handles for all your sizes and needs!",
  price: 4.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 53, category_id: 8)

p53.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/53.png"), filename: "53.png")



p54 = Product.create!(
  name: "Iron Man Arc Reactor",
  description: "Finish that cosplay with this awesome arc reactor! LEDs not included.",
  price: 10.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 54, category_id: 1)
ProductCategory.create!(product_id: 54, category_id: 6)
ProductCategory.create!(product_id: 54, category_id: 5)

p54.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/54.png"), filename: "54.png")

p55 = Product.create!(
	name: "Ninja clothing hooks",
	description: "Awesome little home decor! Ninja clothing hooks!",
	price: 4.99,
	seller_id: 5
)

ProductCategory.create!(product_id: 55, category_id: 4)
ProductCategory.create!(product_id: 55, category_id: 8)

p55.photo.attach(io: open("https://printsy-dev.s3.us-west-1.amazonaws.com/seed/55.png"), filename: "55.png")

p56 = Product.create!(
  name: "Dr Doom Mask!",
  description: "Check out this awesome mask! Dr. Doom from Fantastic Four. DOES NOT INCLUDE CLOAK, just mask.",
  price: 14.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 56, category_id: 6)
ProductCategory.create!(product_id: 56, category_id: 2)
ProductCategory.create!(product_id: 56, category_id: 5)

p56.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/56.png"), filename: "56.png")



p57 = Product.create!(
  name: "Mandalorian Helmet",
  description: "This is the way. Become your favorite mando now!",
  price: 29.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 57, category_id: 6)
ProductCategory.create!(product_id: 57, category_id: 5)

p57.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/57.png"), filename: "57.png")



p58 = Product.create!(
  name: "Blue Spirit Mask",
  description: "Who is it under the mask? Inspired by the blue spirit in Avatar The Last Airbender. Finish your next cosplay now!",
  price: 9.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 58, category_id: 5)
ProductCategory.create!(product_id: 58, category_id: 6)

p58.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/58.png"), filename: "58.png")



p59 = Product.create!(
  name: "Wonder Woman Tiara",
  description: "Perfect for halloween or conventions! Does not come painted!",
  price: 19.99,
  seller_id: 1
)


ProductCategory.create!(product_id: 59, category_id: 1)
ProductCategory.create!(product_id: 59, category_id: 2)
ProductCategory.create!(product_id: 59, category_id: 6)
ProductCategory.create!(product_id: 59, category_id: 5)

p59.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/59.png"), filename: "59.png")



p60 = Product.create!(
  name: "Star Earrings",
  description: "Print out these cute star earrings!",
  price: 4.99,
  seller_id: 2
)


ProductCategory.create!(product_id: 60, category_id: 1)
ProductCategory.create!(product_id: 60, category_id: 2)

p60.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/60.png"), filename: "60.png")



p61 = Product.create!(
  name: "Jack Skellington Earrings!",
  description: "Nightmare before Christmas, but on your ears! Take the iconic character and embrace him!",
  price: 8.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 61, category_id: 1)
ProductCategory.create!(product_id: 61, category_id: 6)

p61.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/61.png"), filename: "61.png")



p62 = Product.create!(
  name: "Hummingbird Earrings",
  description: "Take these beautiful pieces of art and rock them on the daily!",
  price: 7.99,
  seller_id: 2
)


ProductCategory.create!(product_id: 62, category_id: 1)
ProductCategory.create!(product_id: 62, category_id: 6)

p62.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/62.png"), filename: "62.png")



p63 = Product.create!(
  name: "Mooncake Earrings",
  description: "Take a piece of culture with you everyday! Moon cake earrings :D",
  price: 8.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 63, category_id: 1)

p63.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/63.png"), filename: "63.png")



p64 = Product.create!(
  name: "Rupee Earrings",
  description: "Get that zelda on with these beautiful earrings!",
  price: 8.99,
  seller_id: 6
)


ProductCategory.create!(product_id: 64, category_id: 1)
ProductCategory.create!(product_id: 64, category_id: 3)
ProductCategory.create!(product_id: 64, category_id: 6)

p64.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/64.png"), filename: "64.png")



p65 = Product.create!(
  name: "Majora's Mask",
  description: "Become the next skull kid! Take this iconic mask and become the best cosplay of the party!",
  price: 39.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 65, category_id: 3)
ProductCategory.create!(product_id: 65, category_id: 6)

p65.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/65.png"), filename: "65.png")



p66 = Product.create!(
  name: "My Neighbor Totoro Figures!",
  description: "LOOK AT THESE ADORABLE FIGURES. NOW BUY IT. :D",
  price: 8.99,
  seller_id: 2
)


ProductCategory.create!(product_id: 66, category_id: 6)
ProductCategory.create!(product_id: 66, category_id: 5)

p66.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/66.png"), filename: "66.png")



p67 = Product.create!(
  name: "Artistic Skull ",
  description: "Artistic rendition of a skull! Great art piece!",
  price: 7.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 67, category_id: 7)
ProductCategory.create!(product_id: 67, category_id: 4)

p67.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/67.png"), filename: "67.png")



p68 = Product.create!(
  name: "Pokeball with Stand",
  description: "Store random things in this awesome pokeball! Button works! Just need to buy spring.",
  price: 8.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 68, category_id: 5)
ProductCategory.create!(product_id: 68, category_id: 3)

p68.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/68.png"), filename: "68.png")



p69 = Product.create!(
  name: "Collapsable lightsaber!",
  description: "Bring back those childhood memories with this awesome collapsable print in place lightsaber",
  price: 6.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 69, category_id: 5)
ProductCategory.create!(product_id: 69, category_id: 6)
ProductCategory.create!(product_id: 69, category_id: 3)

p69.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/69.png"), filename: "69.png")



p70 = Product.create!(
  name: "Castle dice tower",
  description: "Step up those D&D games with this awesome dice tower! DOES NOT COME PRE PAINTED.",
  price: 8.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 70, category_id: 3)
ProductCategory.create!(product_id: 70, category_id: 5)

p70.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/70.png"), filename: "70.png")



p71 = Product.create!(
  name: "Collapsable Katana",
  description: "The OG collapsable item! Check this print in place katana",
  price: 6.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 71, category_id: 3)
ProductCategory.create!(product_id: 71, category_id: 5)

p71.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/71.png"), filename: "71.png")



p72 = Product.create!(
  name: "Pokeball Deck Box",
  description: "Show up your friends with this awesome 3d printed deck box! Fits commander decks!",
  price: 8.99,
  seller_id: 6
)


ProductCategory.create!(product_id: 72, category_id: 3)

p72.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/72.png"), filename: "72.png")


p73 = Product.create!(
  name: "Rotating Targets",
  description: "Awesome rotating targets! Perfect for NERF or light archery",
  price: 8.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 73, category_id: 5)

p73.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/73.png"), filename: "73.png")



p74 = Product.create!(
  name: "Custom NERF Blaster 1",
  description: "DOES NOT COME WITH HARDWARE. Print out this awesome custom nerf blaster!",
  price: 29.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 74, category_id: 5)
ProductCategory.create!(product_id: 74, category_id: 3)

p74.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/74.png"), filename: "74.png")



p75 = Product.create!(
  name: "Custom NERF Blaster 2",
  description: "DOES NOT COME WITH HARDWARE. Print out this awesome custom nerf blaster! Lever action version!",
  price: 29.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 75, category_id: 5)
ProductCategory.create!(product_id: 75, category_id: 3)

p75.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/75.png"), filename: "75.png")



p76 = Product.create!(
  name: "Custom NERF Blaster 3",
  description: "DOES NOT COME WITH HARDWARE. Print out this awesome nerf blaster! Mag Version!",
  price: 29.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 76, category_id: 5)
ProductCategory.create!(product_id: 76, category_id: 3)

p76.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/76.png"), filename: "76.png")



p77 = Product.create!(
  name: "Custom NERF Blaster 4",
  description: "DOES NOT COME WITH HARDWARE. Print out this awesome nerf blaster! Mini Version!",
  price: 29.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 77, category_id: 1)
ProductCategory.create!(product_id: 77, category_id: 6)

p77.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/77.png"), filename: "77.png")



p78 = Product.create!(
  name: "Custome NERF BLaster 5",
  description: "DOES NOT COME WITH HARDWARE. Print out this awesome nerf blaster! SMG Version!",
  price: 10.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 78, category_id: 1)
ProductCategory.create!(product_id: 78, category_id: 6)

p78.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/78.png"), filename: "78.png")



p79 = Product.create!(
  name: "Artistic Chess Set",
  description: "Awesome artistic chess set!",
  price: 11.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 79, category_id: 7)
ProductCategory.create!(product_id: 79, category_id: 3)

p79.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/79.png"), filename: "79.png")



p80 = Product.create!(
  name: "Bottle opener shooter!",
  description: "Awesome bottle opener that also doubles as a little blaster! Rubberband not included!",
  price: 5.99,
  seller_id: 5
)


ProductCategory.create!(product_id: 80, category_id: 5)
ProductCategory.create!(product_id: 80, category_id: 8)

p80.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/80.png"), filename: "80.png")



p81 = Product.create!(
  name: "Cable Tie",
  description: "PRINT WITH FLEXIBLE FILAMENT. Awesome cable ties!",
  price: 3.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 81, category_id: 8)

p81.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/81.png"), filename: "81.png")



p82 = Product.create!(
  name: "Organization racks!",
  description: "Little organization racks, stackable!",
  price: 8.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 82, category_id: 8)

p82.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/82.png"), filename: "82.png")



p83 = Product.create!(
  name: "Artistic Cat Heart Piece",
  description: "For all the cat lovers! Great heart sculpt, ideal for any modern aesthetic",
  price: 12.99,
  seller_id: 6
)


ProductCategory.create!(product_id: 83, category_id: 7)
ProductCategory.create!(product_id: 83, category_id: 4)

p83.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/83.png"), filename: "83.png")



p84 = Product.create!(
  name: "Artistic Buckle/Button",
  description: "Awesome artsy button/buckle!",
  price: 5.99,
  seller_id: 6
)


ProductCategory.create!(product_id: 84, category_id: 1)
ProductCategory.create!(product_id: 84, category_id: 2)

p84.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/84.png"), filename: "84.png")



p85 = Product.create!(
  name: "Cyclops Headpiece/Glasses",
  description: "Awesome cyclops headpiece! Does not come with red visor!",
  price: 7.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 85, category_id: 1)
ProductCategory.create!(product_id: 85, category_id: 6)

p85.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/85.png"), filename: "85.png")



p86 = Product.create!(
  name: "Bender Head",
  description: "Awesome bender art piece! ",
  price: 8.99,
  seller_id: 8
)


ProductCategory.create!(product_id: 86, category_id: 6)
ProductCategory.create!(product_id: 86, category_id: 4)

p86.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/86.png"), filename: "86.png")



p87 = Product.create!(
  name: "Octopus Cactus Planter",
  description: "Cut little octopus cactus planter!",
  price: 14.99,
  seller_id: 7
)


ProductCategory.create!(product_id: 87, category_id: 4)

p87.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/87.png"), filename: "87.png")



p88 = Product.create!(
  name: "Crystalline Coasters",
  description: "White wolf medallion!",
  price: 18.99,
  seller_id: 1
)


ProductCategory.create!(product_id: 88, category_id: 4)
ProductCategory.create!(product_id: 88, category_id: 8)

p88.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/88.png"), filename: "88.png")



p89 = Product.create!(
  name: "Ahsoka Tano Hilts",
  description: "BEAUTIFUL art pieces. Ahsoka tano saber hilts!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 89, category_id: 7)
ProductCategory.create!(product_id: 89, category_id: 6)

p89.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/89.png"), filename: "89.png")



p90 = Product.create!(
  name: "Kylo Ren Hilt",
  description: "BEAUTIFUL art pieces. Kylo Ren saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 90, category_id: 7)
ProductCategory.create!(product_id: 90, category_id: 6)

p90.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/90.png"), filename: "90.png")



p91 = Product.create!(
  name: "Darth Vader Hilt",
  description: "BEAUTIFUL art pieces. Darth Vader saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 91, category_id: 7)
ProductCategory.create!(product_id: 91, category_id: 6)

p91.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/91.png"), filename: "91.png")



p92 = Product.create!(
  name: "Luke Skywalker Hilt",
  description: "BEAUTIFUL art pieces. Luke Skywalker saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 92, category_id: 7)
ProductCategory.create!(product_id: 92, category_id: 6)

p92.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/92.png"), filename: "92.png")



p93 = Product.create!(
  name: "Anakin Skywalker Hilt",
  description: "BEAUTIFUL art pieces. Anakin Skywalker saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 93, category_id: 7)
ProductCategory.create!(product_id: 93, category_id: 6)

p93.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/93.png"), filename: "93.png")



p94 = Product.create!(
  name: "Obi-wan Kenobi Hilt",
  description: "BEAUTIFUL art pieces. Obi-wan Kenobi saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 94, category_id: 7)
ProductCategory.create!(product_id: 94, category_id: 6)

p94.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/94.png"), filename: "94.png")



p95 = Product.create!(
  name: "Yoda Hilt",
  description: "BEAUTIFUL art pieces. Yoda saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 95, category_id: 7)
ProductCategory.create!(product_id: 95, category_id: 6)

p95.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/95.png"), filename: "95.png")



p96 = Product.create!(
  name: "Dark Saber Hilt",
  description: "BEAUTIFUL art pieces. Dark Saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 96, category_id: 7)
ProductCategory.create!(product_id: 96, category_id: 6)

p96.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/96.png"), filename: "96.png")



p97 = Product.create!(
  name: "Count Dooku Saber Hilt",
  description: "BEAUTIFUL art pieces. Count Dooku saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 97, category_id: 7)
ProductCategory.create!(product_id: 97, category_id: 6)

p97.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/97.png"), filename: "97.png")



p98 = Product.create!(
  name: "Mace Windu Saber Hilt",
  description: "BEAUTIFUL art pieces. Mace Windu saber hilt!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 98, category_id: 7)
ProductCategory.create!(product_id: 98, category_id: 6)

p98.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/98.png"), filename: "98.png")



p99 = Product.create!(
  name: "Darth Maul Double Saber Hilt",
  description: "BEAUTIFUL art pieces. Darth Maul saber hilts!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 99, category_id: 7)
ProductCategory.create!(product_id: 99, category_id: 6)

p99.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/99.png"), filename: "99.png")



p100 = Product.create!(
  name: "Rey Skywalker Saber Hilt",
  description: "BEAUTIFUL art pieces. Rey Skywalker saber hilts!",
  price: 39.99,
  seller_id: 3
)


ProductCategory.create!(product_id: 100, category_id: 7)
ProductCategory.create!(product_id: 100, category_id: 6)

p100.photo.attach(io: open("https://printsy-dev.s3-us-west-1.amazonaws.com/seed/100.png"), filename: "100.png")



cart1 = Cart.create!(user_id: 1)
cart2 = Cart.create!(user_id: 2)
cart3 = Cart.create!(user_id: 3)
cart4 = Cart.create!(user_id: 4)
cart5 = Cart.create!(user_id: 5)
cart6 = Cart.create!(user_id: 6)
cart7 = Cart.create!(user_id: 7)
cart8 = Cart.create!(user_id: 8)



