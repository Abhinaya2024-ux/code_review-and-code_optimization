export const LANGUAGES = [
  { value: 'python', label: 'Python', icon: '🐍', color: 'text-blue-600' },
  { value: 'javascript', label: 'JavaScript', icon: '📜', color: 'text-yellow-600' },
  { value: 'java', label: 'Java', icon: '☕', color: 'text-red-600' },
  { value: 'cpp', label: 'C++', icon: '⚙️', color: 'text-purple-600' },
];

export const COMPLEXITY_COLORS = {
  'O(1)': 'text-green-600 bg-green-100',
  'O(n)': 'text-blue-600 bg-blue-100',
  'O(n^2)': 'text-yellow-600 bg-yellow-100',
  'O(2^n)': 'text-orange-600 bg-orange-100',
  'O(n!)': 'text-red-600 bg-red-100',
};

export const STATUS_COLORS = {
  'Excellent': 'text-green-600 bg-green-100',
  'Good': 'text-blue-600 bg-blue-100',
  'Improving': 'text-yellow-600 bg-yellow-100',
  'Poor': 'text-red-600 bg-red-100',
};