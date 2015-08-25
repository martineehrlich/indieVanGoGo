# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create(name: "All Categories", image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440087633/streetart_jiw6ev.jpg")
Category.create(name: "Paint", image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440017987/painting-process_vmrrfz.jpg")
Category.create(name: "Photography", image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440017987/photographer-33_gxbwjh.jpg")
Category.create(name: "Mural", image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440017989/mural_mwcfhe.jpg")
# Category.create(name: "Fashion", image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440017988/fashion_dkdofq.jpg")

vangogh_description = "I am a post-impressionist painter from Groot-Zundert, Netherlands. My work is notable for its beauty, emotion and color. I have been inspired by my friends and french contemporaries such as Monet and Pissarro. My paintings are oil on canvas. I like to paint figures, landscapes, cityscapes, and scenery. I hope you enjoy looking through my work."
vangogh = User.create(email: "vincent@vangogh.com", name: "Vincent Van Gogh", description: vangogh_description, password: "password", goal: 1000, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440387868/fr9wywlwfjfaueywhrlm.jpg")
starry_night = "This is an oil on canvas painting. It depicts the view from the east-facing window of my asylum room just before sunrise, with the addition of an idealized village below."
irises = "This is an oil on canvas painting I created during my time at an asylum. It is greatly influenced by Japanese ukiyo-e woodblock prints."
cafe = "This is a coloured oil piece I painted in Arles, France. Here you have a night painting without black, with nothing but beautiful blue and violet and green and in this surrounding the illuminated area colors itself sulfur pale yellow and citron green."
Art.create(artist_id: vangogh.id, title: "The Starry Night", description: starry_night, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1439954562/StarryNight2436_yimked")
Art.create(artist_id: vangogh.id, title: "Irises", description: irises, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447694/irises_de3e9g.jpg")
Art.create(artist_id: vangogh.id, title: "Café Terrace at Night", description: cafe, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447720/cafe-terrance_bsdqbe.jpg")

picasso_description = "I am a Spanish expatriate painter, sculptor, printmaker, ceramicist and stage designer. Throughout my artistic life I have gone through many different periods and explored many different styles as you can see in my work below. I am the co-creator of Cubism which you can see in a couple of my pieces below. Enjoy my work."
picasso = User.create(email: "pablo@picasso.com", name: "Pablo Picasso", description: picasso_description, password: "password", goal: 1400, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1439953244/s-PABLO-PICASSO-large640_xgn6t3.jpg")
weeping_woman = "This painting is an oil on canvas and is one of many paintings in the Weeping Woman series. The model for this image, and for the entire series, is my friend Dora Maar."
three_musicians = "This is an oil on canvas piece I painted in Fontainebleau, France. It exemplifies the Synthetic Cubist style."
the_old_guitarist = "This is a painting I made right as the Expressionism movement was beginning.  This piece was made during my Blue Period, where my work was greatly influenced by El Greco and the poor standard of living."
 girl_mirror = "This painting was created during my cubism period. The subject of the painting is Marie-Therese Walter."
Art.create(artist_id: picasso.id, title: "The Weeping Woman", description: weeping_woman, image_file_name: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447687/the-weeping-woman_rrralj.jpg")
Art.create(artist_id: picasso.id, title: "Three Musicians", description: three_musicians, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447681/three-musicians_p7za8s.jpg")
Art.create(artist_id: picasso.id, title: "The Old Guitarist", description: the_old_guitarist, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447686/the-old-guitarist_l5pywv.jpg")
Art.create(artist_id: picasso.id, title: "Girl Before a Mirror", description: girl_mirror, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447674/girl-before-a-mirror_kuinne.jpg")

monet_description = "I am a French painter. I love capturing light and natural forms, which is how I got into impressionism. Eugène Boudin, an artist from my town, encouraged me to become a landscape painter. My paintings often depict the landscape and leisure activities of Paris and its environs as well as the Normandy coast. Enjoy my work."
monet = User.create(email: "claude@monet.com", name: "Claude Monet", description: monet_description, password: "password", goal: 200, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440448466/Claude_Monet_1899_Nadar_crop_luob70.jpg")
impression = "This painting is attributed to giving rise to the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre (the harbor) in my hometown."
parasol = "This is an oil-on-canvas painting I made in 1875. It is an impressionist piece depicting my wife Camille Monet and our son Jean Monet while we were living in Argenteuil, capturing a moment on a stroll on a windy summer's day."
waterlilies = "This is an oil-on-canvas piece I painted during my series called Water Lilies. The painting depicts a scene in a French pond showing light reflecting off the water with Water Lilies on the surface."
Art.create(artist_id: monet.id, title: "Impression, Sunrise", description: impression, image_file_name: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447727/impression-sunrise_jywrv1.jpg")
Art.create(artist_id: monet.id, title: "Woman with a Parasol", description: parasol, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447666/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project_sjneqp.jpg")
Art.create(artist_id: monet.id, title: "Water Lilies", description: waterlilies, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447699/water-liles-monet_i1wgay.jpg")

rothko_description = "I am a painter from Russia but moved to the United States when I was young. I am an Abstract Expressionist. Most of my works are large-scale paintings of luminous colored rectangles. My work is simple but is known to evoke emotional responses. Enjoy."
rothko = User.create(email: "mark@rothko.com", name: "Mark Rothko", description: rothko_description, password: "password", goal: 5000, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440449202/markrothko_d3pkhy.png")

rust = "I made this expressionist painting in 1953. In common with my other works from this period, No. 61 consists of large expanses of colour delineated by uneven, hazy shades."
untitled = "This painting is similar to my others in that it has two distinctly separated elements. This painting along with the other black and grey ones in the series are meant to represent death."
red = "In this painting I used my favorite colors to paint with: black, brown and red."
royal = "This is an oil-on-canvas expressionist piece using blue, pink and orange."
Art.create(artist_id: rothko.id, title: "No. 61 (Rust and Blue)", description: rust, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447652/number-61_kayerr.jpg")
Art.create(artist_id: rothko.id, title: "Untitled (Black on Grey)", description: untitled, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447652/Untitled_Black_on_Gray_au9rvw.jpg")
Art.create(artist_id: rothko.id, title: "Four Darks in Red", description: red, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447650/RothkoFourDarksRed_frbfhq.jpg")
Art.create(artist_id: rothko.id, title: "No 1 (Royal Red and Blue)", description: royal, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447648/No_1__Royal_Red_and_Blue__by_Mark_Rothko__1954_zmh5ec.jpg")

georgia_description = "I am an American modernist seeking to capture the emotion and power of objects through abstractingthe natural world. My subjects are flowers, barren landscapes, and close-up still lifes that have become a part of the mythology and iconography of the American artistic landscape."
georgia = User.create(email: "georgia@okeeffe.com", name: "Georgia O'Keeffe", description: georgia_description, password: "password", goal: 5000, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440449199/georgia_qlofbu.jpg")

ram = "I painted this piece shortly after moving to New Mexico. I was inspired by the isolation and beauty of the natural environment surrounding me."
canna = "In this piece I vastly enlarge the fragment of the blossom to fill the thirty-six-inch canvas."
grey = "This painting is similar to many of my others in that is organic and shows the beatiful shapes of flowers."
blue_and_green = "This is an oil-on-canvas piece using blue and green, and continues my theme of painting nature."
poppy = "Here the entire canvas is filled with soft, undulating, forms, executed in luminous reds and blacks. The use of carefully modulated tonalities reminiscent of watercolour paintings, gives the impression of light, ephemeral forms floating in on undefined space."
Art.create(artist_id: georgia.id, title: "Ram's Head, Blue Morning Glory", description: ram, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447649/rams-head-blue-morning-glory_spnl5n.jpg")
Art.create(artist_id: georgia.id, title: "Untitled (Black on Grey)", description: canna, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447644/red-canna_fx7por.jpg")
Art.create(artist_id: georgia.id, title: "Grey Lines with Black", description: grey, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447642/grey-line-with-black-blue-and-yellow_rqhk8j.jpg")
Art.create(artist_id: georgia.id, title: "Blue and Green Music", description: blue_and_green, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447639/blue-and-green-music_yny74k.jpg")
Art.create(artist_id: georgia.id, title: "Poppy", description: poppy, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440450998/RedPoppy-Final_oes2dt.jpg")


Categorizing.create(category_id: 2, categorizable_type: "User", categorizable_id: 1)
Categorizing.create(category_id: 2, categorizable_type: "User", categorizable_id: 2)
Categorizing.create(category_id: 2, categorizable_type: "User", categorizable_id: 3)
Categorizing.create(category_id: 2, categorizable_type: "User", categorizable_id: 4)
Categorizing.create(category_id: 2, categorizable_type: "User", categorizable_id: 5)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 1)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 2)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 3)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 4)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 5)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 6)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 7)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 8)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 9)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 10)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 11)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 12)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 13)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 14)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 15)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 16)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 17)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 18)
Categorizing.create(category_id: 2, categorizable_type: "Art", categorizable_id: 19)


# Photography
ansel_description = "I am a musician turned photographer. My black-and-white images are not “realistic” documents of nature. Instead, they seek an intensification and purification of the psychological experience of natural beauty. I create a sense of the sublime magnificence of nature that infuses the viewer with the emotional equivalent of wilderness, often more powerful than the actual thing."
ansel = User.create(email: "ansel@adams.com", name: "Ansel Adams", description: ansel_description, password: "password", goal: 1000, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440453185/anseladams_yt6by6.jpg")

tetons = "The photo was taken in 1942 in northwest Wyoming's Grand Teton National Park, the photograph shows a mesmerizing combination of the turning Snake River in the background of Teton mountain range."
halfdome = "I took this photo in Yosemite. The slight perspective distortion of the extreme oblique view compressed the Dome into a vertical tower, emphasized by the line of shadow in the center."
canyon = "This photograph was taken in 1942 on the unfinished Canyon de Chelly National Monuments. It is located in northeastern Arizona within the boundaries of the Navajo Nation. Reflecting one of the longest continuously inhabited landscapes of North America, it preserves ruins of the early indigenous tribes that lived in the area, including the Ancient Pueblo Peoples (also called Anasazi) and Navajo."
church = "I took this photo on my first trip east of the Sierra and the Cajon Pass."
aspen = "I took this photo in 1937, on a trip through New Mexico, Arizona and Colorado with Dave McAlpin, Georgia O'Keeffe and a guide named Orville Cox. This photograph shows the shimmering beauty of an aspen grove in New Mexico."
rose = "I took this photograph in my home in San Francisco. It was not a planned picture in that the two components came together fortuitously. My mother had brought in this large pale pink rose from the garden."
Art.create(artist_id: ansel.id, title: "The Tetons and the Snake River", description: tetons, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447717/Adams_The_Tetons_and_the_Snake_River_ejudvo.jpg")
Art.create(artist_id: ansel.id, title: "Moon and Halfdome", description: halfdome, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440453147/moon_kd8hqi.jpg")
Art.create(artist_id: ansel.id, title: "Canyon de Chelly", description: canyon, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440453150/canyon_ygdxtd.jpg")
Art.create(artist_id: ansel.id, title: "Church in Taos Pueblo", description: church, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440453351/church_qem64g.jpg")
Art.create(artist_id: ansel.id, title: "Aspen Grove", description: aspen, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440453151/aspen_dskege.jpg")
Art.create(artist_id: ansel.id, title: "Rose and Driftwood", description: rose, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440453148/rose_w3fqkt.jpg")
newman_description = "I am a photographer originally from New York City. I am a pioneer of the environmental portrait, but am also known for my still life and abstract photography. I have photographed some of the most famous people in the world, as you will see below. Enjoy my work."
newman = User.create(email: "arnold@newman.com", name: "Arnold Newman", description: newman_description, password: "password", goal: 100000, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440455991/Arnold_Newman_clvntq.jpg")

monroe = "Portrait of Marylin Monroe taken in 1962."
capote = "Portrait of Truman Capote taken in 1977."
dali = "Portrait of Salvador Dali taken in 1951."
roosevelt = "Portrait of Eleanor Roosevelt taken in 1962."
igor = "Portrait of Igor Stravinsky taken in 1946."
krupp = "Portrait of Alfred Krupp taken in 1963."
robbins = "Portrait of Jerome Robbins taken in 1958"
pablo = "Portrait of Pablo Picasso taken in 1954"
pollock = "Portrait of Jackson Pollock taken in 1949."
Art.create(artist_id: newman.id, title: "Marylin Monroe Hollywood CA 1962", description: monroe, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440455069/marylinnew_sl4lib.jpg")
Art.create(artist_id: newman.id, title: "Truman Capote New York NY 1977", description: capote, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440455070/capotereal_sbl23g.jpg")
Art.create(artist_id: newman.id, title: "Salvador Dali New York NY 1951", description: dali, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447629/salvadoredali_j1ja7x.jpg")
Art.create(artist_id: newman.id, title: "Eleanor Roosevelt New York NY 1962", description: roosevelt, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440455069/eleanorroosevelt_ywrrxv.jpg")
Art.create(artist_id: newman.id, title: "Igor Stravinsky New York NY 1946", description: igor, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447628/piano_yigfzr.jpg")
Art.create(artist_id: newman.id, title: "Alfred Krupp Essen Germany 1963", description: krupp, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447627/kruppnewman_fuk11l.jpg")
Art.create(artist_id: newman.id, title: "Jerome Robbins American Ballet School 1958", description: robbins, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447650/jeromerobbins_xefbhs.jpg")
Art.create(artist_id: newman.id, title: "Pablo Picasso Vallauris France 1954", description: pablo, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440447634/newmanpicasso_gdpgmu.jpg")
Art.create(artist_id: newman.id, title: "Jackson Pollock, Springs, New York, 1949", description: pollock, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440455070/jackson-pollock_vqamcn.jpg")

Categorizing.create(category_id: 3, categorizable_type: "User", categorizable_id: 6)
Categorizing.create(category_id: 3, categorizable_type: "User", categorizable_id: 7)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 20)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 21)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 23)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 24)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 25)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 26)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 27)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 28)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 29)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 30)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 31)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 32)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 33)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 34)
Categorizing.create(category_id: 3, categorizable_type: "Art", categorizable_id: 35)

# muralists
diego_description = "I am a painter from Mexico. I am most well known for my frescoes and controversial murals."
diego = User.create(email: "diego@rivera.com", name: "Diego Rivera", description: diego_description, password: "password", goal: 1000, image_url: "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440455991/Arnold_Newman_clvntq.jpg")

first = "This is a mural I painted in 1931. In the early 1930s, an era of widespread labor unrest, images of the violent repression of strikes would have resonated with both U.S. and Latin American audiences. The battle here stands as a potent symbol of universal class struggle."
second = "This mural is one in my Detroit Industry Murals series which consists of twenty-seven panels depicting industry at the Ford Motor Company. Together they surround the Rivera Court in the Detroit Institute of Arts. The murals depict the workers at the Ford River Rouge Complex in Dearborn Michigan. During the time Detroit was an advanced industrial complex, and was home to the largest manufacturing industry of the world."
third = "This mural was controversial because it included an image of Lenin and a Soviet Russian May Day parade. Despite protests from artists, Nelson Rockefeller ordered its destruction before it was completed. I repainted the composition in Mexico under the variant title Man, Controller of the Universe."
fourth = "After idealizing various pre-Hispanic cultures in the preceding panels and generally eliminating any negative elements (their wars, human sacrifices, and subjugation of fellow indians), I depict in dramatic fashion the violence and exploitation of the Spanish conquerors. Natives hanging in the background, the branding of the native in the foreground, and the reduction of the indians to slaves and pack horses show the cruelty and savagery of the Conquest. The scene above left depicts the first religious service held on the coast of Veracruz."
fifth = "This painting is about art, religion, history, politics, and technology of the Americas. I painted it in 1940 as part of the Golden Gate International Exposition on Treasure Island in the San Francisco Bay."
Art.create(artist_id: diego.id, title: "The Jewel of Detroit", description: second, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440479159/thejewelofdetroit_bjjrzx.jpg")
Art.create(artist_id: diego.id, title: "The Uprising", description: first, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440479154/theuprisingdiegorivera_pzmirl.jpg")
Art.create(artist_id: diego.id, title: "The arrival of Cortes", description: fourth, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440479151/diegoriverarrivalofcortez_rs4gaw.jpg")
Art.create(artist_id: diego.id, title: "Pan American Unity", description: fifth, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440479150/diegorivera2_ubesja.jpg")
Art.create(artist_id: diego.id, title: "Man, Controller of the Universe", description: third, image_file_name:"http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/image/upload/v1440479149/diego-river-controller_r6caof.jpg")

Categorizing.create(category_id: 4, categorizable_type: "User", categorizable_id: 8)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 36)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 37)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 38)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 39)
Categorizing.create(category_id: 4, categorizable_type: "Art", categorizable_id: 40)

Patron.create(name: "Gertrude Stein", artist_id: 1, amount: 500)
Patron.create(name: "Gertrude Stein", artist_id: 2, amount: 50)
Patron.create(name: "Gertrude Stein", artist_id: 3, amount: 10)
Patron.create(name: "Gertrude Stein", artist_id: 4, amount: 40)
Patron.create(name: "Gertrude Stein", artist_id: 5, amount: 500)
Patron.create(name: "Gertrude Stein", artist_id: 6, amount: 100, anonymous: true)
Patron.create(name: "Gertrude Stein", artist_id: 7, amount: 50, anonymous: true)
Patron.create(name: "Bob Murray", artist_id: 1, amount: 50)
Patron.create(name: "Bob Murray", artist_id: 2, amount: 50)
Patron.create(name: "Bob Murray", artist_id: 3, amount: 10)
Patron.create(name: "Cindy Salt", artist_id: 4, amount: 40)
Patron.create(name: "William Hastings", artist_id: 5, amount: 500)
Patron.create(name: "Paul Tan", artist_id: 6, amount: 100, anonymous: true)
Patron.create(name: "Gertrude Stein", artist_id: 7, amount: 50, anonymous: true)
Patron.create(name: "Lauren Chernak", artist_id: 1, amount: 50)
Patron.create(name: "William Hastings", artist_id: 2, amount: 50)
Patron.create(name: "Cindy Salt", artist_id: 3, amount: 10)
Patron.create(name: "Lauren Chernak", artist_id: 4, amount: 40)
Patron.create(name: "Paul Tan", artist_id: 2, amount: 10)
Patron.create(name: "Cindy Salt", artist_id: 6, amount: 100, anonymous: true)
Patron.create(name: "Frank Goldman", artist_id: 7, amount: 50, anonymous: true)
Patron.create(name: "Lauren Chernak", artist_id: 1, amount: 500)
Patron.create(name: "William Hastings", artist_id: 2, amount: 50)
Patron.create(name: "Cindy Salt", artist_id: 3, amount: 10)
Patron.create(name: "Lauren Chernak", artist_id: 4, amount: 40)
Patron.create(name: "Paul Tan", artist_id: 8, amount: 10)
Patron.create(name: "Cindy Salt", artist_id: 8, amount: 100, anonymous: true)
Patron.create(name: "Frank Goldman", artist_id: 8, amount: 500, anonymous: true)
