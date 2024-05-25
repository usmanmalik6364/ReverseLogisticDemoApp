// Defining an enumeration for the condition of the product
export enum ProductCondition {
    New,
    Used,
    Refurbished,
  }
  
  // Defining an interface for product dimensions
  export interface ProductDimensions {
    length: number;
    width: number;
    height: number;
  }
  
  // Defining the main interface for the product model
  export interface Product {
    id: string; // Unique identifier for the product
    title: string; // Title of the product
    description: string; // Description of the product
    price: number; // Starting price of the product
    currentBid?: number; // Current highest bid
    buyNowPrice?: number; // Optional Buy Now price
    category: string; // Category the product belongs to
    images: string[]; // Array of image URLs
    brand: string; // Brand of the product
    model: string; // Model of the product
    condition: ProductCondition; // Condition of the product
    dimensions?: ProductDimensions; // Optional dimensions of the product
    weight?: number; // Optional weight of the product
    sellerId: string; // ID of the seller
    timeLeftToBid: number; // Time left for bidding in seconds
    auctionEndTime: Date; // Date and time when the auction ends
    bids: Bid[]; // Array of bids made on the product
    createdAt: Date; // Date and time when the product was created
    updatedAt: Date; // Date and time when the product was last updated
  }
  
  // Defining an interface for bids
  export interface Bid {
    bidderId: string; // ID of the bidder
    bidAmount: number; // Amount of the bid
    bidTime: Date; // Date and time when the bid was made
  }
  