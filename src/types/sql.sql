CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    bio TEXT,
    profile_picture TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vendors (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    logo TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    vendor_id INT REFERENCES vendors(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    thumbnail TEXT,
    published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE post_tags (
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    tag_id INT REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (post_id, user_id)
);

CREATE TABLE taxes (
    id SERIAL PRIMARY KEY,
    country VARCHAR(2) NOT NULL,
    state VARCHAR(5),
    postcode VARCHAR(20),
    city VARCHAR(100),
    postcodes TEXT[],
    cities TEXT[],
    rate DECIMAL(10,4) NOT NULL,
    name VARCHAR(100) NOT NULL,
    priority INT DEFAULT 0,
    compound BOOLEAN DEFAULT FALSE,
    shipping BOOLEAN DEFAULT FALSE,
    "order" INT DEFAULT 1,
    class VARCHAR(50) DEFAULT 'standard'
);

CREATE TABLE tax_classes (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    reviewer VARCHAR(100) NOT NULL,
    reviewer_email VARCHAR(255) NOT NULL,
    review TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE refunds (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10,2) NOT NULL,
    reason TEXT,
    refunded_by INT REFERENCES users(id) ON DELETE SET NULL,
    refunded_payment BOOLEAN DEFAULT FALSE
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    permalink TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    featured BOOLEAN DEFAULT FALSE,
    catalog_visibility VARCHAR(50) DEFAULT 'visible',
    description TEXT,
    short_description TEXT,
    sku VARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    regular_price DECIMAL(10,2) NOT NULL,
    sale_price DECIMAL(10,2),
    date_on_sale_from TIMESTAMP,
    date_on_sale_to TIMESTAMP,
    on_sale BOOLEAN DEFAULT FALSE,
    purchasable BOOLEAN DEFAULT TRUE,
    total_sales INT DEFAULT 0,
    virtual BOOLEAN DEFAULT FALSE,
    downloadable BOOLEAN DEFAULT FALSE,
    tax_status VARCHAR(50) DEFAULT 'taxable',
    tax_class VARCHAR(50),
    manage_stock BOOLEAN DEFAULT FALSE,
    stock_quantity INT,
    stock_status VARCHAR(50) DEFAULT 'instock',
    backorders VARCHAR(50) DEFAULT 'no',
    sold_individually BOOLEAN DEFAULT FALSE,
    weight DECIMAL(10,2),
    dimensions JSONB,
    shipping_required BOOLEAN DEFAULT TRUE,
    shipping_taxable BOOLEAN DEFAULT TRUE,
    shipping_class VARCHAR(50),
    reviews_allowed BOOLEAN DEFAULT TRUE,
    average_rating DECIMAL(3,2) DEFAULT 0.00,
    rating_count INT DEFAULT 0,
    parent_id INT REFERENCES products(id) ON DELETE SET NULL,
    purchase_note TEXT
);

CREATE TABLE product_categories (
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
);

CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    src TEXT NOT NULL,
    alt TEXT
);

CREATE TABLE product_tags (
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    tag_id INT REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, tag_id)
);

CREATE TABLE product_attributes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    type VARCHAR(50) DEFAULT 'select',
    order_by VARCHAR(50) DEFAULT 'menu_order',
    has_archives BOOLEAN DEFAULT TRUE
);