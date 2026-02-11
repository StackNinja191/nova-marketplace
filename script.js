document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('contact.html')) {
    var elements = document.querySelectorAll('.floating-element');
    elements.forEach(function(element, index) {
      element.style.animationDelay = '-' + (index * 2) + 's';
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
      var particles = document.querySelectorAll('.particle');
      var scrolled = window.pageYOffset;

      particles.forEach(function(particle, index) {
        var speed = 0.1 + (index * 0.05);
        particle.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
      });
    });
  }
});

// PRODUCTS DATA
var defaultProducts = [
  // Electronics
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
  { id: 20, title: "Video Editing", description: "Professional video editing service for marketing, events, and social media", price: 20000, category: "Services", image: "assets/video edting.jpg" },
  { id: 21, title: "Consulting", description: "Business strategy and IT consulting services for startups and enterprises", price: 35000, category: "Services", image: "assets/consulting.jpg" },
  { id: 22, title: "Data Analysis", description: "Advanced data analytics and business intelligence reporting services", price: 28000, category: "Services", image: "assets/data analysis.jpg" },
  { id: 23, title: "Cloud Migration", description: "Complete cloud migration service with security and performance optimization", price: 40000, category: "Services", image: "assets/cloud.jpg" },
  
  // Clothing
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
  { id: 35, title: "Sneakers", description: "Trendy casual sneakers with comfortable sole and modern athletic design", price: 12000, category: "Clothing", image: "assets/Sneakers.jpg" }
];

// Function to get all products (default + user added) - iOS COMPATIBLE
function getAllProducts() {
    var userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    // Use .concat() instead of spread operator for iOS compatibility
    return defaultProducts.concat(userProducts);
}

