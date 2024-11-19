// utils/urls.ts

const Urls = {
    home: '/',
    dashboard: '/dashboard',
    profile: '/profile',
    login: '/login',
    logout: '/logout',
    register: '/signup',
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
  