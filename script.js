document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('contact.html')) {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((element, index) => {
      element.style.animationDelay = `-${index * 2}s`;
      element.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.2)';
        this.style.opacity = '0.9';
        this.style.transition = 'all 0.3s ease';
      });
      element.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.opacity = '0.6';
      });
    });

    window.addEventListener('scroll', function () {
      const particles = document.querySelectorAll('.particle');
      const scrolled = window.pageYOffset;

      particles.forEach((particle, index) => {
        const speed = 0.1 + (index * 0.05);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }
});

//  PRODUCTS DATA
const defaultProducts = [    // Electronics
            { id: 1, title: "Smartphone Pro Max", description: "Latest flagship smartphone with advanced camera system and 5G connectivity", price: 45000, category: "Electronics", image: "assets/phone.jpg" },
            { id: 2, title: "Wireless Headphones", description: "Premium noise-cancelling wireless headphones with 30-hour battery life", price: 15000, category: "Electronics", image: "assets/earbuds.jpg" },
            { id: 3, title: "Laptop Gaming", description: "High-performance gaming laptop with RTX graphics and fast SSD storage", price: 75000, category: "Electronics", image: "assets/gaming laptop.jpg" },
            { id: 4, title: "Smart Watch", description: "Fitness tracking smartwatch with heart rate monitor and GPS", price: 25000, category: "Electronics", image: "assets/smart watch .jpg" },
            { id: 5, title: "Tablet 10 inch", description: "Powerful tablet perfect for work and entertainment with stylus support", price: 35000, category: "Electronics", image: "assets/Das iPad Air (2020) .jpg" },
            { id: 6, title: "Camera DSLR", description: "Professional DSLR camera with multiple lenses for photography enthusiasts", price: 55000, category: "Electronics", image: "assets/Dslr camera.jpg" },
            { id: 7, title: "Gaming Console", description: "Next-gen gaming console with 4K gaming and exclusive titles", price: 50000, category: "Electronics", image: "assets/Wireless Controller .jpg" },
            { id: 8, title: "Bluetooth Speaker", description: "Portable wireless speaker with deep bass and waterproof design", price: 8000, category: "Electronics", image: "assets/bluetooth speaker.jpg" },
            { id: 9, title: "Smart TV 55 inch", description: "4K Ultra HD Smart TV with HDR and streaming apps built-in", price: 65000, category: "Electronics", image: "assets/55 inch tv.jpg" },
            { id: 10, title: "Wireless Mouse", description: "Ergonomic wireless mouse with precision tracking for work and gaming", price: 3500, category: "Electronics", image: "assets/wireless  mouse .jpg" },
            { id: 11, title: "Mechanical Keyboard", description: "RGB backlit mechanical keyboard with customizable switches", price: 12000, category: "Electronics", image: "assets/Mechanical Keyboard.jpg" },
            { id: 12, title: "Fitness Tracker", description: "Advanced fitness tracker with sleep monitoring and smartphone notifications", price: 18000, category: "Electronics", image: "assets/whoop.jpg" },
            
            // Services
            { id: 13, title: "Web Development", description: "Complete website development service with modern design and SEO optimization", price: 30000, category: "Services", image: "assets/web development.jpg" },
            { id: 14, title: "Digital Marketing", description: "Comprehensive digital marketing package including social media and PPC campaigns", price: 25000, category: "Services", image: "assets/digital marketing.jpg" },
            { id: 15, title: "Logo Design", description: "Professional logo design service with unlimited revisions and brand guidelines", price: 15000, category: "Services", image: "assets/logo maker.jpg" },
            { id: 16, title: "Content Writing", description: "High-quality content writing service for blogs, websites, and marketing materials", price: 12000, category: "Services", image: "assets/content writing.jpg" },
            { id: 17, title: "SEO Optimization", description: "Complete SEO service to improve your website ranking and organic traffic", price: 22000, category: "Services", image: "assets/seo.jpg" },
            { id: 18, title: "Mobile App Development", description: "Native and cross-platform mobile app development for iOS and Android", price: 45000, category: "Services", image: "assets/mobile app.jpg" },
            // { id: 19, title: "Graphic Design", description: "Creative graphic design services for branding, print, and digital media", price: 18000, category: "Services", image: "https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=Graphics" },
            { id: 20, title: "Video Editing", description: "Professional video editing service for marketing, events, and social media", price: 20000, category: "Services", image: "assets/video edting.jpg" },
            { id: 21, title: "Consulting", description: "Business strategy and IT consulting services for startups and enterprises", price: 35000, category: "Services", image: "assets/consulting.jpg" },
            { id: 22, title: "Data Analysis", description: "Advanced data analytics and business intelligence reporting services", price: 28000, category: "Services", image: "assets/data analysis.jpg" },
            { id: 23, title: "Cloud Migration", description: "Complete cloud migration service with security and performance optimization", price: 40000, category: "Services", image: "assets/cloud.jpg" },
            
            // Clothing
            // { id: 24, title: "Designer Jacket", description: "Premium leather jacket with modern design and comfortable fit", price: 28000, category: "Clothing", image: "assets/jacket.jpg" },
            { id: 25, title: "Formal Suit", description: "Elegant business suit made from premium fabric with tailored fit", price: 35000, category: "Clothing", image: "assets/formal suit.jpg" },
            { id: 26, title: "Casual Jeans", description: "Comfortable stretch denim jeans in classic blue with modern cut", price: 8000, category: "Clothing", image: "assets/jeans.jpg" },
            { id: 27, title: "Cotton T-Shirt", description: "Soft organic cotton t-shirt with eco-friendly materials and stylish design", price: 2500, category: "Clothing", image: "assets/cottontshirt.jpg" },
            { id: 28, title: "Winter Coat", description: "Warm winter coat with waterproof material and insulated lining", price: 22000, category: "Clothing", image: "assets/winter jacket.jpg" },
            { id: 29, title: "Running Shoes", description: "Professional running shoes with advanced cushioning and breathable design", price: 15000, category: "Clothing", image: "assets/running shoes.jpg" },
            { id: 30, title: "Evening Dress", description: "Elegant evening dress perfect for special occasions and formal events", price: 18000, category: "Clothing", image: "assets/evening dress.jpg" },
            { id: 31, title: "Polo Shirt", description: "Classic polo shirt made from premium cotton with comfortable collar", price: 5500, category: "Clothing", image: "assets/polo shirt.jpg" },
            { id: 32, title: "Denim Skirt", description: "Trendy denim skirt with modern cut and versatile styling options", price: 6500, category: "Clothing", image: "assets/skirt.jpg" },
            { id: 33, title: "Hoodie", description: "Comfortable cotton hoodie with adjustable drawstring and kangaroo pocket", price: 4500, category: "Clothing", image: "assets/hoodie.jpg" },
            { id: 34, title: " cargo pent", description: "Stylish and comfortable cargo pants for everyday wear", price: 24000, category: "Clothing", image: "assets/cargopent.jpg" },
            { id: 35, title: "Sneakers", description: "Trendy casual sneakers with comfortable sole and modern athletic design", price: 12000, category: "Clothing", image: "assets/Sneakers.jpg" }];

// Function to get all products (default + user added)
function getAllProducts() {
    var userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    // Spread (...) ki jagah .concat() use karein
    return defaultProducts.concat(userProducts);
}
//  PAGE CHECK: LISTING PAGE KE ELEMENTS SIRF TAB HANDLE KARO JAB WOH PAGE HO
if (document.getElementById('productGrid')) {
  let allProducts = getAllProducts();
  let filteredProducts = [...allProducts];
  let currentFilters = { category: 'all', price: 'all' };

  const filterBtn = document.getElementById('filterBtn');
  const filterDropdown = document.getElementById('filterDropdown');
  const productGrid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  const resultCount = document.getElementById('resultCount');
  const applyFiltersBtn = document.getElementById('applyFilters');
  const clearFiltersBtn = document.getElementById('clearFilters');

  if (filterBtn && filterDropdown) {
    filterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      filterDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!filterDropdown.contains(e.target) && !filterBtn.contains(e.target)) {
        filterDropdown.classList.remove('active');
      }
    });
  }

  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
      applyFilters();
      filterDropdown.classList.remove('active');
    });
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      clearAllFilters();
      filterDropdown.classList.remove('active');
    });
  }

  function applyFilters() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const selectedPrice = document.querySelector('input[name="price"]:checked').value;
    currentFilters.category = selectedCategory;
    currentFilters.price = selectedPrice;

    filteredProducts = allProducts.filter(product => {
      let categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      let priceMatch = true;

      if (selectedPrice !== 'all') {
        const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
        priceMatch = product.price >= minPrice && product.price <= maxPrice;
      }

      return categoryMatch && priceMatch;
    });

    renderProducts();
  }

  function clearAllFilters() {
    document.querySelector('input[name="category"][value="all"]').checked = true;
    document.querySelector('input[name="price"][value="all"]').checked = true;
    currentFilters = { category: 'all', price: 'all' };
    filteredProducts = [...allProducts];
    renderProducts();
  }

  function renderProducts() {
    productGrid.innerHTML = '';
    resultCount.textContent = filteredProducts.length;

    if (filteredProducts.length === 0) {
      noResults.classList.remove('hidden');
      return;
    } else {
      noResults.classList.add('hidden');
    }

    filteredProducts.forEach(product => {
      const productCard = createProductCard(product);
      productGrid.appendChild(productCard);
    })
    ;
  }
  // ===== Pre-select category if passed in URL =====
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get("category");