// PAGE CHECK: LISTING PAGE
if (document.getElementById('productGrid')) {
  var allProducts = getAllProducts();
  // Use slice() instead of spread operator for iOS compatibility
  var filteredProducts = allProducts.slice();
  var currentFilters = { category: 'all', price: 'all' };

  var filterBtn = document.getElementById('filterBtn');
  var filterDropdown = document.getElementById('filterDropdown');
  var productGrid = document.getElementById('productGrid');
  var noResults = document.getElementById('noResults');
  var resultCount = document.getElementById('resultCount');
  var applyFiltersBtn = document.getElementById('applyFilters');
  var clearFiltersBtn = document.getElementById('clearFilters');

  if (filterBtn && filterDropdown) {
    filterBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      filterDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
      if (!filterDropdown.contains(e.target) && !filterBtn.contains(e.target)) {
        filterDropdown.classList.remove('active');
      }
    });
  }

  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function() {
      applyFilters();
      filterDropdown.classList.remove('active');
    });
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', function() {
      clearAllFilters();
      filterDropdown.classList.remove('active');
    });
  }

  function applyFilters() {
    var selectedCategory = document.querySelector('input[name="category"]:checked').value;
    var selectedPrice = document.querySelector('input[name="price"]:checked').value;
    currentFilters.category = selectedCategory;
    currentFilters.price = selectedPrice;

    filteredProducts = allProducts.filter(function(product) {
      var categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      var priceMatch = true;

      if (selectedPrice !== 'all') {
        var priceRange = selectedPrice.split('-').map(Number);
        var minPrice = priceRange[0];
        var maxPrice = priceRange[1];
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
    // Use slice() instead of spread operator
    filteredProducts = allProducts.slice();
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

    filteredProducts.forEach(function(product) {
      var productCard = createProductCard(product);
      productGrid.appendChild(productCard);
    });
  }

  // Pre-select category if passed in URL
  var urlParams = new URLSearchParams(window.location.search);
  var categoryParam = urlParams.get("category");

  if (categoryParam && categoryParam !== "all") {
    currentFilters.category = categoryParam;
    filteredProducts = allProducts.filter(function(p) {
      return p.category === categoryParam;
    });
    renderProducts();

    var categoryInput = document.querySelector('input[name="category"][value="' + categoryParam + '"]');
    if (categoryInput) {
      categoryInput.checked = true;
    }
  }

  function createProductCard(product) {
    var card = document.createElement('div');
    card.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden fade-in relative';

    var currentUser = localStorage.getItem('userName');
    var isOwner = product.seller === currentUser;
    var isDashboard = window.location.pathname.includes('dashboard.html');

    card.addEventListener('click', function(e) {
      if (e.target.closest('.delete-btn')) return;

      var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

      if (!isLoggedIn) {
        window.location.href = 'login.html?tab=signup';
        return;
      }

      if (e.target.closest('.add-to-cart-btn')) {
        e.stopPropagation();
        if (typeof cartManager !== 'undefined') {
          cartManager.addToCart(product);
        }
        return;
      }

      localStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = 'detail.html';
    });

    var deleteButton = '';
    if (isOwner && isDashboard) {
      deleteButton = '<div class="absolute top-2 right-2 z-10">' +
        '<button onclick="deleteProduct(' + product.id + ')" ' +
        'class="delete-btn bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110" ' +
        'title="Delete Product">' +
        '<i class="fas fa-trash text-sm"></i>' +
        '</button>' +
        '</div>';
    }

    var sellerInfo = '';
    if (product.seller) {
      sellerInfo = '<p class="text-xs text-gray-500 mb-2">Seller: ' + product.seller + '</p>';
    }

    card.innerHTML = deleteButton +
      '<div class="aspect-w-1 aspect-h-1">' +
      '<img src="' + product.image + '" alt="' + product.title + '" class="w-full h-64 object-cover">' +
      '</div>' +
      '<div class="p-4">' +
      '<div class="flex justify-between items-start mb-2">' +
      '<h3 class="text-lg font-semibold text-gray-800 line-clamp-2">' + product.title + '</h3>' +
      '<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2">' + product.category + '</span>' +
      '</div>' +
      '<p class="text-gray-600 text-sm mb-3 line-clamp-2">' + product.description + '</p>' +
      sellerInfo +
      '<div class="flex justify-between items-center">' +
      '<span class="text-xl font-bold text-green-600">$' + product.price.toLocaleString() + '</span>' +
      '<button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">' +
      '<i class="fas fa-shopping-cart mr-1"></i> Add to Cart' +
      '</button>' +
      '</div>' +
      '</div>';

    return card;
  }

  function refreshProducts() {
    allProducts = getAllProducts();
    filteredProducts = allProducts.slice();
    applyFilters();
  }

  window.addEventListener('storage', function(e) {
    if (e.key === 'userProducts') {
      refreshProducts();
    }
  });

  window.addEventListener('focus', refreshProducts);

  renderProducts();
}

// DETAILS PAGE CODE
if (window.location.pathname.includes('detail.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    var data = localStorage.getItem('selectedProduct');
    var product = data ? JSON.parse(data) : null;
    var container = document.getElementById("productDetail");

    if (!product) {
      container.innerHTML = '<h2 class="text-xl font-bold text-center col-span-2">Product not found</h2>';
      return;
    }

    container.innerHTML = '<div>' +
      '<img src="' + product.image + '" alt="' + product.title + '" class="w-full h-96 object-cover rounded-md shadow-md">' +
      '</div>' +
      '<div>' +
      '<h2 class="text-3xl font-bold text-gray-800 mb-4">' + product.title + '</h2>' +
      '<p class="text-gray-600 mb-4 text-sm">Category: <span class="font-medium">' + product.category + '</span></p>' +
      '<p class="text-gray-700 text-lg mb-6">' + product.description + '</p>' +
      '<p class="text-2xl font-bold text-green-600 mb-6">$' + product.price.toLocaleString() + '</p>' +
      '<button id="addToCartBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">' +
      '<i class="fas fa-shopping-cart mr-2"></i> Add to Cart' +
      '</button>' +
      '</div>';

    var addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
      addBtn.addEventListener('click', function() {
        var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (!isLoggedIn) {
          window.location.href = 'login.html?tab=signup';
          return;
        }

        if (typeof cartManager !== 'undefined') {
          cartManager.addToCart(product);
        } else {
          addToCart(product);
        }
      });
    }
  });
}

