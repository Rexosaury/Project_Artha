import { Message, SIPPerformance, NetWorthData } from '../types';

export const dummyMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m FinGenie, your AI financial assistant. How can I help you today?',
    sender: 'ai',
    timestamp: new Date('2024-01-15T10:00:00'),
  },
  {
    id: '2',
    text: 'Can I afford a ₹50L home loan?',
    sender: 'user',
    timestamp: new Date('2024-01-15T10:01:00'),
  },
  {
    id: '3',
    text: 'Based on your current SIP of ₹10K/month and ₹5L in savings, you\'re eligible if you increase your SIP by ₹4K/month. Here\'s your projected growth:',
    sender: 'ai',
    timestamp: new Date('2024-01-15T10:01:30'),
    chart: {
      type: 'line',
      title: 'SIP Growth Projection',
      data: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [{
          label: 'Current SIP (₹10K)',
          data: [120000, 250000, 390000, 540000, 700000],
          borderColor: '#1A73E8',
          backgroundColor: 'rgba(26, 115, 232, 0.1)',
          tension: 0.4
        }, {
          label: 'Recommended SIP (₹14K)',
          data: [168000, 350000, 546000, 756000, 980000],
          borderColor: '#34A853',
          backgroundColor: 'rgba(52, 168, 83, 0.1)',
          tension: 0.4
        }]
      }
    }
  },
  {
    id: '4',
    text: 'Which SIPs underperformed this year?',
    sender: 'user',
    timestamp: new Date('2024-01-15T10:05:00'),
  },
  {
    id: '5',
    text: 'Fund X delivered 6%, while the benchmark was 11%. Consider switching to Fund Z which has consistently outperformed. Here\'s your portfolio performance:',
    sender: 'ai',
    timestamp: new Date('2024-01-15T10:05:30'),
    chart: {
      type: 'bar',
      title: 'SIP Performance vs Benchmark',
      data: {
        labels: ['Fund X', 'Fund Y', 'Fund Z', 'Benchmark'],
        datasets: [{
          label: 'Returns (%)',
          data: [6, 13, 15, 11],
          backgroundColor: ['#EA4335', '#34A853', '#34A853', '#1A73E8'],
          borderColor: ['#EA4335', '#34A853', '#34A853', '#1A73E8'],
          borderWidth: 1
        }]
      }
    }
  }
];

export const sipPerformanceData: SIPPerformance[] = [
  {
    fundName: 'HDFC Top 100 Fund',
    currentValue: 125000,
    invested: 100000,
    returns: 25000,
    returnPercentage: 25,
    benchmark: 22
  },
  {
    fundName: 'SBI Blue Chip Fund',
    currentValue: 85000,
    invested: 80000,
    returns: 5000,
    returnPercentage: 6.25,
    benchmark: 11
  },
  {
    fundName: 'ICICI Prudential Value Discovery',
    currentValue: 145000,
    invested: 120000,
    returns: 25000,
    returnPercentage: 20.8,
    benchmark: 18
  }
];

export const netWorthData: NetWorthData[] = [
  { month: 'Jan 2024', amount: 500000 },
  { month: 'Feb 2024', amount: 520000 },
  { month: 'Mar 2024', amount: 535000 },
  { month: 'Apr 2024', amount: 548000 },
  { month: 'May 2024', amount: 562000 },
  { month: 'Jun 2024', amount: 578000 },
  { month: 'Jul 2024', amount: 595000 },
  { month: 'Aug 2024', amount: 612000 },
  { month: 'Sep 2024', amount: 628000 },
  { month: 'Oct 2024', amount: 645000 },
  { month: 'Nov 2024', amount: 662000 },
  { month: 'Dec 2024', amount: 680000 }
];

export const expenseCategories = [
  { category: 'Food & Dining', amount: 15000, percentage: 25 },
  { category: 'Transportation', amount: 8000, percentage: 13.3 },
  { category: 'Shopping', amount: 12000, percentage: 20 },
  { category: 'Entertainment', amount: 6000, percentage: 10 },
  { category: 'Bills & Utilities', amount: 9000, percentage: 15 },
  { category: 'Healthcare', amount: 4000, percentage: 6.7 },
  { category: 'Others', amount: 6000, percentage: 10 }
];