if (categoryParam && categoryParam !== "all") {
  currentFilters.category = categoryParam;
  filteredProducts = allProducts.filter(p => p.category === categoryParam);
  renderProducts();

  // Agar filters UI me category radio buttons hain to unko bhi select kar do
  const categoryInput = document.querySelector(`input[name="category"][value="${categoryParam}"]`);
  if (categoryInput) {
    categoryInput.checked = true;
  }
}

  

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden fade-in relative';

    const currentUser = localStorage.getItem('userName');
    const isOwner = product.seller === currentUser;
    
    // Check if we're on dashboard page
    const isDashboard = window.location.pathname.includes('dashboard.html');

card.addEventListener('click', (e) => {
    if (e.target.closest('.delete-btn')) return;

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // ✅ agar login nahi he to seedha login/signup page pe redirect karo
    if (!isLoggedIn) {
        window.location.href = 'login.html?tab=signup';
        return;
    }

    // ✅ agar logged in he aur Add to Cart button click hua
    if (e.target.closest('.add-to-cart-btn')) {
        e.stopPropagation();
        cartManager.addToCart(product);
        return;
    }

    // ✅ warna detail page open karo
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'detail.html';
});




    card.innerHTML = `
        ${(isOwner && isDashboard) ? `
        <div class="absolute top-2 right-2 z-10">
            <button onclick="deleteProduct(${product.id})" 
                    class="delete-btn bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110"
                    title="Delete Product">
                <i class="fas fa-trash text-sm"></i>
            </button>
        </div>
        ` : ''}
        
        <div class="aspect-w-1 aspect-h-1">
            <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-cover">
        </div>
        <div class="p-4">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">${product.title}</h3>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2">${product.category}</span>
            </div>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
            ${product.seller ? `<p class="text-xs text-gray-500 mb-2">Seller: ${product.seller}</p>` : ''}
            <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-green-600">$${product.price.toLocaleString()}</span>
         <button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
    <i class="fas fa-shopping-cart mr-1"></i> Add to Cart
</button>


            </div>
        </div>
    `;

    return card;
}

  // Function to refresh products when new ones are added
  function refreshProducts() {
    allProducts = getAllProducts();
    filteredProducts = [...allProducts];
    applyFilters();
  }

  // Listen for storage changes to refresh products
  window.addEventListener('storage', function(e) {
    if (e.key === 'userProducts') {
      refreshProducts();
    }
  });

  // Refresh on page focus
  window.addEventListener('focus', refreshProducts);

  // START
  renderProducts();
}

