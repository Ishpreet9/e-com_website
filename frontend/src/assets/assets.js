import logo from './logo.png';
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import back_icon from './back_icon.png'
import prime_img from './prime_img.png'
import alienware_m15_r6_image from './alienware_m15_r6_image.png'
import macbok_pro_16_image from './macbok_pro_16_image.png'
import dell_xps_13_image from './dell_xps_13_image.png'
import hp_spectre_x360_image from './hp_spectre_x360_image.png'
import asus_rog_zephyrus_g14_image from './asus_rog_zephyrus_g14_image.png'
import galaxy_s23_ultra_image from './galaxy_s23_ultra_image.png'
import iphone_15_pro_max_image from './iphone_15_pro_max_image.png'
import oneplus_11_image from './oneplus_11_image.png'
import google_pixel_8_image from './google_pixel_8_image.png'
import lenovo_thinkpad_x1_carbon_image from './lenovo_thinkpad_x1_carbon_image.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_icon from './support_icon.png'
import cross_icon from './cross_icon.png'
import asus_rog_strix_g15_image from './asus_rog_strix_g15_image.png'
import msi_ge76_raider_image from './msi_ge76_raider_image.png'
import dell_xps_15_image from './dell_xps_15_image.png'
import hp_omen_17_image from './hp_omen_17_image.png'
import galaxy_z_flip_5_image from './galaxy_z_flip_5_image.png';
import bose_quietcomfort_45_image from './bose_quietcomfort_45_image.png';
import xiaomi_redmi_note_12_image from './xiaomi_redmi_note_12_image.png';
import apple_watch_series_9_image from './apple_watch_series_9_image.png';
import huawei_matebook_x_pro_image from './huawei_matebook_x_pro_image.png';
import jbl_live_pro_2_tws_image from './jbl_live_pro_2_tws_image.png';
import garmin_forerunner_955_image from './garmin_forerunner_955_image.png';
import star_icon from './star_icon.png'
import half_star_icon from './half_star_icon.png'
import star_dull_icon from './star_dull_icon.png'
import bin_icon from  './bin_icon.png'
import upi_logo from './upi_logo.png'
import card_logo from './card_logo.png'
import cod_logo from './cod_logo.png'

export const assets = {
    //these variables store the path of the image
    logo,
    upi_logo,
    card_logo,
    cod_logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    back_icon,
    prime_img,
    exchange_icon,
    quality_icon,
    support_icon,
    cross_icon,
    star_icon,
    half_star_icon,
    star_dull_icon,
    bin_icon
}

