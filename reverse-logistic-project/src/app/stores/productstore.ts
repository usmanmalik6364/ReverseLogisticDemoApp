import { makeAutoObservable } from 'mobx';
import { Product } from '../../models/Product';

class ProductStore {
  products: Product[] = [];
  cart: Product[] = [];
  successfullyAddedToCart:boolean | undefined = undefined; 
  

  constructor() {
    makeAutoObservable(this);
  }

  // Method to fetch products from an API (Mocked for now)
  async fetchProducts() {
    try {
      // Simulate fetching products asynchronously
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock product data (replace with your actual product data)
      const mockProducts: Product[] = [
        {
            id: "p001",
            title: "Apple iPhone 13",
            description: "Latest model with A15 Bionic chip and 128GB storage.",
            price: 999.99,
            currentBid: 1050.00,
            buyNowPrice: 1100.00,
            category: "Electronics",
            images: ["https://hips.hearstapps.com/hmg-prod/images/iphone-13-review-2021b-1632173660.jpg", "iphone13_2.jpg"],
            brand: "Apple",
            model: "iPhone 13",
            condition: 0,
            dimensions: { length: 14.7, width: 7.1, height: 0.7 },
            weight: 0.174,
            sellerId: "seller001",
            timeLeftToBid: 7200,
            auctionEndTime: new Date("2024-06-22T14:00:00Z"),
            bids: [
                { bidderId: "bidder001", bidAmount: 1000.00, bidTime: new Date("2024-05-21T12:00:00Z") },
                { bidderId: "bidder002", bidAmount: 1050.00, bidTime: new Date("2024-05-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-05-20T10:00:00Z"),
            updatedAt: new Date("2024-05-21T13:00:00Z")
        },
        {
            id: "p002",
            title: "Samsung Galaxy S21",
            description: "Flagship model with 256GB storage and 8GB RAM.",
            price: 799.99,
            currentBid: 850.00,
            buyNowPrice: 900.00,
            category: "Electronics",
            images: ["https://media.cnn.com/api/v1/images/stellar/prod/210121104522-16-galaxy-s21-review-underscored.jpg?q=w_5001,h_2967,x_0,y_0,c_fill", "galaxys21_2.jpg"],
            brand: "Samsung",
            model: "Galaxy S21",
            condition: 0,
            dimensions: { length: 15.1, width: 7.1, height: 0.8 },
            weight: 0.169,
            sellerId: "seller002",
            timeLeftToBid: 10800,
            auctionEndTime: new Date("2024-07-22T16:00:00Z"),
            bids: [
                { bidderId: "bidder003", bidAmount: 820.00, bidTime: new Date("2024-05-21T14:00:00Z") },
                { bidderId: "bidder004", bidAmount: 850.00, bidTime: new Date("2024-05-21T15:00:00Z") }
            ],
            createdAt: new Date("2024-05-20T11:00:00Z"),
            updatedAt: new Date("2024-05-21T15:00:00Z")
        },
        {
            id: "p003",
            title: "Sony WH-1000XM4",
            description: "Noise cancelling wireless headphones.",
            price: 349.99,
            currentBid: 380.00,
            buyNowPrice: 400.00,
            category: "Electronics",
            images: ["https://cdn.mos.cms.futurecdn.net/5aeec2fa14215ad06d42b9e63b3b203f-1200-80.jpg"],
            brand: "Sony",
            model: "WH-1000XM4",
            condition: 0,
            dimensions: { length: 20.3, width: 18.5, height: 8.1 },
            weight: 0.254,
            sellerId: "seller003",
            timeLeftToBid: 14400,
            auctionEndTime: new Date("2024-06-25T14:00:00Z"),
            bids: [
                { bidderId: "bidder005", bidAmount: 360.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder006", bidAmount: 380.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p004",
            title: "Harry Potter and the Sorcerer's Stone",
            description: "First book in the Harry Potter series.",
            price: 19.99,
            currentBid: 25.00,
            buyNowPrice: 30.00,
            category: "Books",
            images: ["https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"],
            brand: "Scholastic",
            model: "Hardcover",
            condition: 0,
            dimensions: { length: 20.3, width: 13.7, height: 3.2 },
            weight: 0.400,
            sellerId: "seller004",
            timeLeftToBid: 7200,
            auctionEndTime: new Date("2024-06-22T16:00:00Z"),
            bids: [
                { bidderId: "bidder007", bidAmount: 22.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder008", bidAmount: 25.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p005",
            title: "The Great Gatsby",
            description: "Classic novel by F. Scott Fitzgerald.",
            price: 10.99,
            currentBid: 12.00,
            buyNowPrice: 15.00,
            category: "Books",
            images: ["https://images-na.ssl-images-amazon.com/images/I/81AFocWzYqL.jpg"],
            brand: "Scribner",
            model: "Paperback",
            condition: 1,
            dimensions: { length: 20.3, width: 13.7, height: 2.0 },
            weight: 0.300,
            sellerId: "seller005",
            timeLeftToBid: 10800,
            auctionEndTime: new Date("2024-06-23T18:00:00Z"),
            bids: [
                { bidderId: "bidder009", bidAmount: 11.00, bidTime: new Date("2024-06-21T14:00:00Z") },
                { bidderId: "bidder010", bidAmount: 12.00, bidTime: new Date("2024-06-21T15:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T11:00:00Z"),
            updatedAt: new Date("2024-06-21T15:00:00Z")
        },
        {
            id: "p006",
            title: "Nike Air Max 270",
            description: "Comfortable and stylish sneakers.",
            price: 150.00,
            currentBid: 160.00,
            buyNowPrice: 180.00,
            category: "Clothing",
            images: ["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e9fbe1e-bcf6-4bcb-b612-6e0ee9b8c93a/air-max-270-mens-shoes-KkLcGR.png"],
            brand: "Nike",
            model: "Air Max 270",
            condition: 2,
            dimensions: { length: 30.0, width: 20.0, height: 10.0 },
            weight: 0.600,
            sellerId: "seller006",
            timeLeftToBid: 7200,
            auctionEndTime: new Date("2024-06-22T14:00:00Z"),
            bids: [
                { bidderId: "bidder011", bidAmount: 155.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder012", bidAmount: 160.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p007",
            title: "Adidas Ultraboost 21",
            description: "High-performance running shoes.",
            price: 180.00,
            currentBid: 190.00,
            buyNowPrice: 200.00,
            category: "Clothing",
            images: ["https://assets.adidas.com/images/w_600,f_auto,q_auto/3b0ea5f4d7d64ab99930ac9b00d38398_9366/Ultraboost_21_Shoes_Black_GX5941_01_standard.jpg"],
            brand: "Adidas",
            model: "Ultraboost 21",
            condition: 1,
            dimensions: { length: 30.0, width: 20.0, height: 10.0 },
            weight: 0.600,
            sellerId: "seller007",
            timeLeftToBid: 10800,
            auctionEndTime: new Date("2024-06-23T16:00:00Z"),
            bids: [
                { bidderId: "bidder013", bidAmount: 185.00, bidTime: new Date("2024-06-21T14:00:00Z") },
                { bidderId: "bidder014", bidAmount: 190.00, bidTime: new Date("2024-06-21T15:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T11:00:00Z"),
            updatedAt: new Date("2024-06-21T15:00:00Z")
        },
        {
            id: "p008",
            title: "Dyson V11 Torque Drive",
            description: "Powerful cordless vacuum cleaner.",
            price: 599.99,
            currentBid: 620.00,
            buyNowPrice: 650.00,
            category: "Home Appliances",
            images: ["https://cdn.shopify.com/s/files/1/0130/6367/4228/products/Dyson-V11-Torque-Drive-Extra-Cordless-Vacuum-Refurbished-01_1400x.jpg?v=1632501248"],
            brand: "Dyson",
            model: "V11 Torque Drive",
            condition: 2,
            dimensions: { length: 126.0, width: 25.0, height: 26.1 },
            weight: 2.970,
            sellerId: "seller008",
            timeLeftToBid: 14400,
            auctionEndTime: new Date("2024-06-25T14:00:00Z"),
            bids: [
                { bidderId: "bidder015", bidAmount: 610.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder016", bidAmount: 620.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p009",
            title: "Instant Pot Duo 7-in-1",
            description: "Electric pressure cooker with 7 functions.",
            price: 99.99,
            currentBid: 110.00,
            buyNowPrice: 120.00,
            category: "Home Appliances",
            images: ["https://m.media-amazon.com/images/I/81NXdDfaSML._AC_SL1500_.jpg"],
            brand: "Instant Pot",
            model: "Duo 7-in-1",
            condition: 0,
            dimensions: { length: 33.0, width: 31.0, height: 31.0 },
            weight: 5.400,
            sellerId: "seller009",
            timeLeftToBid: 7200,
            auctionEndTime: new Date("2024-06-22T14:00:00Z"),
            bids: [
                { bidderId: "bidder017", bidAmount: 105.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder018", bidAmount: 110.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p010",
            title: "LEGO Star Wars Millennium Falcon",
            description: "Iconic Star Wars ship with 7541 pieces.",
            price: 799.99,
            currentBid: 850.00,
            buyNowPrice: 900.00,
            category: "Toys",
            images: ["https://cdn11.bigcommerce.com/s-c84ad/images/stencil/1280x1280/products/230/800/MF3__63512.1606068831.jpg?c=2?imbypass=on"],
            brand: "LEGO",
            model: "Millennium Falcon",
            condition: 0,
            dimensions: { length: 84.0, width: 56.0, height: 21.0 },
            weight: 12.500,
            sellerId: "seller010",
            timeLeftToBid: 10800,
            auctionEndTime: new Date("2024-06-23T16:00:00Z"),
            bids: [
                { bidderId: "bidder019", bidAmount: 820.00, bidTime: new Date("2024-06-21T14:00:00Z") },
                { bidderId: "bidder020", bidAmount: 850.00, bidTime: new Date("2024-06-21T15:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T11:00:00Z"),
            updatedAt: new Date("2024-06-21T15:00:00Z")
        },
        {
            id: "p011",
            title: "Nintendo Switch",
            description: "Hybrid gaming console.",
            price: 299.99,
            currentBid: 320.00,
            buyNowPrice: 350.00,
            category: "Toys",
            images: ["https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"],
            brand: "Nintendo",
            model: "Switch",
            condition: 0,
            dimensions: { length: 24.0, width: 11.2, height: 10.2 },
            weight: 1.500,
            sellerId: "seller011",
            timeLeftToBid: 14400,
            auctionEndTime: new Date("2024-06-25T14:00:00Z"),
            bids: [
                { bidderId: "bidder021", bidAmount: 310.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder022", bidAmount: 320.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p012",
            title: "Kindle Paperwhite",
            description: "Waterproof e-reader with a 6-inch display.",
            price: 129.99,
            currentBid: 140.00,
            buyNowPrice: 150.00,
            category: "Electronics",
            images: ["https://m.media-amazon.com/images/I/51QF3KDq1mL._AC_SL1000_.jpg"],
            brand: "Amazon",
            model: "Paperwhite",
            condition: 0,
            dimensions: { length: 16.7, width: 11.6, height: 0.8 },
            weight: 0.182,
            sellerId: "seller012",
            timeLeftToBid: 7200,
            auctionEndTime: new Date("2024-06-22T14:00:00Z"),
            bids: [
                { bidderId: "bidder023", bidAmount: 135.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder024", bidAmount: 140.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p013",
            title: "Breville Barista Express",
            description: "Espresso machine with built-in grinder.",
            price: 699.99,
            currentBid: 750.00,
            buyNowPrice: 800.00,
            category: "Home Appliances",
            images: ["https://m.media-amazon.com/images/I/71z1s-rp4VL._AC_SL1500_.jpg"],
            brand: "Breville",
            model: "Barista Express",
            condition: 0,
            dimensions: { length: 32.5, width: 31.0, height: 40.6 },
            weight: 10.400,
            sellerId: "seller013",
            timeLeftToBid: 10800,
            auctionEndTime: new Date("2024-06-23T16:00:00Z"),
            bids: [
                { bidderId: "bidder025", bidAmount: 720.00, bidTime: new Date("2024-06-21T14:00:00Z") },
                { bidderId: "bidder026", bidAmount: 750.00, bidTime: new Date("2024-06-21T15:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T11:00:00Z"),
            updatedAt: new Date("2024-06-21T15:00:00Z")
        },
        {
            id: "p014",
            title: "Patagonia Nano Puff Jacket",
            description: "Lightweight and warm insulated jacket.",
            price: 199.00,
            currentBid: 210.00,
            buyNowPrice: 220.00,
            category: "Clothing",
            images: ["https://www.rei.com/media/product/147075"],
            brand: "Patagonia",
            model: "Nano Puff",
            condition: 0,
            dimensions: { length: 35.0, width: 25.0, height: 5.0 },
            weight: 0.600,
            sellerId: "seller014",
            timeLeftToBid: 7200,
            auctionEndTime: new Date("2024-06-22T14:00:00Z"),
            bids: [
                { bidderId: "bidder027", bidAmount: 205.00, bidTime: new Date("2024-06-21T12:00:00Z") },
                { bidderId: "bidder028", bidAmount: 210.00, bidTime: new Date("2024-06-21T13:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T10:00:00Z"),
            updatedAt: new Date("2024-06-21T13:00:00Z")
        },
        {
            id: "p015",
            title: "Columbia Men's Bugaboo II Fleece Interchange Jacket",
            description: "3-in-1 jacket with waterproof shell and removable fleece liner.",
            price: 180.00,
            currentBid: 190.00,
            buyNowPrice: 200.00,
            category: "Clothing",
            images: ["https://m.media-amazon.com/images/I/71P02j8dKXL._AC_UL1500_.jpg"],
            brand: "Columbia",
            model: "Bugaboo II",
            condition: 0,
            dimensions: { length: 40.0, width: 30.0, height: 10.0 },
            weight: 0.800,
            sellerId: "seller015",
            timeLeftToBid: 10800,
            auctionEndTime: new Date("2024-06-23T16:00:00Z"),
            bids: [
                { bidderId: "bidder029", bidAmount: 185.00, bidTime: new Date("2024-06-21T14:00:00Z") },
                { bidderId: "bidder030", bidAmount: 190.00, bidTime: new Date("2024-06-21T15:00:00Z") }
            ],
            createdAt: new Date("2024-06-20T11:00:00Z"),
            updatedAt: new Date("2024-06-21T15:00:00Z")
        }
       
    ];
    

      this.products = mockProducts; // Set the products with mock data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  // Method to add a product to the cart
  addToCart(product: Product) {
    // Check if the product already exists in the cart
    const existingProduct = this.cart.find((item) => String(item.id) === String(product.id));
    
    if (existingProduct) {
      this.successfullyAddedToCart = false; // Product already exists in the cart
    } else {
      console.log("Product is being pushed to cart");
      this.cart.push(product);
      this.successfullyAddedToCart = true; // Product added successfully
    }
  }
  // Method to remove a product from the cart
  removeFromCart(productId: string) {
    this.cart = this.cart.filter((product) => product.id !== productId);
  }
  getProductById(productId: string): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }
  resetSuccessfullyAddedToCart() {
    if (this.successfullyAddedToCart !== undefined) {
      this.successfullyAddedToCart = undefined;
    }
  }

}

export default ProductStore;