// Contact form handler
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('contact.html')) {
    var contactForm = document.querySelector('.contact-container form');
    if (contactForm) {
      var fields = contactForm.querySelectorAll('input, textarea');

      contactForm.addEventListener('submit', function (e) {
        var valid = true;

        contactForm.querySelectorAll('.error-msg').forEach(function(el) {
          el.remove();
        });
        fields.forEach(function(f) {
          f.classList.remove('input-error');
        });

        fields.forEach(function(field) {
          if (!field.value.trim()) {
            valid = false;
            field.classList.add('input-error');
            var error = document.createElement('div');
            error.className = 'error-msg';
            error.textContent = 'This field is required';
            field.parentNode.appendChild(error);
          }
        });

        if (!valid) {
          e.preventDefault();
          return;
        }

        localStorage.setItem('formSubmitted', 'true');
      });

      if (localStorage.getItem('formSubmitted') === 'true') {
        showContactToast('Thank you for contacting us!');
        localStorage.removeItem('formSubmitted');
      }
    }
  }

  function showContactToast(message) {
    var toast = document.createElement('div');
    toast.className = 'contact-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.classList.add('show');
    }, 50);
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        toast.remove();
      }, 500);
    }, 2000);
  }
});

// Add Product Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('addproduct.html')) {
    checkLoginStatus();
    
    var imageInput = document.getElementById('productImage');
    if (imageInput) {
      imageInput.addEventListener('change', handleImageUpload);
    }
    
    var productForm = document.getElementById('productForm');
    if (productForm) {
      productForm.addEventListener('submit', handleProductSubmission);
    }
  }
});

function checkLoginStatus() {
  var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  var userName = localStorage.getItem('userName');
  
  var notLoggedInDiv = document.getElementById('notLoggedIn');
  var addProductForm = document.getElementById('addProductForm');
  var loginBtn = document.getElementById('loginBtn');
  var userInfo = document.getElementById('userInfo');
  var welcomeUser = document.getElementById('welcomeUser');
  
  if (isLoggedIn && userName) {
    if (notLoggedInDiv) notLoggedInDiv.classList.add('hidden');
    if (addProductForm) addProductForm.classList.remove('hidden');
    if (loginBtn) loginBtn.classList.add('hidden');
    if (userInfo) userInfo.classList.remove('hidden');
    if (document.getElementById('userName')) document.getElementById('userName').textContent = userName;
    if (welcomeUser) welcomeUser.textContent = userName;
  } else {
    if (notLoggedInDiv) notLoggedInDiv.classList.remove('hidden');
    if (addProductForm) addProductForm.classList.add('hidden');
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (userInfo) userInfo.classList.add('hidden');
  }
}

function handleImageUpload(event) {
  var file = event.target.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var imageUploadArea = document.getElementById('imageUploadArea');
      var imagePreview = document.getElementById('imagePreview');
      var previewImg = document.getElementById('previewImg');
      
      imageUploadArea.classList.add('hidden');
      imagePreview.classList.remove('hidden');
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function removeImage() {
  var imageUploadArea = document.getElementById('imageUploadArea');
  var imagePreview = document.getElementById('imagePreview');
  var imageInput = document.getElementById('productImage');
  
  imageUploadArea.classList.remove('hidden');
  imagePreview.classList.add('hidden');
  imageInput.value = '';
}

function handleProductSubmission(event) {
  event.preventDefault();
  
  var formData = new FormData(event.target);
  var userName = localStorage.getItem('userName');
  
  var imageFile = formData.get('productImage');
  
  if (imageFile && imageFile.size > 0) {
    var reader = new FileReader();
    reader.onload = function(e) {
      createAndSaveProduct(formData, userName, e.target.result);
    };
    reader.readAsDataURL(imageFile);
  } else {
    createAndSaveProduct(formData, userName, 'assets/default-product.jpg');
  }
}

function createAndSaveProduct(formData, userName, imagePath) {
  var newProduct = {
    id: Date.now(),
    title: formData.get('productTitle'),
    description: formData.get('description'),
    price: parseInt(formData.get('price')),
    category: formData.get('category'),
    seller: userName,
    image: imagePath,
    dateAdded: new Date().toISOString()
  };
  
  var userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
  userProducts.push(newProduct);
  localStorage.setItem('userProducts', JSON.stringify(userProducts));
  
  showSuccessModal();
}

function showSuccessModal() {
  var modal = document.getElementById('successModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  var modal = document.getElementById('successModal');
  if (modal) {
    modal.classList.add('hidden');
    resetForm();
  }
}

function resetForm() {
  var form = document.getElementById('productForm');
  if (form) {
    form.reset();
    removeImage();
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userProfilePic');
  localStorage.removeItem('cartItems');
  window.location.href = 'login.html';
}

// Authentication Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('login.html')) {
    initAuthPage();
  }
});