//  DETAILS PAGE CODE  SIRF product-details.html par chale
if (window.location.pathname.includes('detail.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('selectedProduct');
    const product = data ? JSON.parse(data) : null;
    const container = document.getElementById("productDetail");

    if (!product) {
      container.innerHTML = `<h2 class="text-xl font-bold text-center col-span-2">Product not found</h2>`;
      return;
    }

    container.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.title}" class="w-full h-96 object-cover rounded-md shadow-md">
      </div>
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">${product.title}</h2>
        <p class="text-gray-600 mb-4 text-sm">Category: <span class="font-medium">${product.category}</span></p>
        <p class="text-gray-700 text-lg mb-6">${product.description}</p>
        <p class="text-2xl font-bold text-green-600 mb-6">$${product.price.toLocaleString()}</p>
       <button id="addToCartBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
  <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
  </button>

      </div>
    `;
    // YEH NAYA CODE ADD KAREIN:
const addBtn = document.getElementById('addToCartBtn');
if (addBtn) {
    addBtn.addEventListener('click', () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        // Check karein user login hai ya nahi
        if (!isLoggedIn) {
            window.location.href = 'login.html?tab=signup';
            return;
        }

        // Agar login hai to product cart mein add karein
        if (typeof cartManager !== 'undefined') {
            cartManager.addToCart(product);
        } else {
            // Agar cartManager use nahi kar rahe to seedha function call karein
            addToCart(product);
        }
    });
}
    
  });
  
}


// document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.getElementById("menuToggle");
//   const navLinks = document.getElementById("navLinks");

//   if (menuToggle && navLinks) {
//     menuToggle.addEventListener("click", () => {
//       navLinks.classList.toggle("show");
//     });
//   }
// });

// Contact form handler (separate from product form)
document.addEventListener('DOMContentLoaded', function () {
  // Only handle contact form on contact page
  if (window.location.pathname.includes('contact.html')) {
    const contactForm = document.querySelector('.contact-container form');
    if (contactForm) {
      const fields = contactForm.querySelectorAll('input, textarea');

      contactForm.addEventListener('submit', function (e) {
        let valid = true;

        // Remove old errors
        contactForm.querySelectorAll('.error-msg').forEach(el => el.remove());
        fields.forEach(f => f.classList.remove('input-error'));

        // Validation
        fields.forEach(field => {
          if (!field.value.trim()) {
            valid = false;
            field.classList.add('input-error');
            const error = document.createElement('div');
            error.className = 'error-msg';
            error.textContent = 'This field is required';
            field.parentNode.appendChild(error);
          }
        });

        if (!valid) {
          e.preventDefault(); // stop refresh if invalid
          return;
        }

        // Flag so we can show toast after refresh
        localStorage.setItem('formSubmitted', 'true');
      });

      // After refresh show toast
      if (localStorage.getItem('formSubmitted') === 'true') {
        showContactToast('Thank you for contacting us!');
        localStorage.removeItem('formSubmitted');
      }
    }
  }

  function showContactToast(message) {
    const toast = document.createElement('div');
    toast.className = 'contact-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }
});

// Add Product Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is on add product page
    if (window.location.pathname.includes('addproduct.html')) {
        checkLoginStatus();
        
        // Image upload functionality
        const imageInput = document.getElementById('productImage');
        if (imageInput) {
            imageInput.addEventListener('change', handleImageUpload);
        }
        
        // Form submission - use specific form selector
        const productForm = document.getElementById('productForm');
        if (productForm) {
            productForm.addEventListener('submit', handleProductSubmission);
        }
    }
});

// Check if user is logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userName = localStorage.getItem('userName');
    
    const notLoggedInDiv = document.getElementById('notLoggedIn');
    const addProductForm = document.getElementById('addProductForm');
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    const welcomeUser = document.getElementById('welcomeUser');
    
    if (isLoggedIn && userName) {
        // User is logged in
        if (notLoggedInDiv) notLoggedInDiv.classList.add('hidden');
        if (addProductForm) addProductForm.classList.remove('hidden');
        if (loginBtn) loginBtn.classList.add('hidden');
        if (userInfo) userInfo.classList.remove('hidden');
        if (document.getElementById('userName')) document.getElementById('userName').textContent = userName;
        if (welcomeUser) welcomeUser.textContent = userName;
    } else {
        // User is not logged in
        if (notLoggedInDiv) notLoggedInDiv.classList.remove('hidden');
        if (addProductForm) addProductForm.classList.add('hidden');
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (userInfo) userInfo.classList.add('hidden');
    }
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUploadArea = document.getElementById('imageUploadArea');
            const imagePreview = document.getElementById('imagePreview');
            const previewImg = document.getElementById('previewImg');
            
            imageUploadArea.classList.add('hidden');
            imagePreview.classList.remove('hidden');
            previewImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Remove uploaded image
function removeImage() {
    const imageUploadArea = document.getElementById('imageUploadArea');
    const imagePreview = document.getElementById('imagePreview');
    const imageInput = document.getElementById('productImage');
    
    imageUploadArea.classList.remove('hidden');
    imagePreview.classList.add('hidden');
    imageInput.value = '';
}

// Handle product form submission (UPDATED FOR IMAGE FIX)
function handleProductSubmission(event) {
    event.preventDefault();
    
    console.log('Product form submitted'); // Debug
    
    const formData = new FormData(event.target);
    const userName = localStorage.getItem('userName');
    
    // Image handling - Convert to base64
    const imageFile = formData.get('productImage');
    
    if (imageFile && imageFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Create product with base64 image
            createAndSaveProduct(formData, userName, e.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        // No image uploaded, use default
        createAndSaveProduct(formData, userName, 'assets/default-product.jpg');
    }
}

// Helper function to create and save product
function createAndSaveProduct(formData, userName, imagePath) {
    // Create product object
    const newProduct = {
        id: Date.now(),
        title: formData.get('productTitle'),
        description: formData.get('description'),
        price: parseInt(formData.get('price')),
        category: formData.get('category'),
        seller: userName,
        image: imagePath,
        dateAdded: new Date().toISOString()
    };
    
    console.log('New product created:', newProduct); // Debug
    
    // Get existing user products
    let userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    
    // Add new product
    userProducts.push(newProduct);
    localStorage.setItem('userProducts', JSON.stringify(userProducts));
    
    console.log('Products saved to localStorage:', userProducts); // Debug
    
    // Show success modal
    showSuccessModal();
}


// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// Close success modal
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('hidden');
        resetForm();
    }
}

// Reset form
function resetForm() {
    const form = document.getElementById('productForm');
    if (form) {
        form.reset();
        removeImage();
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    location.reload();
}

// Authentication Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('login.html')) {
        initAuthPage();
    }
});

function initAuthPage() {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');

    if (loginTab && signupTab) {
        // Tab switching events
        loginTab.addEventListener('click', () => switchTab('login'));
        signupTab.addEventListener('click', () => switchTab('signup'));

        // ✅ Check URL param to auto-switch tab
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab === 'signup') {
            switchTab('signup');
        } else {
            switchTab('login');
        }
    }
}


function switchTab(tab) {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (tab === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        showErrorToast('Please fill all fields');
        return;
    }
    
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', user.firstName + ' ' + user.lastName);
        localStorage.setItem('userEmail', user.email);
        
        showSuccessToast('Login successful! Redirecting...');
        
        // setTimeout(() => {
        //     window.location.href = 'addproduct.html';
        // }, 1500);
    } else {
        showErrorToast('Invalid email or password');
    }
    // Clear login form fields
document.getElementById('loginEmail').value = '';
document.getElementById('loginPassword').value = '';
document.getElementById('rememberMe').checked = false;
}



// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        showErrorToast('Please fill all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        showErrorToast('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        showErrorToast('Password must be at least 6 characters');
        return;
    }
    
    if (!agreeTerms) {
        showErrorToast('Please agree to terms and conditions');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        showErrorToast('User with this email already exists');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password,
        registeredDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    
    // Auto login after signup
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', firstName + ' ' + lastName);
    localStorage.setItem('userEmail', email);
    
    showSuccessToast('Account created successfully! Redirecting...');
    
    // setTimeout(() => {
    //     window.location.href = 'addproduct.html';
    // }, 1500);
    // Clear signup form fields
document.getElementById('firstName').value = '';
document.getElementById('lastName').value = '';
document.getElementById('signupEmail').value = '';
document.getElementById('signupPassword').value = '';
document.getElementById('confirmPassword').value = '';
document.getElementById('agreeTerms').checked = false;

}


// Show success toast
function showSuccessToast(message) {
    const toast = document.getElementById('successToast');
    const messageSpan = document.getElementById('toastMessage');
    
    if (toast && messageSpan) {
        messageSpan.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('toast-slide-in');
        
        setTimeout(() => {
            hideToast(toast);
        }, 3000);
    }
}

// Show error toast
function showErrorToast(message) {
    const toast = document.getElementById('errorToast');
    const messageSpan = document.getElementById('errorMessage');
    
    if (toast && messageSpan) {
        messageSpan.textContent = message;
        toast.classList.remove('hidden');
        toast.classList.add('toast-slide-in');
        
        setTimeout(() => {
            hideToast(toast);
        }, 3000);
    }
}

// Hide toast
function hideToast(toast) {
    toast.classList.add('toast-slide-out');
    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('toast-slide-in', 'toast-slide-out');
    }, 300);
}

// Delete product function
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        // Get user products
        let userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
        
        // Filter out the product to delete
        userProducts = userProducts.filter(product => product.id !== productId);
        
        // Save back to localStorage
        localStorage.setItem('userProducts', JSON.stringify(userProducts));
        
        // Show success message
        showDeleteToast('Product deleted successfully!');
        
        // Refresh the product list if on listing page
        if (typeof refreshProducts === 'function') {
            refreshProducts();
        }
        
        console.log('Product deleted:', productId);
    }
}

// Show delete toast
function showDeleteToast(message) {
    const toast = document.createElement('div');
    toast.className = 'delete-toast fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    toast.innerHTML = `<i class="fas fa-trash mr-2"></i>${message}`;
    
    document.body.appendChild(toast);
    
    // Slide in animation
    setTimeout(() => toast.style.transform = 'translateX(0)', 50);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Check if product belongs to current user
function isUserProduct(product) {
    const currentUser = localStorage.getItem('userName');
    return product.seller === currentUser;
}
// Initialize checkout page
        document.addEventListener('DOMContentLoaded', function() {
            loadCartItems();
            setupPaymentMethods();
            setupFormFormatting();
        });

        // Load cart items from localStorage
        function loadCartItems() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
            const orderItemsContainer = document.getElementById('orderItems');
            
            if (cartItems.length === 0) {
                orderItemsContainer.innerHTML = `
                    <div class="text-center py-8 text-gray-500">
                        <i class="fas fa-shopping-cart text-4xl mb-4"></i>
                        <p>Your cart is empty</p>
                        <a href="listing.html" class="text-blue-600 hover:underline">Continue Shopping</a>
                    </div>
                `;
                return;
            }

            let subtotal = 0;
            orderItemsContainer.innerHTML = '';

            cartItems.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;

                const orderItem = document.createElement('div');
                orderItem.className = 'order-summary-item flex items-center space-x-3';
                orderItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="w-12 h-12 object-cover rounded">
                    <div class="flex-1">
                        <h4 class="font-medium text-sm">${item.title}</h4>
                        <p class="text-xs text-gray-600">Qty: ${item.quantity}</p>
                    </div>
                    <span class="font-semibold">$${itemTotal.toLocaleString()}</span>
                `;
                orderItemsContainer.appendChild(orderItem);
            });

            // Update totals
            const tax = subtotal * 0.08; // 8% tax
            const shipping = 15.00;
            const total = subtotal + tax + shipping;

            document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString()}`;
            document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        }

        // Setup payment method selection
        function setupPaymentMethods() {
            const paymentMethods = document.querySelectorAll('.payment-method');
            const cardDetails = document.getElementById('cardDetails');

            paymentMethods.forEach(method => {
                method.addEventListener('click', function() {
                    // Remove selected class from all methods
                    paymentMethods.forEach(m => m.classList.remove('selected'));
                    
                    // Add selected class to clicked method
                    this.classList.add('selected');
                    
                    // Update radio button
                    const radio = this.querySelector('input[type="radio"]');
                    radio.checked = true;
                    
                    // Show/hide card details
                    if (radio.value === 'card') {
                        cardDetails.classList.remove('hidden');
                    } else {
                        cardDetails.classList.add('hidden');
                    }
                });
            });
        }

        // Setup form formatting
        function setupFormFormatting() {
            // Card number formatting
            const cardNumberInput = document.querySelector('input[name="cardNumber"]');
            if (cardNumberInput) {
                cardNumberInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
                    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                    e.target.value = formattedValue;
                });
            }

            // Expiry date formatting
            const expiryInput = document.querySelector('input[name="expiryDate"]');
            if (expiryInput) {
                expiryInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                        value = value.substring(0,2) + '/' + value.substring(2,4);
                    }
                    e.target.value = value;
                });
            }

            // CVV formatting
            const cvvInput = document.querySelector('input[name="cvv"]');
            if (cvvInput) {
                cvvInput.addEventListener('input', function(e) {
                    e.target.value = e.target.value.replace(/\D/g, '');
                });
            }
        }

        // Process order
        function processOrder() {
            // Validate shipping form
            const shippingForm = document.getElementById('shippingForm');
            const formData = new FormData(shippingForm);
            
            // Check required fields
            let isValid = true;
            const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
            
            requiredFields.forEach(field => {
                const input = shippingForm.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '';
                }
            });

            // Validate payment method
            const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            
            if (selectedPaymentMethod === 'card') {
                const cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardholderName'];
                cardFields.forEach(field => {
                    const input = document.querySelector(`input[name="${field}"]`);
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = '#ef4444';
                    } else {
                        input.style.borderColor = '';
                    }
                });
            }

            if (!isValid) {
                showToast('Please fill in all required fields', 'error');
                return;
            }

            // Simulate order processing
            const button = document.querySelector('.btn-primary');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
            button.disabled = true;

            setTimeout(() => {
                // Create order object
                const order = {
                    id: 'ORD-' + Date.now(),
                    date: new Date().toISOString(),
                    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
                    shipping: Object.fromEntries(formData),
                    paymentMethod: selectedPaymentMethod,
                    status: 'confirmed',
                    total: document.getElementById('total').textContent
                };

                // Save order to localStorage
                const orders = JSON.parse(localStorage.getItem('userOrders') || '[]');
                orders.push(order);
                localStorage.setItem('userOrders', JSON.stringify(orders));

                // Clear cart
                localStorage.removeItem('cartItems');

                // Show success modal
                document.getElementById('successModal').classList.remove('hidden');
                
                // Reset button
                button.innerHTML = originalText;
                button.disabled = false;
            }, 2000);
        }

        // Close success modal
        function closeSuccessModal() {
            document.getElementById('successModal').classList.add('hidden');
            window.location.href = 'listing.html';
        }

        // View order details
        function viewOrder() {
            document.getElementById('successModal').classList.add('hidden');
            // Redirect to orders page or show order details
            alert('Order details will be sent to your email');
            window.location.href = 'index.html';
        }

        // Show toast notification
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
                ${message}
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => toast.classList.add('show'), 100);
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
         // Cart Management System
        class CartManager {
            constructor() {
                this.cart = this.loadCart();
                this.init();
            }

            init() {
                this.renderCart();
                this.updateCartCount();
                this.bindEvents();
            }

            loadCart() {
                return JSON.parse(localStorage.getItem('cartItems') || '[]');

            }

 saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(this.cart)); // ✅ ek hi key use karein
  this.updateCartCount();
}



            updateCartCount() {
                const count = this.cart.reduce((total, item) => total + item.quantity, 0);
                document.getElementById('cartCount').textContent = count;
            }

            addToCart(product, quantity = 1) {
                const existingItem = this.cart.find(item => item.id === product.id);
                
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    this.cart.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        category: product.category,
                        quantity: quantity
                    });
                }
                
                this.saveCart();
                this.renderCart();
                this.showToast('Item added to cart!');
            }

            updateQuantity(productId, newQuantity) {
                if (newQuantity <= 0) {
                    this.removeFromCart(productId);
                    return;
                }

                const item = this.cart.find(item => item.id === productId);
                if (item) {
                    item.quantity = newQuantity;
                    this.saveCart();
                    this.renderCart();
                    this.showToast('Quantity updated!');
                }
            }

            removeFromCart(productId) {
                this.cart = this.cart.filter(item => item.id !== productId);
                this.saveCart();
                this.renderCart();
                this.showToast('Item removed from cart!');
            }

            clearCart() {
                this.cart = [];
                this.saveCart();
                this.renderCart();
            }

            getCartTotal() {
                return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            getTax() {
                return this.getCartTotal() * 0.08; // 8% tax
            }

            renderCart() {
                const cartItems = document.getElementById('cartItems');
                const emptyCart = document.getElementById('emptyCart');
                const orderSummary = document.getElementById('orderSummary');
                const checkoutBtn = document.getElementById('checkoutBtn');
                if (!cartItems || !emptyCart) return; // ✅ agar cart page ke elements nahi milay to yahin ruk jao


               // YE CHANGE KARO:
if (this.cart.length === 0) {
    emptyCart.classList.remove("hidden");
    if (checkoutBtn) checkoutBtn.setAttribute("disabled", true);
    // YE LINE ADD KARO:
    if (document.getElementById('orderSummary')) {
        document.getElementById('orderSummary').style.opacity = '0.5';
    }
    return;
} else {
    emptyCart.classList.add("hidden");
    // YE LINE ADD KARO:
    if (document.getElementById('orderSummary')) {
        document.getElementById('orderSummary').style.opacity = '1';
    }
    if (checkoutBtn) checkoutBtn.removeAttribute("disabled");
}


                cartItems.innerHTML = this.cart.map(item => `
                    <div class="cart-item p-4 flex flex-col md:flex-row items-center gap-4 animate-bounce-in">
                        <div class="w-24 h-24 md:w-20 md:h-20 flex-shrink-0">
                            <img src="${item.image}" alt="${item.title}" 
                                 class="w-full h-full object-cover rounded-lg border">
                        </div>
                        
                        <div class="flex-grow text-center md:text-left">
                            <h4 class="font-semibold text-gray-800 mb-1">${item.title}</h4>
                            <p class="text-sm text-gray-500 mb-2">${item.category}</p>
                            <p class="text-lg font-bold text-green-600">$${item.price.toLocaleString()}</p>
                        </div>
                        
                        <div class="flex items-center gap-3">
                            <button class="quantity-btn bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center" 
                                    onclick="cartManager.updateQuantity(${item.id}, ${item.quantity - 1})">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            
                            <span class="mx-2 min-w-[2rem] text-center font-semibold">${item.quantity}</span>
                            
                            <button class="quantity-btn bg-blue-600 hover:bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center" 
                                    onclick="cartManager.updateQuantity(${item.id}, ${item.quantity + 1})">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                        
                        <div class="flex flex-col items-center gap-2">
                            <p class="font-bold text-gray-800">$${(item.price * item.quantity).toLocaleString()}</p>
                            <button class="text-red-500 hover:text-red-700 text-sm" 
                                    onclick="cartManager.removeFromCart(${item.id})">
                                <i class="fas fa-trash mr-1"></i>Remove
                            </button>
                        </div>
                    </div>
                `).join('');

                this.updateOrderSummary();
            }

            updateOrderSummary() {
                const itemCount = this.cart.reduce((total, item) => total + item.quantity, 0);
                const subtotal = this.getCartTotal();
                const tax = this.getTax();
                const total = subtotal + tax;

                document.getElementById('itemCount').textContent = itemCount;
                document.getElementById('subtotal').textContent = subtotal.toFixed(2);
                document.getElementById('tax').textContent = tax.toFixed(2);
                document.getElementById('total').textContent = total.toFixed(2);
            }

            showToast(message) {
                const toast = document.getElementById('successToast');
                const toastMessage = document.getElementById('toastMessage');
                
                toastMessage.textContent = message;
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }

            bindEvents() {
                // Checkout button
               const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      window.location.href = 'login.html?tab=signup';
      return;
    }
    window.location.href = 'checkout.html';
  });
}
;

                // Mobile menu toggle
                const menuToggle = document.getElementById('menuToggle');
                const navLinks = document.getElementById('navLinks');
                
                if (menuToggle && navLinks) {
                    menuToggle.addEventListener('click', () => {
                        navLinks.classList.toggle('show');
                    });
                }
            }
        }

        // Initialize cart manager when DOM is loaded
        let cartManager;
        
        document.addEventListener('DOMContentLoaded', () => {
          
            cartManager = new CartManager();
            // 🔐 Cart icon guard for logged-out users
const cartLink = document.getElementById('cartIcon');
if (cartLink) {
  cartLink.addEventListener('click', function (e) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      e.preventDefault();
      // seedha signup tab open karao
      window.location.href = 'login.html?tab=signup';
    }
  });
}

            
            // Add some sample products if cart is empty (for demo purposes)
            if (cartManager.cart.length === 0) {
                // You can remove this in production
                const sampleProducts = [
                    {
                        id: 1,
                        title: "Smartphone Pro Max",
                        price: 45000,
                        image: "assets/phone.jpg",
                        category: "Electronics"
                    },
                    {
                        id: 2,
                        title: "Wireless Headphones",
                        price: 15000,
                        image: "assets/earbuds.jpg",
                        category: "Electronics"
                    }
                ];
                
                // Add sample items for demo (remove in production)
                // cartManager.addToCart(sampleProducts[0], 1);
                // cartManager.addToCart(sampleProducts[1], 2);
            }
        } 
      );

        // Global function to add products to cart (called from other pages)
        function addToCart(product, quantity = 1) {
            if (cartManager) {
                cartManager.addToCart(product, quantity);
            }
        }

        // CART PAGE CODE
        if (window.location.pathname.includes("cart.html")) {
        document.addEventListener("DOMContentLoaded", () => {
      renderCartPage();
  });
 }

 function renderCartPage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const cartContainer = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");
  const itemCount = document.getElementById("itemCount");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (!cartContainer || !emptyCart) return;

  cartContainer.innerHTML = "";

 if (cartItems.length === 0) {
  emptyCart.classList.remove("hidden");
  if (checkoutBtn) checkoutBtn.setAttribute("disabled", true);
  return;
} else {
  emptyCart.classList.add("hidden");
  if (checkoutBtn) checkoutBtn.removeAttribute("disabled"); // ✅ ye line zaroori hai
}


  

  let subtotal = 0;
  let totalItems = 0;

  cartItems.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item flex items-center p-4 rounded-lg shadow";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-cover rounded mr-4">
      <div class="flex-1">
        <h3 class="font-semibold text-gray-800">${item.title}</h3>
        <p class="text-gray-600">$${item.price.toLocaleString()}</p>
        <div class="flex items-center mt-2">
          <button class="quantity-btn bg-gray-200 px-2 py-1 rounded" onclick="updateCartQuantity(${index}, -1)">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="quantity-btn bg-gray-200 px-2 py-1 rounded" onclick="updateCartQuantity(${index}, 1)">+</button>
          <button class="ml-4 text-red-500" onclick="removeCartItem(${index})">Remove</button>
        </div>
      </div>
      <div class="font-bold text-green-600">$${(item.price * item.quantity).toLocaleString()}</div>
    `;
    cartContainer.appendChild(div);
  });

  // Update summary
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  itemCount.textContent = totalItems;
  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  totalEl.textContent = total.toFixed(2);

  // Update navbar count
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
 }

 function updateCartQuantity(index, change) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (!cartItems[index]) return;
  cartItems[index].quantity += change;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
  }

 function removeCartItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (!cartItems[index]) return;
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
 }

 // Checkout button click
 document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      window.location.href = "checkout.html";
    });
  }
});
// ==================== CART PAGE CODE ====================
if (window.location.pathname.includes("cart.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    renderCartPage();

    // Checkout button click
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        window.location.href = "checkout.html";
      });
    }
  });
}

