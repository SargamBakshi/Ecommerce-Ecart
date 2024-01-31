import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }


  useEffect(() => {
    const getProducts = () => {
      const response = [
       
        {
            "id": 1,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/71On2XSPuRL._SY741_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 2,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 3,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/514YMziLluL._SX679_.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        {
            "id": 4,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://m.media-amazon.com/images/I/61B4DW-K+tL._SY695_.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 5,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        },
        {
            "id": 6,
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category": "jewelery",
            "image": "https://m.media-amazon.com/images/I/71CvYJGo7kL._SY695_.jpg",
            "rating": {
                "rate": 3,
                "count": 400
            }
        },
        {
            "id": 7,
            "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price": 10.99,
            "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            "category": "jewelery",
            "image": "https://m.media-amazon.com/images/I/71NlM3ORhdL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 1.9,
                "count": 100
            }
        },

        {
            "id": 8,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/71pGhgjVR3L._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 9,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/51XndcMkrNL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 10,
            "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            "price": 64,
            "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            "rating": {
                "rate": 3.3,
                "count": 203
            }
        },
        {
            "id": 11,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        },

        {
            "id": 12,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/51uMy+UWfrL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 13,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/71O7yp0YDHL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 14,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 15,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },

        {
            "id": 16,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/61G1ZLzdBeS._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 17,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/61XzMtVz3PL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 18,
            "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            "price": 599,
            "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 250
            }
        },

        {
            "id": 19,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 20,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "id": 21,
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            "category": "electronics",
            "image": "https://m.media-amazon.com/images/I/717oSOB4hCL._AC_UY327_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 2.2,
                "count": 140
            }
        },
        {
            "id": 22,
            "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            "price": 56.99,
            "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
            "category": "women's clothing",
            "image": "https://m.media-amazon.com/images/I/71i7Jqgf6IL._SX679_.jpg",
            "rating": {
                "rate": 2.6,
                "count": 235
            }
        },
        {
            "id": 23,
            "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            "price": 29.95,
            "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
            "category": "women's clothing",
            "image": "https://m.media-amazon.com/images/I/61xGyu05-bL._SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 340
            }
        },

        {
            "id": 24,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://m.media-amazon.com/images/I/71KGby9PZkL._AC_UY327_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 25,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://m.media-amazon.com/images/I/61HdEp4B4fL._AC_UY327_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "id": 26,
            "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            "price": 39.99,
            "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
            "category": "women's clothing",
            "image": "https://m.media-amazon.com/images/I/61QtKNUTnjL._SY879_.jpg",
            "rating": {
                "rate": 3.8,
                "count": 679
            }
        },

        {
            "id": 27,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/717kxMoZiAL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 28,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://m.media-amazon.com/images/I/51oqHcH9mcL._AC_UL480_FMwebp_QL65_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },

        {
            "id": 29,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://m.media-amazon.com/images/I/510+J06fz0L._AC_SR155,154_QL70_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 30,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },
        {
            "id": 31,
            "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
            "price": 9.85,
            "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
            "category": "women's clothing",
            "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 130
            }
        },
        {
            "id": 32,
            "title": "Opna Women's Short Sleeve Moisture",
            "price": 7.95,
            "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
            "category": "women's clothing",
            "image": "https://m.media-amazon.com/images/I/71uTegNLrsL._SY741_.jpg",
            "rating": {
                "rate": 4.5,
                "count": 146
            }
        },
        {
            "id": 33,
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category": "women's clothing",
            "image": "https://m.media-amazon.com/images/I/61gDKFYA7fL._SX679_.jpg",
            "rating": {
                "rate": 3.6,
                "count": 145
            }
        },
        {
            "id": 34,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://m.media-amazon.com/images/I/510+J06fz0L._AC_SR155,154_QL70_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
        },
        {
            "id": 35,
            "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            "price": 114,
            "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 400
            }
        },

        {
          "id": 36,
          "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
          "price": 56.99,
          "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
          "category": "women's clothing",
          "image": "https://img101.urbanic.com/v1/goods-pic/9b73923db476429499b0329be06e56a0UR_w1440_q90.webp",
          "rating": {
              "rate": 2.6,
              "count": 235
          }
      },

      {
        "id": 37,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/515c0BIKzUL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },

    {
        "id": 38,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61oCLzTHSiL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 39,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/61TUvTyrj2L._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 40,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/61EUfLeW-1L._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 41,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61QloSKvaoL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 42,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/71xZY5-a1oL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },

    {
        "id": 43,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 44,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
      {
          "id": 45,
          "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
          "price": 29.95,
          "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
          "category": "women's clothing",
          "image": "https://img101.urbanic.com/v1/goods-pic/d73902e65f464ff9830cc3538e221b28UR_w1440_q90.webp",
          "rating": {
              "rate": 2.9,
              "count": 340
          }
      },
      {
          "id": 46,
          "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
          "price": 39.99,
          "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
          "category": "women's clothing",
          "image": "https://m.media-amazon.com/images/I/71seHOCQToL._AC_UL480_FMwebp_QL65_.jpg",
          "rating": {
              "rate": 3.8,
              "count": 679
          }
      },
      {
        "id": 47,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51It+fREv7L._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 48,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61JNAzCKcdL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },

    {
        "id": 49,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/51kCn87kcpL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 50,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
      {
        "id": 51,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/81ELtAf9uKL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 52,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61KGsDdounL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 53,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51Hrp3SYtkL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 54,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/61UIHcgQUvL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },

    {
        "id": 55,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71y8ZxXgVOL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 56,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71iIr9koTGL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 57,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61SSjkV4aQL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 58,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61nhWalhqOL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
      {
          "id": 59,
          "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "price": 9.85,
          "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
          "category": "women's clothing",
          "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
          "rating": {
              "rate": 4.7,
              "count": 130
          }
      },

      {
        "id": 60,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71bQ0VKw+bL._AC_UY327_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 61,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/51nUhnbUaZL._AC_UY327_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
      {
          "id": 62,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 7.95,
          "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
          "category": "women's clothing",
          "image": "https://m.media-amazon.com/images/I/71kQaCB04gL._AC_UL480_FMwebp_QL65_.jpg",
          "rating": {
              "rate": 4.5,
              "count": 146
          }
      },
      {
          "id": 63,
          "title": "DANVOUY Womens T Shirt Casual Cotton Short",
          "price": 12.99,
          "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          "category": "women's clothing",
          "image": "https://m.media-amazon.com/images/I/61gDKFYA7fL._SX679_.jpg",
          "rating": {
              "rate": 3.6,
              "count": 145
          }
      },

      {
        "id": 64,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/51EJKp8POHL._AC_UY327_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 65,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/81906M53GdS._AC_UY327_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
      {
        "id": 66,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51da1HSwecL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 67,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/71LxR8HzoUL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },

      {
        "id": 68,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/61tpSWtleQL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 69,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/71WGsOODa9L._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 70,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/71Vjnob0hXL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },

    {
        "id": 71,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/81xT3no1+6L._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 72,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 73,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51kYzJdTS7L._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },

      {
        "id": 74,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://m.media-amazon.com/images/I/51hwUJmvpAL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 2.6,
            "count": 235
        }
    },
    {
        "id": 75,
        "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category": "women's clothing",
        "image": "https://m.media-amazon.com/images/I/61xGyu05-bL._SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 340
        }
    },
    {
        "id": 76,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/81xT3no1+6L._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 77,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71kQUbJU9cL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 78,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://m.media-amazon.com/images/I/71sUQgAQTCL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    },
    {
        "id": 79,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/71KW7GqrfaL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 80,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61sSV9OkCLL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },

    {
        "id": 81,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/717oSOB4hCL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 82,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71oeLYE-BOL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },

    {
        "id": 83,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/71On2XSPuRL._SY741_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 84,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/512pBZ7L-JL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 85,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51sYCXUzwKL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 86,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/619gCSjjgaL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 87,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },

    {
        "id": 88,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71qYTCZ+jrL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 319
        }
    },
    {
        "id": 89,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://m.media-amazon.com/images/I/71oeLYE-BOL._AC_UY327_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        }
    },
    {
        "id": 90,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://m.media-amazon.com/images/I/71uTegNLrsL._SY741_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 91,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://m.media-amazon.com/images/I/71yG8DhnV2L._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    },

    {
        "id": 92,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61hSq+uhTxL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 93,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 94,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/71On2XSPuRL._SY741_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },

    {
        "id": 95,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/81OadPXqWaL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 96,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://m.media-amazon.com/images/I/51kJTUwqw9L._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 97,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://m.media-amazon.com/images/I/71J9pEB9JAL._AC_UL480_FMwebp_QL65_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },

    {
      "id": 98,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "women's clothing",
      "image": "https://m.media-amazon.com/images/I/71i7Jqgf6IL._SX679_.jpg",
      "rating": {
          "rate": 2.6,
          "count": 235
      }
  },

  {
    "id": 99,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/71GzwZeNHVL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 100,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/71EdoSBnIIL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
  {
      "id": 101,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "women's clothing",
      "image": "https://m.media-amazon.com/images/I/61xGyu05-bL._SX679_.jpg",
      "rating": {
          "rate": 2.9,
          "count": 340
      }
  },

  {
    "id": 102,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/61Q56q0LGAL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},
{
    "id": 103,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/51BAXwDaz6L._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 104,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},

{
    "id": 105,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61B4DW-K+tL._SY695_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 106,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/71w8WcsRRIL._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 107,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/81uQ9Z-btCL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
},
  {
      "id": 108,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "women's clothing",
      "image": "https://m.media-amazon.com/images/I/51STzgHk8LL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": {
          "rate": 3.8,
          "count": 679
      }
  },
  {
    "id": 109,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/51xQ460YXwL._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 110,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},

  {
    "id": 111,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61Trr1MH5VL._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 112,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},

{
    "id": 113,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/51NIOZ-zXkL._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 114,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
  {
      "id": 115,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "women's clothing",
      "image": "https://m.media-amazon.com/images/I/61hOP5LrDlL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": {
          "rate": 4.7,
          "count": 130
      }
  },

  {
    "id": 116,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/51mP0GQRo+L._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},
{
    "id": 117,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/5173Bi+-e-S._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 118,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},
{
    "id": 119,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
},

{
    "id": 120,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61B4DW-K+tL._SY695_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 121,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/51z+k+BEwML._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},

{
    "id": 122,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61B4DW-K+tL._SY695_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 123,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/51ctnJWKt9L._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
  {
      "id": 124,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "women's clothing",
      "image": "https://m.media-amazon.com/images/I/41R0pvX+9aL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": {
          "rate": 4.5,
          "count": 146
      }
  },
  {
      "id": 125,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://m.media-amazon.com/images/I/71QIoxB-zcL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": {
          "rate": 3.6,
          "count": 145
      }
  },
  {
    "id": 126,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/519+qzQqmyL._AC_UL480_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 127,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},

  {
    "id": 128,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/515c0BIKzUL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},
{
    "id": 129,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/61E5erAzIsL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
},

{
    "id": 130,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/6184nfAmwTL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},

{
    "id": 131,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61XOZdcPyBL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 132,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/71BYiGpdQIL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 133,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/513MF4mXUcL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
  {
    "id": 134,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61OgMj7XDZL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 2.6,
        "count": 235
    }
},
{
    "id": 135,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/51919afKvvL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 2.9,
        "count": 340
    }
},
{
    "id": 136,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61QtKNUTnjL._SY879_.jpg",
    "rating": {
        "rate": 3.8,
        "count": 679
    }
},

{
    "id": 137,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 138,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},

{
    "id": 139,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/41G6VMzt-eS._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 140,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},

{
    "id": 141,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/71iJUvjnOZL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 142,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61KSmJoXtUL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 143,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61RyCbaMh1L._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},

{
    "id": 144,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/71On2XSPuRL._SY741_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},

{
    "id": 145,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 146,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},
{
    "id": 147,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://m.media-amazon.com/images/I/511bvBh3DbL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
},

{
    "id": 148,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61B4DW-K+tL._SY695_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 149,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/5124tEdFHEL._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},

{
    "id": 150,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/51PtkPvwo7L._AC_UL480_FMwebp_QL65_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 151,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
  "id": 152,
  "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  "price": 39.99,
  "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  "category": "women's clothing",
  "image": "https://m.media-amazon.com/images/I/61QtKNUTnjL._SY879_.jpg",
  "rating": {
      "rate": 3.8,
      "count": 679
  }
},

{
    "id": 153,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 154,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
},
{
  "id": 155,
  "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
  "price": 9.85,
  "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  "category": "women's clothing",
  "image": "https://m.media-amazon.com/images/I/61RyCbaMh1L._AC_UL480_FMwebp_QL65_.jpg",
  "rating": {
      "rate": 4.7,
      "count": 130
  }
},

{
    "id": 156,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61B4DW-K+tL._SY695_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
},
{
    "id": 157,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 158,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://m.media-amazon.com/images/I/61y-EmToHNL._SY625_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 159,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://m.media-amazon.com/images/I/61h-sZGRYgL._SY741_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 130
    }
}







      ]
      setData(response);
      setFilter(response);
    };

    getProducts();
  }, []);



  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2 filter-btn" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2 filter-btn" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2 filter-btn" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2 filter-btn" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2 filter-btn" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>

        {/* to display all results using map  */}

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-70" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </>
  );
};

export default Products;
