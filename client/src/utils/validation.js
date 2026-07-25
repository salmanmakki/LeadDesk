export function validateName(value) {
  if (!value || !value.trim()) return 'Name is required.';
  if (value.trim().length < 2) return 'Name must be at least 2 characters.';
  return '';
}

export function validateEmail(value) {
  if (!value || !value.trim()) return 'Email is required.';
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value.trim())) return 'Please enter a valid email address.';
  return '';
}

export function validateBudget(value) {
  if (!value) return 'Please select a budget range.';
  return '';
}

export function validateMessage(value) {
  if (value && value.length > 1000) return 'Message cannot exceed 1000 characters.';
  return '';
}
