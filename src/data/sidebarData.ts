import { 
    LayoutDashboard, 
    Layers, 
    Users, 
    ShoppingCart, 
    UserCircle, 
    Settings, 
    Globe, 
    Store, 
    FileText
  } from 'lucide-react';
  
  export interface SidebarItem {
    icon: any;
    text: string;
    active?: boolean;
    hasChildren?: boolean;
    children?: {
      text: string;
      path: string;
    }[];
  }
  
  export interface SidebarSection {
    title?: string;
    items: SidebarItem[];
  }
  
  export const sidebarSections: SidebarSection[] = [
    {
      items: [
        { icon: LayoutDashboard, text: 'Dashboard', active: true },
        { 
          icon: Layers, 
          text: 'Catalog', 
          hasChildren: true,
          children: [
            { text: 'Products', path: '/products' },
            { text: 'Categories', path: '/categories' },
            { text: 'Attributes', path: '/attributes' },
            { text: 'Coupons', path: '/coupons' }
          ]
        },
        { icon: Users, text: 'Customers' },
        { icon: ShoppingCart, text: 'Orders' },
        { icon: UserCircle, text: 'Our Staff' },
        { icon: Settings, text: 'Settings' }
      ]
    },
    {
      items: [
        { 
          icon: Globe, 
          text: 'International', 
          hasChildren: true,
          children: [
            { text: 'Currency', path: '/currency' },
            { text: 'Language', path: '/language' }
          ]
        },
        { 
          icon: Store, 
          text: 'Online Store', 
          hasChildren: true,
          children: [
            { text: 'Preferences', path: '/store-preferences' },
            { text: 'Payments', path: '/payments' },
            { text: 'Shipping', path: '/shipping' }
          ]
        },
        { 
          icon: FileText, 
          text: 'Pages', 
          hasChildren: true,
          children: [
            { text: 'About Us', path: '/about' },
            { text: 'Contact', path: '/contact' },
            { text: 'Privacy Policy', path: '/privacy' }
          ]
        }
      ]
    }
  ];