function initAuthPage() {
  var loginTab = document.getElementById('loginTab');
  var signupTab = document.getElementById('signupTab');

  if (loginTab && signupTab) {
    loginTab.addEventListener('click', function() {
      switchTab('login');
    });
    signupTab.addEventListener('click', function() {
      switchTab('signup');
    });

    var urlParams = new URLSearchParams(window.location.search);
    var tab = urlParams.get('tab');
    if (tab === 'signup') {
      switchTab('signup');
    } else {
      switchTab('login');
    }
  }
}

function switchTab(tab) {
  var loginTab = document.getElementById('loginTab');
  var signupTab = document.getElementById('signupTab');
  var loginForm = document.getElementById('loginForm');
  var signupForm = document.getElementById('signupForm');

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

function handleLogin(event) {
  event.preventDefault();
  
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;
  
  if (!email || !password) {
    showErrorToast('Please fill all fields');
    return;
  }
  
  var users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  var user = users.find(function(u) {
    return u.email === email && u.password === password;
  });
  
  if (user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', user.firstName + ' ' + user.lastName);
    localStorage.setItem('userEmail', user.email);
    
    showSuccessToast('Login successful! Redirecting...');
  } else {
    showErrorToast('Invalid email or password');
  }
  
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('rememberMe').checked = false;
}

function handleSignup(event) {
  event.preventDefault();
  
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var agreeTerms = document.getElementById('agreeTerms').checked;
  
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
  
  var users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  var existingUser = users.find(function(u) {
    return u.email === email;
  });
  
  if (existingUser) {
    showErrorToast('User with this email already exists');
    return;
  }
  
  var newUser = {
    id: Date.now(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    registeredDate: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem('registeredUsers', JSON.stringify(users));
  
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userName', firstName + ' ' + lastName);
  localStorage.setItem('userEmail', email);
  
  showSuccessToast('Account created successfully! Redirecting...');
  
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('confirmPassword').value = '';
  document.getElementById('agreeTerms').checked = false;
}

function showSuccessToast(message) {
  var toast = document.getElementById('successToast');
  var messageSpan = document.getElementById('toastMessage');
  
  if (toast && messageSpan) {
    messageSpan.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-slide-in');
    
    setTimeout(function() {
      hideToast(toast);
    }, 3000);
  }
}

function showErrorToast(message) {
  var toast = document.getElementById('errorToast');
  var messageSpan = document.getElementById('errorMessage');
  
  if (toast && messageSpan) {
    messageSpan.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-slide-in');
    
    setTimeout(function() {
      hideToast(toast);
    }, 3000);
  }
}

function hideToast(toast) {
  toast.classList.add('toast-slide-out');
  setTimeout(function() {
    toast.classList.add('hidden');
    toast.classList.remove('toast-slide-in', 'toast-slide-out');
  }, 300);
}

function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    var userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    userProducts = userProducts.filter(function(product) {
      return product.id !== productId;
    });
    localStorage.setItem('userProducts', JSON.stringify(userProducts));
    showDeleteToast('Product deleted successfully!');
    
    if (typeof refreshProducts === 'function') {
      refreshProducts();
    }
  }
}

function showDeleteToast(message) {
  var toast = document.createElement('div');
  toast.className = 'delete-toast fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  toast.innerHTML = '<i class="fas fa-trash mr-2"></i>' + message;
  
  document.body.appendChild(toast);
  
  setTimeout(function() {
    toast.style.transform = 'translateX(0)';
  }, 50);
  
  setTimeout(function() {
    toast.style.transform = 'translateX(100%)';
    setTimeout(function() {
      toast.remove();
    }, 300);
  }, 3000);
}

function isUserProduct(product) {
  var currentUser = localStorage.getItem('userName');
  return product.seller === currentUser;
}

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('checkout.html')) {
    loadCartItems();
    setupPaymentMethods();
    setupFormFormatting();
  }
});

