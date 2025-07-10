export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  chart?: ChartData;
}

export interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'doughnut';
  title: string;
  data: any;
  options?: any;
}

export interface SimulationInput {
  goalAmount: number;
  currentSIP: number;
  targetAge: number;
  currentAge: number;
  currentSavings: number;
}

export interface SimulationResult {
  monthlyRequired: number;
  totalInvestment: number;
  expectedReturns: number;
  feasible: boolean;
  projectedGrowth: Array<{
    year: number;
    amount: number;
  }>;
}

export interface SIPPerformance {
  fundName: string;
  currentValue: number;
  invested: number;
  returns: number;
  returnPercentage: number;
  benchmark: number;
}

export interface NetWorthData {
  month: string;
  amount: number;
}

export type TabType = 'dashboard' | 'chat' | 'simulations' | 'exports' | 'investments' | 'budgeting' | 'reports' | 'goals' | 'transactions' | 'cards' | 'loans' | 'insurance' | 'taxes' | 'settings' | 'help';

export interface ExportData {
  type: 'csv' | 'json';
  data: any;
  filename: string;
}

export interface UserProfile {
  name: string;
  avatar?: string;
  initials: string;
  netWorthGrowth: number;
  lastLogin: Date;
  totalSavings: number;
  monthlyIncome: number;
}

export interface GoalProgress {
  id: string;
  title: string;
  icon: string;
  targetAmount: number;
  currentAmount: number;
  progressPercentage: number;
  targetDate: string;
  monthlyContribution: number;
}

export interface AnomalyAlert {
  id: string;
  type: 'expense' | 'income' | 'investment';
  severity: 'low' | 'medium' | 'high';
  title: string;
  description: string;
  amount: number;
  category: string;
  recommendation: string;
  date: Date;
}
