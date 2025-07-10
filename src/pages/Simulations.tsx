import React, { useState } from 'react';
import { SimulationInput, SimulationResult, ChartData } from '../types';
import Chart from '../components/Chart';

const Simulations: React.FC = () => {
  const [input, setInput] = useState<SimulationInput>({
    goalAmount: 5000000, // 50L
    currentSIP: 10000,
    targetAge: 50,
    currentAge: 30,
    currentSavings: 500000, // 5L
  });

  const [result, setResult] = useState<SimulationResult | null>(null);

  const handleSimulate = () => {
    const yearsToGoal = input.targetAge - input.currentAge;
    const monthsToGoal = yearsToGoal * 12;
    
    // Simple calculation assuming 12% annual return
    const monthlyReturn = 0.12 / 12;
    const futureValueOfCurrentSavings = input.currentSavings * Math.pow(1.12, yearsToGoal);
    const futureValueOfCurrentSIP = input.currentSIP * 
      ((Math.pow(1 + monthlyReturn, monthsToGoal) - 1) / monthlyReturn);
    
    const totalFromCurrent = futureValueOfCurrentSavings + futureValueOfCurrentSIP;
    const shortfall = Math.max(0, input.goalAmount - totalFromCurrent);
    
    const additionalSIPNeeded = shortfall > 0 ? 
      shortfall / ((Math.pow(1 + monthlyReturn, monthsToGoal) - 1) / monthlyReturn) : 0;

    const projectedGrowth = [];
    for (let year = 1; year <= yearsToGoal; year++) {
      const totalSIP = input.currentSIP + additionalSIPNeeded;
      const amount = input.currentSavings * Math.pow(1.12, year) + 
        totalSIP * 12 * ((Math.pow(1.12, year) - 1) / 0.12);
      projectedGrowth.push({ year: input.currentAge + year, amount });
    }

    setResult({
      monthlyRequired: input.currentSIP + additionalSIPNeeded,
      totalInvestment: (input.currentSIP + additionalSIPNeeded) * monthsToGoal + input.currentSavings,
      expectedReturns: input.goalAmount - ((input.currentSIP + additionalSIPNeeded) * monthsToGoal + input.currentSavings),
      feasible: additionalSIPNeeded <= input.currentSIP * 2, // Feasible if additional SIP is not more than 2x current
      projectedGrowth,
    });
  };

  const chartData: ChartData | null = result ? {
    type: 'line',
    title: 'Projected Wealth Growth',
    data: {
      labels: result.projectedGrowth.map(d => `Age ${d.year}`),
      datasets: [{
        label: 'Projected Amount (₹)',
        data: result.projectedGrowth.map(d => d.amount),
        borderColor: '#1A73E8',
        backgroundColor: 'rgba(26, 115, 232, 0.1)',
        tension: 0.4,
        fill: true
      }, {
        label: 'Goal Amount (₹)',
        data: result.projectedGrowth.map(() => input.goalAmount),
        borderColor: '#34A853',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        tension: 0
      }]
    }
  } : null;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-google-gray mb-2">Financial Goal Simulator</h1>
        <p className="text-gray-600">Plan and simulate your financial goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Goal Parameters</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal Amount (₹)
              </label>
              <input
                type="number"
                value={input.goalAmount}
                onChange={(e) => setInput({...input, goalAmount: Number(e.target.value)})}
                className="input-field w-full"
                placeholder="e.g., 5000000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Monthly SIP (₹)
              </label>
              <input
                type="number"
                value={input.currentSIP}
                onChange={(e) => setInput({...input, currentSIP: Number(e.target.value)})}
                className="input-field w-full"
                placeholder="e.g., 10000"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Age
                </label>
                <input
                  type="number"
                  value={input.currentAge}
                  onChange={(e) => setInput({...input, currentAge: Number(e.target.value)})}
                  className="input-field w-full"
                  placeholder="e.g., 30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Age
                </label>
                <input
                  type="number"
                  value={input.targetAge}
                  onChange={(e) => setInput({...input, targetAge: Number(e.target.value)})}
                  className="input-field w-full"
                  placeholder="e.g., 50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Savings (₹)
              </label>
              <input
                type="number"
                value={input.currentSavings}
                onChange={(e) => setInput({...input, currentSavings: Number(e.target.value)})}
                className="input-field w-full"
                placeholder="e.g., 500000"
              />
            </div>

            <button
              onClick={handleSimulate}
              className="btn-primary w-full"
            >
              Simulate Goal
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Simulation Results</h2>
          
          {result ? (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${result.feasible ? 'bg-green-50' : 'bg-red-50'}`}>
                <h3 className={`font-medium ${result.feasible ? 'text-green-800' : 'text-red-800'}`}>
                  {result.feasible ? '✅ Goal is Achievable!' : '⚠️ Goal Needs Adjustment'}
                </h3>
                <p className={`text-sm ${result.feasible ? 'text-green-700' : 'text-red-700'}`}>
                  {result.feasible 
                    ? 'Your goal can be achieved with the recommended SIP increase.'
                    : 'Consider extending the timeline or reducing the goal amount.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Required Monthly SIP</p>
                  <p className="text-lg font-bold text-google-gray">
                    ₹{result.monthlyRequired.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Additional SIP Needed</p>
                  <p className="text-lg font-bold text-google-gray">
                    ₹{(result.monthlyRequired - input.currentSIP).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Investment</p>
                  <p className="text-lg font-bold text-google-gray">
                    ₹{result.totalInvestment.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Expected Returns</p>
                  <p className="text-lg font-bold text-green-600">
                    ₹{result.expectedReturns.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>Enter your goal parameters and click "Simulate Goal" to see results</p>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      {chartData && (
        <div className="mt-6">
          <Chart chartData={chartData} />
        </div>
      )}
    </div>
  );
};

export default Simulations;