function loadCartItems() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  var orderItemsContainer = document.getElementById('orderItems');
  
  if (cartItems.length === 0) {
    orderItemsContainer.innerHTML = '<div class="text-center py-8 text-gray-500">' +
      '<i class="fas fa-shopping-cart text-4xl mb-4"></i>' +
      '<p>Your cart is empty</p>' +
      '<a href="listing.html" class="text-blue-600 hover:underline">Continue Shopping</a>' +
      '</div>';
    return;
  }

  var subtotal = 0;
  orderItemsContainer.innerHTML = '';

  cartItems.forEach(function(item) {
    var itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    var orderItem = document.createElement('div');
    orderItem.className = 'order-summary-item flex items-center space-x-3';
    orderItem.innerHTML = '<img src="' + item.image + '" alt="' + item.title + '" class="w-12 h-12 object-cover rounded">' +
      '<div class="flex-1">' +
      '<h4 class="font-medium text-sm">' + item.title + '</h4>' +
      '<p class="text-xs text-gray-600">Qty: ' + item.quantity + '</p>' +
      '</div>' +
      '<span class="font-semibold">$' + itemTotal.toLocaleString() + '</span>';
    orderItemsContainer.appendChild(orderItem);
  });

  var tax = subtotal * 0.08;
  var shipping = 15.00;
  var total = subtotal + tax + shipping;

  document.getElementById('subtotal').textContent = '$' + subtotal.toLocaleString();
  document.getElementById('tax').textContent = '$' + tax.toFixed(2);
  document.getElementById('total').textContent = '$' + total.toFixed(2);
}

function setupPaymentMethods() {
  var paymentMethods = document.querySelectorAll('.payment-method');
  var cardDetails = document.getElementById('cardDetails');

  paymentMethods.forEach(function(method) {
    method.addEventListener('click', function() {
      paymentMethods.forEach(function(m) {
        m.classList.remove('selected');
      });
      
      this.classList.add('selected');
      var radio = this.querySelector('input[type="radio"]');
      radio.checked = true;
      
      if (radio.value === 'card') {
        cardDetails.classList.remove('hidden');
      } else {
        cardDetails.classList.add('hidden');
      }
    });
  });
}

function setupFormFormatting() {
  var cardNumberInput = document.querySelector('input[name="cardNumber"]');
  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', function(e) {
      var value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
      var match = value.match(/.{1,4}/g);
      var formattedValue = match ? match.join(' ') : value;
      e.target.value = formattedValue;
    });
  }

  var expiryInput = document.querySelector('input[name="expiryDate"]');
  if (expiryInput) {
    expiryInput.addEventListener('input', function(e) {
      var value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0,2) + '/' + value.substring(2,4);
      }
      e.target.value = value;
    });
  }

  var cvvInput = document.querySelector('input[name="cvv"]');
  if (cvvInput) {
    cvvInput.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  }
}

function processOrder() {
  var shippingForm = document.getElementById('shippingForm');
  var formData = new FormData(shippingForm);
  
  var isValid = true;
  var requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
  
  requiredFields.forEach(function(field) {
    var input = shippingForm.querySelector('[name="' + field + '"]');
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = '#ef4444';
    } else {
      input.style.borderColor = '';
    }
  });

  var selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  
  if (selectedPaymentMethod === 'card') {
    var cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardholderName'];
    cardFields.forEach(function(field) {
      var input = document.querySelector('input[name="' + field + '"]');
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

  var button = document.querySelector('.btn-primary');
  var originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
  button.disabled = true;

  setTimeout(function() {
    var order = {
      id: 'ORD-' + Date.now(),
      date: new Date().toISOString(),
      items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
      shipping: Object.fromEntries(formData),
      paymentMethod: selectedPaymentMethod,
      status: 'confirmed',
      total: document.getElementById('total').textContent
    };

    var orders = JSON.parse(localStorage.getItem('userOrders') || '[]');
    orders.push(order);
    localStorage.setItem('userOrders', JSON.stringify(orders));

    localStorage.removeItem('cartItems');

    document.getElementById('successModal').classList.remove('hidden');
    
    button.innerHTML = originalText;
    button.disabled = false;
  }, 2000);
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.add('hidden');
  window.location.href = 'listing.html';
}

function viewOrder() {
  document.getElementById('successModal').classList.add('hidden');
  alert('Order details will be sent to your email');
  window.location.href = 'index.html';
}

function showToast(message, type) {
  if (typeof type === 'undefined') type = 'success';
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<i class="fas ' + (type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle') + ' mr-2"></i>' + message;
  
  document.body.appendChild(toast);
  
  setTimeout(function() {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() {
      toast.remove();
    }, 300);
  }, 3000);
}

// Cart Management System
var CartManager = function() {
  this.cart = this.loadCart();
  this.init();
};

CartManager.prototype.init = function() {
  this.renderCart();
  this.updateCartCount();
  this.bindEvents();
};

CartManager.prototype.loadCart = function() {
  return JSON.parse(localStorage.getItem('cartItems') || '[]');
};

CartManager.prototype.saveCart = function() {
  localStorage.setItem('cartItems', JSON.stringify(this.cart));
  this.updateCartCount();
};

CartManager.prototype.updateCartCount = function() {
  var count = this.cart.reduce(function(total, item) {
    return total + item.quantity;
  }, 0);
  var cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    cartCountEl.textContent = count;
  }
};

