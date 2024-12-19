export interface Order {
    invoiceNo: string;
    orderTime: string;
    customerName: string;
    method: 'Cash' | 'Card';
    amount: number;
    status: 'Pending' | 'Processing' | 'Cancel';
  }
  
  export const ordersData: Order[] = [
    {
      invoiceNo: '11038',
      orderTime: '25 Nov, 2024 1:57 PM',
      customerName: 'Alamgir Hossain',
      method: 'Card',
      amount: 953.11,
      status: 'Pending'
    },
    {
      invoiceNo: '11047',
      orderTime: '25 Nov, 2024 1:02 PM',
      customerName: 'Mo Salah',
      method: 'Cash',
      amount: 933.87,
      status: 'Pending'
    },
    {
      invoiceNo: '11429',
      orderTime: '25 Nov, 2024 9:51 AM',
      customerName: 'Xx undefined',
      method: 'Cash',
      amount: 122.16,
      status: 'Pending'
    },
    {
      invoiceNo: '11428',
      orderTime: '25 Nov, 2024 9:23 AM',
      customerName: 'Xx',
      method: 'Cash',
      amount: 168.32,
      status: 'Pending'
    },
    {
      invoiceNo: '11427',
      orderTime: '24 Nov, 2024 10:23 PM',
      customerName: 'Abdul Mannan',
      method: 'Cash',
      amount: 90.78,
      status: 'Processing'
    },
    {
      invoiceNo: '11426',
      orderTime: '24 Nov, 2024 7:07 PM',
      customerName: 'Abdul Mannan',
      method: 'Cash',
      amount: 122.33,
      status: 'Pending'
    },
    {
      invoiceNo: '11423',
      orderTime: '24 Nov, 2024 6:59 PM',
      customerName: 'john doe undefined',
      method: 'Cash',
      amount: 184.90,
      status: 'Cancel'
    },
    {
      invoiceNo: '11413',
      orderTime: '24 Nov, 2024 6:20 PM',
      customerName: 'amira ullabel undefined',
      method: 'Cash',
      amount: 2818.03,
      status: 'Processing'
    }
  ];