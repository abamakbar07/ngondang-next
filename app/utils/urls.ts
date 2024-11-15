// utils/urls.ts

const Urls = {
    home: '/',
    dashboard: '/dashboard',
    profile: '/profile',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    register: '/api/auth/signup',
    settings: '/settings',
  
    // Function to generate a URL with a dynamic parameter
    userDetail: (userId: string) => `/users/${userId}`,
    productDetail: (productId: string) => `/products/${productId}`,
  
    // Other potential routes
    about: '/about',
    contact: '/contact',
    help: '/help',
  };
  
  export default Urls;
  