CartManager.prototype.addToCart = function(product, quantity) {
  if (typeof quantity === 'undefined') quantity = 1;
  
  var existingItem = this.cart.find(function(item) {
    return item.id === product.id;
  });
  
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
};

CartManager.prototype.updateQuantity = function(productId, newQuantity) {
  if (newQuantity <= 0) {
    this.removeFromCart(productId);
    return;
  }

  var item = this.cart.find(function(item) {
    return item.id === productId;
  });
  if (item) {
    item.quantity = newQuantity;
    this.saveCart();
    this.renderCart();
    this.showToast('Quantity updated!');
  }
};

CartManager.prototype.removeFromCart = function(productId) {
  this.cart = this.cart.filter(function(item) {
    return item.id !== productId;
  });
  this.saveCart();
  this.renderCart();
  this.showToast('Item removed from cart!');
};

CartManager.prototype.clearCart = function() {
  this.cart = [];
  this.saveCart();
  this.renderCart();
};

CartManager.prototype.getCartTotal = function() {
  return this.cart.reduce(function(total, item) {
    return total + (item.price * item.quantity);
  }, 0);
};

CartManager.prototype.getTax = function() {
  return this.getCartTotal() * 0.08;
};

CartManager.prototype.renderCart = function() {
  var cartItems = document.getElementById('cartItems');
  var emptyCart = document.getElementById('emptyCart');
  var checkoutBtn = document.getElementById('checkoutBtn');
  if (!cartItems || !emptyCart) return;

  var self = this;
  
  if (this.cart.length === 0) {
    emptyCart.classList.remove("hidden");
    if (checkoutBtn) checkoutBtn.setAttribute("disabled", true);
    var orderSummary = document.getElementById('orderSummary');
    if (orderSummary) {
      orderSummary.style.opacity = '0.5';
    }
    return;
  } else {
    emptyCart.classList.add("hidden");
    var orderSummary = document.getElementById('orderSummary');
    if (orderSummary) {
      orderSummary.style.opacity = '1';
    }
    if (checkoutBtn) checkoutBtn.removeAttribute("disabled");
  }

  cartItems.innerHTML = this.cart.map(function(item) {
    return '<div class="cart-item p-4 flex flex-col md:flex-row items-center gap-4 animate-bounce-in">' +
      '<div class="w-24 h-24 md:w-20 md:h-20 flex-shrink-0">' +
      '<img src="' + item.image + '" alt="' + item.title + '" class="w-full h-full object-cover rounded-lg border">' +
      '</div>' +
      '<div class="flex-grow text-center md:text-left">' +
      '<h4 class="font-semibold text-gray-800 mb-1">' + item.title + '</h4>' +
      '<p class="text-sm text-gray-500 mb-2">' + item.category + '</p>' +
      '<p class="text-lg font-bold text-green-600">$' + item.price.toLocaleString() + '</p>' +
      '</div>' +
      '<div class="flex items-center gap-3">' +
      '<button class="quantity-btn bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center" onclick="cartManager.updateQuantity(' + item.id + ', ' + (item.quantity - 1) + ')">' +
      '<i class="fas fa-minus text-xs"></i>' +
      '</button>' +
      '<span class="mx-2 min-w-[2rem] text-center font-semibold">' + item.quantity + '</span>' +
      '<button class="quantity-btn bg-blue-600 hover:bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center" onclick="cartManager.updateQuantity(' + item.id + ', ' + (item.quantity + 1) + ')">' +
      '<i class="fas fa-plus text-xs"></i>' +
      '</button>' +
      '</div>' +
      '<div class="flex flex-col items-center gap-2">' +
      '<p class="font-bold text-gray-800">$' + (item.price * item.quantity).toLocaleString() + '</p>' +
      '<button class="text-red-500 hover:text-red-700 text-sm" onclick="cartManager.removeFromCart(' + item.id + ')">' +
      '<i class="fas fa-trash mr-1"></i>Remove' +
      '</button>' +
      '</div>' +
      '</div>';
  }).join('');

  this.updateOrderSummary();
};

