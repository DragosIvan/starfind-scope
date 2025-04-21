const testCases = [
    'in the next 1 hour 50 minutes to 1 hour 52 minutes',
    'next 1 hour 50 minutes to 1 hour 52 minutes',
    'next 10 to 12 minutes',
    'next 5 minutes to 7 minutes',
    'in the next 2 hours to 2 hours 5 minutes',
    'next 30 to 35 minutes',
];

function getTime(input) {
    // Extract time after "next" with more flexible pattern
    const nextMatch = input.match(/(?:in the )?next\s+(.*?)\s+to/);

    if (!nextMatch) {
        return '0';
    }

    const timeText = nextMatch[1];

    // Parse hours and minutes
    let totalMinutes = 0;

    // Handle hours
    const hoursMatch = timeText.match(/(\d+)\s+(?:hour|hours)/);
    if (hoursMatch) {
        totalMinutes += parseInt(hoursMatch[1]) * 60;
    }

    // Handle minutes
    const minutesMatch = timeText.match(/(\d+)\s+minutes/);
    if (minutesMatch) {
        totalMinutes += parseInt(minutesMatch[1]);
    }

    // If no hours or minutes found, try to parse as just minutes
    if (totalMinutes === 0) {
        const justMinutes = timeText.match(/(\d+)/);
        if (justMinutes) {
            totalMinutes = parseInt(justMinutes[1]);
        }
    }

    return String(totalMinutes);
}

console.log('Testing time parsing with different formats:');
testCases.forEach((testCase) => {
    const result = getTime(testCase);
    console.log(`Input: "${testCase}"`);
    console.log(`Result: ${result} minutes`);
    console.log('---');
});