export const products = [
    {
        _id: "001",
        name: "Alienware M15 R6",
        description: "High-performance gaming laptop with NVIDIA GeForce RTX 3070.",
        price: 1800,
        image: [alienware_m15_r6_image],
        category: "Laptops",
        subCategory: "Performance Oriented",
        variants: [
            "8GB RAM, 512GB SSD",
            "16GB RAM, 512GB SSD",
            "16GB RAM, 1TB SSD"
        ],
        date: 1703044800000, // Example timestamp for a date in 2024
        bestSeller: true
    },
    {
        "_id": "002",
        "name": "JBL Live Pro 2 TWS",
        "description": "True wireless earbuds with immersive sound and adaptive noise cancellation.",
        "price": 150,
        "image": [jbl_live_pro_2_tws_image,garmin_forerunner_955_image,alienware_m15_r6_image,iphone_15_pro_max_image],
        "category": "TWS",
        "subCategory": "Noise Cancelling",
        "variants": [
            "Black",
            "White"
        ],
        "date": 1708300800000, 
        "bestSeller": true
    },
    {
        "_id": "003",
        "name": "Garmin Forerunner 955",
        "description": "GPS smartwatch for athletes with advanced fitness and health tracking.",
        "price": 499,
        "image": [garmin_forerunner_955_image],
        "category": "Smartwatches",
        "subCategory": "Fitness",
        "variants": [
            "Black",
            "White"
        ],
        "date": 1707408000000, 
        "bestSeller": false
    },
    {
        _id: "004",
        name: "HP Spectre x360",
        description: "Convertible laptop with a 4K OLED display and sleek design.",
        price: 1400,
        image: [hp_spectre_x360_image],
        category: "Laptops",
        subCategory: "Budget Friendly",
        variants: [
            "i5, 8GB RAM, 256GB SSD",
            "i7, 16GB RAM, 512GB SSD",
            "i7, 16GB RAM, 1TB SSD"
        ],
        date: 1702392000000, // Example timestamp for a date in 2024
        bestSeller: false
    },
    {
        _id: "005",
        name: "ASUS ROG Zephyrus G14",
        description: "Gaming laptop with AMD Ryzen 9 and powerful GPU performance.",
        price: 1500,
        image: [asus_rog_zephyrus_g14_image],
        category: "Laptops",
        subCategory: "Performance Oriented",
        variants: [
            "8GB RAM, 512GB SSD",
            "16GB RAM, 1TB SSD",
            "32GB RAM, 1TB SSD"
        ],
        date: 1704232800000, // Example timestamp for a date in 2024
        bestSeller: true
    },
    {
        _id: "006",
        name: "Samsung Galaxy S23 Ultra",
        description: "Flagship smartphone with a high-resolution display and excellent camera.",
        price: 1200,
        image: [galaxy_s23_ultra_image],
        category: "Mobile Phones",
        subCategory: "Performance Oriented",
        variants: [
            "256GB, Black",
            "512GB, Green",
            "1TB, Phantom Silver"
        ],
        date: 1706644800000, // Example timestamp for a date in 2024
        bestSeller: true
    },
    {
        "_id": "007",
        "name": "Asus ROG Strix G15",
        "description": "Powerful gaming laptop with Intel Core i7 and NVIDIA RTX 3060.",
        "price": 1600,
        "image": [asus_rog_strix_g15_image],
        "category": "Laptops",
        "subCategory": "Gaming",
        "variants": [
            "16GB RAM, 512GB SSD",
            "16GB RAM, 1TB SSD",
            "32GB RAM, 1TB SSD"
        ],
        "date": 1703120400000,
        "bestSeller": true
    },
    {
        _id: "008",
        name: "Dell XPS 13",
        description: "Compact and powerful laptop suitable for all-day productivity.",
        price: 1200,
        image: [dell_xps_13_image],
        category: "Laptops",
        subCategory: "Performance Oriented",
        variants: [
            "8GB RAM, 256GB SSD",
            "16GB RAM, 512GB SSD",
            "16GB RAM, 1TB SSD"
        ],
        date: 1707818400000, // Example timestamp for a date in 2024
        bestSeller: false
    },
    {
        _id: "009",
        name: "iPhone 15 Pro Max",
        description: "Latest iPhone model with advanced camera and A17 Bionic chip.",
        price: 1300,
        image: [iphone_15_pro_max_image],
        category: "Mobile Phones",
        subCategory: "Performance Oriented",
        variants: [
            "128GB, Silver",
            "256GB, Space Black",
            "512GB, Gold"
        ],
        date: 1709140800000, // Example timestamp for a date in 2024
        bestSeller: true
    },
    {
        _id: "010",
        name: "OnePlus 11",
        description: "High-performance smartphone with smooth OxygenOS experience.",
        price: 700,
        image: [oneplus_11_image],
        category: "Mobile Phones",
        subCategory: "Budget Friendly",
        variants: [
            "128GB, Green",
            "256GB, Black",
            "256GB, Blue"
        ],
        date: 1701744000000, // Example timestamp for a date in 2024
        bestSeller: false
    },
    {
        _id: "011",
        name: "Google Pixel 8",
        description: "Google's latest phone with advanced AI and top-notch camera.",
        price: 900,
        image: [google_pixel_8_image],
        category: "Mobile Phones",
        subCategory: "Budget Friendly",
        variants: [
            "128GB, Black",
            "256GB, White",
            "256GB, Hazel"
        ],
        date: 1705617600000, // Example timestamp for a date in 2024
        bestSeller: true
    },
    {
        _id: "012",
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Premium business laptop with a durable and lightweight design.",
        price: 1600,
        image: [lenovo_thinkpad_x1_carbon_image],
        category: "Laptops",
        subCategory: "Budget Friendly",
        variants: [
            "i5, 8GB RAM, 256GB SSD",
            "i7, 16GB RAM, 512GB SSD",
            "i7, 16GB RAM, 1TB SSD"
        ],
        date: 1704057600000, // Example timestamp for a date in 2024
        bestSeller: false
    },
    {
        "_id": "013",
        "name": "MSI GE76 Raider",
        "description": "Flagship gaming laptop with Intel i9 processor and RTX 3080.",
        "price": 2200,
        "image": [msi_ge76_raider_image],
        "category": "Laptops",
        "subCategory": "High-End Gaming",
        "variants": [
            "32GB RAM, 1TB SSD",
            "32GB RAM, 2TB SSD",
            "64GB RAM, 2TB SSD"
        ],
        "date": 1703296800000,
        "bestSeller": false
    },
    {
        "_id": "014",
        "name": "Dell XPS 15",
        "description": "Premium ultrabook with Intel i7, 16GB RAM, and 512GB SSD.",
        "price": 1500,
        "image": [dell_xps_15_image],
        "category": "Laptops",
        "subCategory": "Ultrabooks",
        "variants": [
            "16GB RAM, 512GB SSD",
            "16GB RAM, 1TB SSD",
            "32GB RAM, 1TB SSD"
        ],
        "date": 1703473200000,
        "bestSeller": true
    },
    {
        "_id": "015",
        "name": "HP Omen 17",
        "description": "High-performance gaming laptop with Intel Core i7 and RTX 3070.",
        "price": 1800,
        "image": [hp_omen_17_image],
        "category": "Laptops",
        "subCategory": "Gaming",
        "variants": [
            "16GB RAM, 512GB SSD",
            "32GB RAM, 1TB SSD",
            "64GB RAM, 2TB SSD"
        ],
        "date": 1703649600000,
        "bestSeller": false
    },
    {
        "_id": "016",
        "name": "Samsung Galaxy Z Flip 5",
        "description": "A stylish foldable smartphone with cutting-edge technology and a unique design.",
        "price": 1200,
        "image": [galaxy_z_flip_5_image],
        "category": "Mobile Phones",
        "subCategory": "Premium",
        "variants": [
            "256GB, Lavender",
            "512GB, Graphite"
        ],
        "date": 1707907200000, 
        "bestSeller": true
    },
    {
        "_id": "017",
        "name": "Bose QuietComfort 45",
        "description": "Over-ear noise-cancelling headphones with exceptional sound quality and comfort.",
        "price": 329,
        "image": [bose_quietcomfort_45_image],
        "category": "Wired Earphones",
        "subCategory": "Noise Cancelling",
        "variants": [
            "Black",
            "White"
        ],
        "date": 1707993600000,
        "bestSeller": false
    },
    {
        "_id": "018",
        "name": "Xiaomi Redmi Note 12",
        "description": "Affordable smartphone with solid performance and impressive battery life.",
        "price": 250,
        "image": [xiaomi_redmi_note_12_image],
        "category": "Mobile Phones",
        "subCategory": "Budget Friendly",
        "variants": [
            "64GB, Blue",
            "128GB, Black"
        ],
        "date": 1706505600000, 
        "bestSeller": false
    },
    {
        "_id": "019",
        "name": "Apple Watch Series 9",
        "description": "Advanced smartwatch with health tracking, fitness features, and a sleek design.",
        "price": 399,
        "image": [apple_watch_series_9_image],
        "category": "Smartwatches",
        "subCategory": "Health Tracking",
        "variants": [
            "41mm, Silver Aluminum",
            "45mm, Graphite Stainless Steel"
        ],
        "date": 1707504000000, 
        "bestSeller": true
    },
    {
        "_id": "020",
        "name": "Huawei MateBook X Pro",
        "description": "Ultraportable laptop with a stunning 3K display and powerful internals.",
        "price": 1800,
        "image": [huawei_matebook_x_pro_image],
        "category": "Laptops",
        "subCategory": "Ultrabooks",
        "variants": [
            "16GB RAM, 512GB SSD",
            "16GB RAM, 1TB SSD"
        ],
        "date": 1707225600000,
        "bestSeller": false
    },
    {
        _id: "021",
        name: "MacBook Pro 16",
        description: "Apple's latest MacBook Pro with M1 Max chip, ideal for professionals.",
        price: 2500,
        image: [macbok_pro_16_image],
        category: "Laptops",
        subCategory: "Performance Oriented",
        variants: [
            "16GB RAM, 512GB SSD",
            "32GB RAM, 1TB SSD",
            "64GB RAM, 2TB SSD"
        ],
        date: 1705603200000, // Example timestamp for a date in 2024
        bestSeller: true
    }
]