CartManager.prototype.updateOrderSummary = function() {
  var itemCount = this.cart.reduce(function(total, item) {
    return total + item.quantity;
  }, 0);
  var subtotal = this.getCartTotal();
  var tax = this.getTax();
  var total = subtotal + tax;

  var itemCountEl = document.getElementById('itemCount');
  var subtotalEl = document.getElementById('subtotal');
  var taxEl = document.getElementById('tax');
  var totalEl = document.getElementById('total');
  
  if (itemCountEl) itemCountEl.textContent = itemCount;
  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
  if (taxEl) taxEl.textContent = tax.toFixed(2);
  if (totalEl) totalEl.textContent = total.toFixed(2);
};

CartManager.prototype.showToast = function(message) {
  var toast = document.getElementById('successToast');
  var toastMessage = document.getElementById('toastMessage');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3000);
  }
};

CartManager.prototype.bindEvents = function() {
  var checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        window.location.href = 'login.html?tab=signup';
        return;
      }
      window.location.href = 'checkout.html';
    });
  }

  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }
};

var cartManager;

document.addEventListener('DOMContentLoaded', function() {
  cartManager = new CartManager();
  
  var cartLink = document.getElementById('cartIcon');
  if (cartLink) {
    cartLink.addEventListener('click', function (e) {
      var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        e.preventDefault();
        window.location.href = 'login.html?tab=signup';
      }
    });
  }
});

function addToCart(product, quantity) {
  if (typeof quantity === 'undefined') quantity = 1;
  if (cartManager) {
    cartManager.addToCart(product, quantity);
  }
}

// CART PAGE CODE
if (window.location.pathname.includes("cart.html")) {
  document.addEventListener("DOMContentLoaded", function() {
    renderCartPage();

    var checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", function() {
        window.location.href = "checkout.html";
      });
    }
  });
}

function renderCartPage() {
  var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  var cartContainer = document.getElementById("cartItems");
  var emptyCart = document.getElementById("emptyCart");
  var itemCount = document.getElementById("itemCount");
  var subtotalEl = document.getElementById("subtotal");
  var taxEl = document.getElementById("tax");
  var totalEl = document.getElementById("total");
  var checkoutBtn = document.getElementById("checkoutBtn");

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

  var subtotal = 0;
  var totalItems = 0;

  cartItems.forEach(function(item, index) {
    subtotal += item.price * item.quantity;
    totalItems += item.quantity;

    var div = document.createElement("div");
    div.className = "cart-item flex items-center p-4 rounded-lg shadow";
    div.innerHTML = '<img src="' + item.image + '" alt="' + item.title + '" class="w-20 h-20 object-cover rounded mr-4">' +
      '<div class="flex-1">' +
      '<h3 class="font-semibold text-gray-800">' + item.title + '</h3>' +
      '<p class="text-gray-600">$' + item.price.toLocaleString() + '</p>' +
      '<div class="flex items-center mt-2">' +
      '<button class="quantity-btn bg-gray-200 px-2 py-1 rounded" onclick="updateCartQuantity(' + index + ', -1)">-</button>' +
      '<span class="mx-2">' + item.quantity + '</span>' +
      '<button class="quantity-btn bg-gray-200 px-2 py-1 rounded" onclick="updateCartQuantity(' + index + ', 1)">+</button>' +
      '<button class="ml-4 text-red-500" onclick="removeCartItem(' + index + ')">Remove</button>' +
      '</div>' +
      '</div>' +
      '<div class="font-bold text-green-600">$' + (item.price * item.quantity).toLocaleString() + '</div>';
    cartContainer.appendChild(div);
  });

  var tax = subtotal * 0.08;
  var total = subtotal + tax;

  if (itemCount) itemCount.textContent = totalItems;
  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
  if (taxEl) taxEl.textContent = tax.toFixed(2);
  if (totalEl) totalEl.textContent = total.toFixed(2);

  var cartCountNav = document.getElementById("cartCount");
  if (cartCountNav) {
    cartCountNav.textContent = totalItems;
  }
}

function updateCartQuantity(index, change) {
  var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (!cartItems[index]) return;
  cartItems[index].quantity += change;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
}

