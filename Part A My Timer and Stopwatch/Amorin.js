document.addEventListener('DOMContentLoaded', function() {
    
    const modeButtons = document.querySelectorAll('.mode-btn');
    const stopwatchDisplay = document.getElementById('stopwatch-display');
    const timerDisplay = document.getElementById('timer-display');
    const timeDisplay = document.querySelector('.time-display');
    const timerTimeDisplay = document.getElementById('timer-time');
    const lapsContainer = document.getElementById('laps-container');
    
    
    const startStopwatchBtn = document.getElementById('start-stopwatch');
    const stopStopwatchBtn = document.getElementById('stop-stopwatch');
    const lapStopwatchBtn = document.getElementById('lap-stopwatch');
    const resetStopwatchBtn = document.getElementById('reset-stopwatch');
    const clearLapsBtn = document.getElementById('clear-laps');
    
    
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const startTimerBtn = document.getElementById('start-timer');
    const stopTimerBtn = document.getElementById('stop-timer');
    const resetTimerBtn = document.getElementById('reset-timer');
    const resetBtn = document.querySelector('.reset-btn');
    
    
    let stopwatchInterval;
    let stopwatchTime = 0;
    let laps = [];
    let lapCount = 0;
    
    let timerInterval;
    let timerTime = 0;
    let timerRunning = false;
    
    
    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            if (button.dataset.mode === 'stopwatch') {
                stopwatchDisplay.classList.remove('hidden');
                timerDisplay.classList.add('hidden');
            } else {
                stopwatchDisplay.classList.add('hidden');
                timerDisplay.classList.remove('hidden');
            }
        });
    });
    
    
    startStopwatchBtn.addEventListener('click', startStopwatch);
    stopStopwatchBtn.addEventListener('click', stopStopwatch);
    lapStopwatchBtn.addEventListener('click', recordLap);
    resetStopwatchBtn.addEventListener('click', resetStopwatch);
    clearLapsBtn.addEventListener('click', clearLaps);
    
    
    startTimerBtn.addEventListener('click', startTimer);
    stopTimerBtn.addEventListener('click', stopTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    resetBtn.addEventListener('click', resetAll);
    
    
    function formatTime(ms) {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
    }
    
    function formatTimerTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
   
    function startStopwatch() {
        if (!stopwatchInterval) {
            const startTime = Date.now() - stopwatchTime;
            
            stopwatchInterval = setInterval(() => {
                stopwatchTime = Date.now() - startTime;
                timeDisplay.textContent = formatTime(stopwatchTime);
            }, 10);
        }
    }
    
    function stopStopwatch() {
        if (stopwatchInterval) {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
        }
    }
    
    function resetStopwatch() {
        stopStopwatch();
        stopwatchTime = 0;
        timeDisplay.textContent = formatTime(stopwatchTime);
        clearLaps();
    }
    
    function recordLap() {
        if (stopwatchInterval) {
            lapCount++;
            const lapTime = stopwatchTime;
            
            const lapItem = document.createElement('div');
            lapItem.className = 'lap-item';
            lapItem.innerHTML = `
                <span>#${lapCount}</span>
                <span>${formatTime(lapTime)}</span>
            `;
            
            lapsContainer.prepend(lapItem);
            laps.push({ number: lapCount, time: lapTime });
        }
    }
    
    function clearLaps() {
        laps = [];
        lapCount = 0;
        lapsContainer.innerHTML = '';
    }
    
    
    function startTimer() {
        if (!timerRunning) {
            const hours = parseInt(hoursInput.value) || 0;
            const minutes = parseInt(minutesInput.value) || 0;
            const seconds = parseInt(secondsInput.value) || 0;
            
            timerTime = hours * 3600 + minutes * 60 + seconds;
            
            if (timerTime > 0) {
                timerRunning = true;
                timerInterval = setInterval(() => {
                    if (timerTime <= 0) {
                        stopTimer();
                        return;
                    }
                    
                    timerTime--;
                    timerTimeDisplay.textContent = formatTimerTime(timerTime);
                }, 1000);
            }
        }
    }
    
    function stopTimer() {
        if (timerRunning) {
            clearInterval(timerInterval);
            timerRunning = false;
        }
    }
    
    function resetTimer() {
        stopTimer();
        hoursInput.value = '0';
        minutesInput.value = '0';
        secondsInput.value = '0';
        timerTime = 0;
        timerTimeDisplay.textContent = formatTimerTime(timerTime);
    }
    
    function resetAll() {
        if (stopwatchDisplay.classList.contains('hidden')) {
            resetTimer();
        } else {
            resetStopwatch();
        }
    }
    
    
    timeDisplay.textContent = formatTime(0);
    timerTimeDisplay.textContent = formatTimerTime(0);
});