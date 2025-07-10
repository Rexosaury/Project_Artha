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

export type TabType = 'dashboard' | 'chat' | 'simulations' | 'exports';

export interface ExportData {
  type: 'csv' | 'json';
  data: any;
  filename: string;
}