function removeCartItem(index) {
  var cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  if (!cartItems[index]) return;
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
}

function updateCartCountGlobal() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  var totalItems = cartItems.reduce(function(sum, item) {
    return sum + item.quantity;
  }, 0);

  var cartCountSpan = document.getElementById('cartCount');
  if (cartCountSpan) {
    cartCountSpan.textContent = totalItems;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  updateCartCountGlobal();
});

// GLOBAL LOGIN CHECK
document.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  var userName = localStorage.getItem('userName');
  var loginBtn = document.getElementById('loginBtn');
  var userMenu = document.getElementById('userMenu');
  var userIcon = document.getElementById('userIcon');

  if (isLoggedIn && userName) {
    if (loginBtn) loginBtn.classList.add('hidden');
    if (userMenu) userMenu.classList.remove('hidden');

    var savedPic = localStorage.getItem('profilePic');
    if (savedPic && userIcon) {
      userIcon.style.backgroundImage = 'url(' + savedPic + ')';
      userIcon.style.backgroundSize = "cover";
      userIcon.textContent = "";
    } else if (userIcon) {
      userIcon.textContent = userName.charAt(0).toUpperCase();
    }
  } else {
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (userMenu) userMenu.classList.add('hidden');
  }

  var dropdown = document.getElementById('userDropdown');
  if (userIcon && dropdown) {
    userIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target) && !userIcon.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  }

  var profileUpload = document.getElementById('profileUpload');
  if (profileUpload) {
    profileUpload.addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          localStorage.setItem('profilePic', ev.target.result);
          if (userIcon) {
            userIcon.style.backgroundImage = 'url(' + ev.target.result + ')';
            userIcon.style.backgroundSize = "cover";
            userIcon.textContent = "";
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("loginModal");
  var closeBtn = document.getElementById("closeModal");

  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  checkUserLoginStatus();

  var userIcon = document.getElementById('userIcon');
  var userDropdown = document.getElementById('userDropdown');
  var profileUpload = document.getElementById('profileUpload');

  if (userIcon) {
    userIcon.addEventListener('click', function() {
      if (userDropdown) {
        userDropdown.classList.toggle('show');
      }
    });
  }

  if (profileUpload) {
    profileUpload.addEventListener('change', handleProfilePictureUpload);
  }
  
  window.addEventListener('click', function(event) {
    if (userIcon && !userIcon.contains(event.target) && userDropdown && !userDropdown.contains(event.target)) {
      userDropdown.classList.remove('show');
    }
  });
});

function checkUserLoginStatus() {
  var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  var loginBtn = document.getElementById('loginBtn');
  var userMenu = document.getElementById('userMenu');

  if (isLoggedIn && userMenu) {
    if (loginBtn) loginBtn.classList.add('hidden');
    userMenu.classList.remove('hidden');
    
    var userName = localStorage.getItem('userName') || 'User';
    var userEmail = localStorage.getItem('userEmail') || 'email@example.com';
    var userInitial = userName.charAt(0).toUpperCase();

    var userIcon = document.getElementById('userIcon');
    var dropdownUserName = document.getElementById('dropdownUserName');
    var dropdownUserEmail = document.getElementById('dropdownUserEmail');
    
    if (dropdownUserName) dropdownUserName.textContent = userName;
    if (dropdownUserEmail) dropdownUserEmail.textContent = userEmail;

    var profilePic = localStorage.getItem('userProfilePic');
    if (profilePic && userIcon) {
      userIcon.style.backgroundImage = 'url(' + profilePic + ')';
      userIcon.textContent = '';
    } else if (userIcon) {
      userIcon.textContent = userInitial;
      userIcon.style.backgroundImage = '';
    }
  } else {
    if (loginBtn) loginBtn.classList.remove('hidden');
    if (userMenu) userMenu.classList.add('hidden');
  }
}

function handleProfilePictureUpload(event) {
  var file = event.target.files[0];
  if (!file) return;

  var reader = new FileReader();

  reader.onload = function(e) {
    var imageDataUrl = e.target.result;
    localStorage.setItem('userProfilePic', imageDataUrl);

    var userIcon = document.getElementById('userIcon');
    if (userIcon) {
      userIcon.style.backgroundImage = 'url(' + imageDataUrl + ')';
      userIcon.textContent = '';
    }
  };

  reader.readAsDataURL(file);
}
