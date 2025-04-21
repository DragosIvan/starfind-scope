const testCases = [
    'You see a shooting star! -\nThe star looks like it will land in the Daemonheim peninsula in the next 1\nhour 50 minutes to 1 hour 52 minutes.\nThe star looks to be size 3,',
    'in the next 1 hour 50 minutes to 1 hour 52 minutes',
    'next 1 hour 50 minutes to 1 hour 52 minutes',
    'next 10 to 12 minutes',
    'next 5 minutes to 7 minutes',
    'in the next 2 hours to 2 hours 5 minutes',
    'next 30 to 35 minutes',
];

function getTime(input) {
    // Extract time after "next" with more flexible pattern, handling newlines
    const nextMatch = input.match(
        /(?:in the )?next\s+((?:[^\n]*\n)*?.*?)\s+to/s
    );

    console.log('Input:', input);
    console.log('nextMatch:', nextMatch);

    if (!nextMatch) {
        return '0';
    }

    // Clean up the timeText by removing newlines and extra spaces
    const timeText = nextMatch[1]
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    console.log('timeText:', timeText);

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
    console.log('\n=== Test Case ===');
    const result = getTime(testCase);
    console.log(`Final Result: ${result} minutes`);
    console.log('===============\n');
});
