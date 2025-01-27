document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the "Get Yours!" button
    const getYoursButton = document.querySelector(".hero-text button");
    getYoursButton.addEventListener("click", () => {
        alert("Item added to the cart!");
    });

    // Simulate a cart counter
    let cartCount = 0;
    const cartButton = document.querySelector(".user-options a:nth-child(3)");
    const updateCartCount = () => {
        cartButton.textContent = `Cart (${cartCount})`;
    };

    const products = document.querySelectorAll(".product button");
    products.forEach((button) => {
        button.addEventListener("click", () => {
            cartCount++;
            updateCartCount();
        });
    });

    // Add wishlist toggle functionality
    const wishlistButtons = document.querySelectorAll(".product button.wishlist");
    wishlistButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("added");
            if (button.classList.contains("added")) {
                button.textContent = "Added to Wishlist";
            } else {
                button.textContent = "Add to Wishlist";
            }
        });
    });

    // Initialize cart count
    updateCartCount();
});


// Data for Best Seller Products
const bestSellers = [
    {
        image: "best1.jpg",
        name: "Classic White Sneakers",
        price: "$49.99"
    },
    {
        image: "best2.jpg",
        name: "Premium Leather Boots",
        price: "$99.99"
    },
    {
        image: "best3.jpg",
        name: "Casual Slip-Ons",
        price: "$39.99"
    },
    {
        image: "best4.jpg",
        name: "Sporty Running Shoes",
        price: "$59.99"
    }
];

// Function to Render Best Seller Products
const renderBestSellers = () => {
    const grid = document.getElementById("bestSellerGrid");

    bestSellers.forEach(product => {
        const productHTML = `
            <div class="best-seller-item">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>${product.price}</p>
            </div>
        `;
        grid.innerHTML += productHTML;
    });
};

// Call Function to Render Products on Page Load
document.addEventListener("DOMContentLoaded", renderBestSellers);


// Data for Exclusive Deals
const exclusiveDeals = [
    {
        image: "deal1.jpg",
        name: "Limited Edition Sneakers",
        price: "$69.99"
    },
    {
        image: "deal2.jpg",
        name: "Summer Sandals Sale",
        price: "$29.99"
    },
    {
        image: "deal3.jpg",
        name: "Elegant Formal Shoes",
        price: "$89.99"
    },
    {
        image: "deal4.jpg",
        name: "Winter Boots Discount",
        price: "$79.99"
    }
];

// Function to Render Exclusive Deals
const renderExclusiveDeals = () => {
    const grid = document.getElementById("exclusiveDealsGrid");

    exclusiveDeals.forEach(deal => {
        const dealHTML = `
            <div class="exclusive-deal-item">
                <img src="${deal.image}" alt="${deal.name}">
                <p>${deal.name}</p>
                <p>${deal.price}</p>
            </div>
        `;
        grid.innerHTML += dealHTML;
    });
};

// Call Function to Render Deals on Page Load
document.addEventListener("DOMContentLoaded", renderExclusiveDeals);


// Newsletter Subscription Form
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById("newsletterEmail").value;
    if (email) {
        alert(`Thank you for subscribing! We have sent a confirmation email to ${email}`);
        document.getElementById("newsletterEmail").value = ""; // Clear the input field
    } else {
        alert("Please enter a valid email address.");
    }
});

