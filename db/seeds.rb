# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create(email: "user@example.com", name: "John", password: "password", goal: 50, image_url: "image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3")
user2 = User.create(email: "antoher@example.com", name: "Bob", password: "password", goal: 50, image_url: "image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3")
user3 = User.create(email: "water@example.com", name: "Pablo", password: "password", goal: 50, image_url: "image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3")
user4 = User.create(email: "yeyey@example.com", name: "Rudy", password: "password", goal: 50, image_url: "image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3")
user5 = User.create(email: "antohyeyeyer@example.com", name: "Ansel", password: "password", goal: 50, image_url: "image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3")
user6 = User.create(email: "wawawawater@example.com", name: "Alejandro", password: "password", goal: 50, image_url: "image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "image/upload/yapttrdmvfiln9wk8bnx")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "image/upload/yapttrdmvfiln9wk8bnx")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user2.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user2.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user3.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user1.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user4.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user5.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user6.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user5.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: user3.id, title: "tree", description: "great", image_file_name: "image/upload/v1439954562/StarryNight2436_yimked")
Category.create(name: "Paint", image_url: "/../assets/painting-process.jpg")
Category.create(name: "Photography", image_url: "/../assets/photographer-33.jpg")
Category.create(name: "Mural", image_url: "/../assets/mural.jpg")
Category.create(name: "Fashion", image_url: "/../assets/fashion.jpeg")
Category.create(name: "Ceramics", image_url: "/../assets/fashion.jpeg")
Category.create(name: "Acting", image_url: "/../assets/fashion.jpeg")
Category.create(name: "Song", image_url: "/../assets/fashion.jpeg")
Category.create(name: "Stand-Up", image_url: "/../assets/fashion.jpeg")
Category.create(name: "Music", image_url: "/../assets/fashion.jpeg")
Category.create(name: "Film", image_url: "/../assets/fashion.jpeg")



Categorizing.create(category_id: 1, categorizable_type: "User", categorizable_id: 1)
Categorizing.create(category_id: 1, categorizable_type: "User", categorizable_id: 2)
Categorizing.create(category_id: 1, categorizable_type: "User", categorizable_id: 8)
Categorizing.create(category_id: 1, categorizable_type: "User", categorizable_id: 4)
Categorizing.create(category_id: 2, categorizable_type: "User", categorizable_id: 1)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 8)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 2)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 3)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 4)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 1)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 3)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 1)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 1)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 1)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 8)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 8)