function renderCartPage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const cartContainer = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");
  const itemCount = document.getElementById("itemCount");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (!cartContainer || !emptyCart) return;

  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    emptyCart.classList.remove("hidden");
    if (checkoutBtn) checkoutBtn.setAttribute("disabled", true);
    return;
  } else {
    emptyCart.classList.add("hidden");
    if (checkoutBtn) checkoutBtn.removeAttribute("disabled");
  }

  let subtotal = 0;
  let totalItems = 0;

  cartItems.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item flex items-center p-4 rounded-lg shadow";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-cover rounded mr-4">
      <div class="flex-1">
        <h3 class="font-semibold text-gray-800">${item.title}</h3>
        <p class="text-gray-600">$${item.price.toLocaleString()}</p>
        <div class="flex items-center mt-2">
          <button class="quantity-btn bg-gray-200 px-2 py-1 rounded" onclick="updateCartQuantity(${index}, -1)">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="quantity-btn bg-gray-200 px-2 py-1 rounded" onclick="updateCartQuantity(${index}, 1)">+</button>
          <button class="ml-4 text-red-500" onclick="removeCartItem(${index})">Remove</button>
        </div>
      </div>
      <div class="font-bold text-green-600">$${(item.price * item.quantity).toLocaleString()}</div>
    `;
    cartContainer.appendChild(div);
  });

  // Update summary
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  itemCount.textContent = totalItems;
  subtotalEl.textContent = subtotal.toFixed(2);
  taxEl.textContent = tax.toFixed(2);
  totalEl.textContent = total.toFixed(2);

  // Update navbar cart count
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

function updateCartQuantity(index, change) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (!cartItems[index]) return;
  cartItems[index].quantity += change;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
}

function removeCartItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (!cartItems[index]) return;
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
}



function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));

    // optional success message
    showSuccessToast(`${product.title} added to cart`);
}
document.addEventListener("DOMContentLoaded", () => {
    updateCartCountGlobal();
});

function updateCartCountGlobal() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const cartCountSpan = document.getElementById('cartCount');
    if (cartCountSpan) {
        cartCountSpan.textContent = totalItems;
    }
}



// ✅ GLOBAL LOGIN CHECK - HAR PAGE PE CHALEGA
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userName = localStorage.getItem('userName');
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const userIcon = document.getElementById('userIcon');

    if (isLoggedIn && userName) {
        // Hide login button and show user menu
        if (loginBtn) loginBtn.classList.add('hidden');
        if (userMenu) userMenu.classList.remove('hidden');

        // Show first letter OR photo
        const savedPic = localStorage.getItem('profilePic');
        if (savedPic && userIcon) {
            userIcon.style.backgroundImage = `url(${savedPic})`;
            userIcon.style.backgroundSize = "cover";
            userIcon.textContent = "";
        } else if (userIcon) {
            userIcon.textContent = userName.charAt(0).toUpperCase();
        }

    } else {
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
    }

    // Dropdown toggle
    const dropdown = document.getElementById('userDropdown');
    if (userIcon && dropdown) {
        userIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !userIcon.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    }

    // ✅ Profile upload ka code (global rakho)
    const profileUpload = document.getElementById('profileUpload');
    if (profileUpload) {
        profileUpload.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                    localStorage.setItem('profilePic', ev.target.result);
                    if (userIcon) {
                        userIcon.style.backgroundImage = `url(${ev.target.result})`;
                        userIcon.style.backgroundSize = "cover";
                        userIcon.textContent = "";
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal");
  const closeBtn = document.getElementById("closeModal");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    });
  }
});



// Add this logic to your js/script.js file

// --- NEW FUNCTIONALITY FOR USER PROFILE AND MENU ---

// Call this function on all pages to check the user's login state
document.addEventListener('DOMContentLoaded', () => {
    checkUserLoginStatus();

    // Event listeners for the user menu
    const userIcon = document.getElementById('userIcon');
    const userDropdown = document.getElementById('userDropdown');
    const profileUpload = document.getElementById('profileUpload');

    if (userIcon) {
        userIcon.addEventListener('click', () => {
            userDropdown.classList.toggle('show');
        });
    }

    if (profileUpload) {
        profileUpload.addEventListener('change', handleProfilePictureUpload);
    }
    
    // Close dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (userIcon && !userIcon.contains(event.target) && userDropdown && !userDropdown.contains(event.target)) {
            userDropdown.classList.remove('show');
        }
    });
});

function checkUserLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');

    if (isLoggedIn && userMenu) {
        // User is logged in
        if (loginBtn) loginBtn.classList.add('hidden');
        userMenu.classList.remove('hidden');
        
        // Populate user details
        const userName = localStorage.getItem('userName') || 'User';
        const userEmail = localStorage.getItem('userEmail') || 'email@example.com';
        const userInitial = userName.charAt(0).toUpperCase();

        const userIcon = document.getElementById('userIcon');
        const dropdownUserName = document.getElementById('dropdownUserName');
        const dropdownUserEmail = document.getElementById('dropdownUserEmail');
        
        if (dropdownUserName) dropdownUserName.textContent = userName;
        if (dropdownUserEmail) dropdownUserEmail.textContent = userEmail;

        // Load and display profile picture
        const profilePic = localStorage.getItem('userProfilePic');
        if (profilePic) {
            userIcon.style.backgroundImage = `url(${profilePic})`;
            userIcon.textContent = ''; // Clear the initial
        } else {
            userIcon.textContent = userInitial;
            userIcon.style.backgroundImage = ''; // Clear any previous image
        }
    } else {
        // User is not logged in
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
    }
}

function handleProfilePictureUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        const imageDataUrl = e.target.result;
        // Save image to local storage
        localStorage.setItem('userProfilePic', imageDataUrl);

        // Immediately update the icon
        const userIcon = document.getElementById('userIcon');
        if (userIcon) {
            userIcon.style.backgroundImage = `url(${imageDataUrl})`;
            userIcon.textContent = ''; // Clear initial
        }
    };

    reader.readAsDataURL(file);
}




// Ensure your existing logout function also clears the profile picture
function logout() {
    // User ki information remove karein
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userProfilePic');
    
    // YEH NAYI LINE ADD KARNI HAI
    localStorage.removeItem('cartItems'); 

    // User ko login page par bhej dein
    window.location.href = 'login.html';
}

// Make sure your existing checkLoginStatus() function is replaced by checkUserLoginStatus()
// If you have a function named checkLoginStatus, you can rename it or merge it with the new one.