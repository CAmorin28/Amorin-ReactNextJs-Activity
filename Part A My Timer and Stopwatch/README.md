# Time Keeper Pro

Time Keeper Pro is a dual-function web application that combines a stopwatch and timer in one interface. It allows users to precisely track time for various activities with an intuitive and visually appealing design.

## Features

### Stopwatch
- Tracks time with hours, minutes, seconds, and centiseconds
- Start, stop, and reset functionality
- Lap recording system
- Clear all laps button
- Smooth time display updates

### Timer
- Set custom time with hours, minutes, and seconds
- Start, stop, and reset controls
- Real-time countdown display
- Input validation for time values

## Technical Implementation

### HTML Structure
- Clean semantic HTML with separate sections for:
  - Application header with title and reset button
  - Mode selection (stopwatch/timer)
  - Stopwatch display and controls
  - Timer display and controls
  - Lap recording section

### CSS Design
- Modern gradient background with animation
- Responsive layout that works on all device sizes
- Intuitive control buttons with hover effects
- Clear visual distinction between active/inactive modes
- Custom styling for time displays and input fields
- Animated lap entries

### JavaScript Functionality
- Stopwatch:
  - Accurate time tracking using Date objects
  - Lap recording and display
  - Formatting for hours, minutes, seconds, and centiseconds
- Timer:
  - Countdown functionality with setInterval
  - Input validation for time values
  - Time conversion between hours/minutes/seconds
- Mode switching between stopwatch and timer
- Global reset functionality

## Usage
1. Open the HTML file in any modern web browser
2. Select between Stopwatch and Timer modes
3. For Stopwatch:
   - Click "Start" to begin timing
   - Click "Stop" to pause
   - Click "Reset" to reset to zero
4. For Timer:
   - Set the desired time using the input fields
   - Click "Start" to begin countdown
   - Click "Stop" to pause
   - Click "Reset" to clear all inputs
5. Use the top-right "Reset" button to reset the current mode

## Design Notes
- Created a dark-themed interface with blue accents for a professional look
- Used gradient effects for visual appeal
- Implemented smooth animations for a polished user experience
- Ensured responsive design for all screen sizes
- Followed the design specifications from the provided image