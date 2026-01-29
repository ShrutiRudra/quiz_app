// Quiz Application Logic
class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.selectedCategory = '';
        this.selectedDifficulty = '';
        this.questions = [];
        this.userAnswers = [];
        this.questionStartTimes = [];
        this.timeSpentPerQuestion = [];
        this.timerInterval = null;
        this.timeRemaining = 30;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Start Quiz button
        document.getElementById('start-quiz').addEventListener('click', () => this.startQuiz());
        
        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitQuiz());
        
        // Restart button
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
    }

    startQuiz() {
        // Get selected category and difficulty
        this.selectedCategory = document.getElementById('category').value;
        this.selectedDifficulty = document.getElementById('difficulty').value;
        
        // Load questions
        this.questions = quizDatabase[this.selectedCategory][this.selectedDifficulty];
        
        // Initialize user answers array
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.questionStartTimes = new Array(this.questions.length).fill(0);
        this.timeSpentPerQuestion = new Array(this.questions.length).fill(0);
        
        // Reset quiz state
        this.currentQuestionIndex = 0;
        
        // Show quiz screen
        this.showScreen('quiz-screen');
        
        // Generate question navigator dots
        this.generateQuestionDots();
        
        // Display first question
        this.displayQuestion();
        
        // Start timer
        this.startTimer();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    generateQuestionDots() {
        const dotsContainer = document.getElementById('question-dots');
        dotsContainer.innerHTML = '';
        
        this.questions.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'question-dot';
            dot.textContent = index + 1;
            dot.addEventListener('click', () => this.jumpToQuestion(index));
            dotsContainer.appendChild(dot);
        });
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question number
        document.getElementById('question-number').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
        
        // Update question text
        document.getElementById('question-text').textContent = question.question;
        
        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            
            // Check if this option was previously selected
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionDiv);
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update question dots
        this.updateQuestionDots();
        
        // Record start time for this question
        if (this.questionStartTimes[this.currentQuestionIndex] === 0) {
            this.questionStartTimes[this.currentQuestionIndex] = Date.now();
        }
        
        // Reset timer
        this.resetTimer();
    }

    selectOption(optionIndex) {
        // Record the answer
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        // Update UI
        document.querySelectorAll('.option').forEach((option, index) => {
            option.classList.toggle('selected', index === optionIndex);
        });
        
        // Update question dots
        this.updateQuestionDots();
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        // Update Previous button
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Show/hide Next and Submit buttons
        if (this.currentQuestionIndex === this.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    updateQuestionDots() {
        const dots = document.querySelectorAll('.question-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('current', 'answered');
            
            if (index === this.currentQuestionIndex) {
                dot.classList.add('current');
            } else if (this.userAnswers[index] !== null) {
                dot.classList.add('answered');
            }
        });
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.recordTimeSpent();
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.recordTimeSpent();
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    jumpToQuestion(index) {
        this.recordTimeSpent();
        this.currentQuestionIndex = index;
        this.displayQuestion();
    }

    recordTimeSpent() {
        const startTime = this.questionStartTimes[this.currentQuestionIndex];
        if (startTime > 0) {
            const timeSpent = Math.floor((Date.now() - startTime) / 1000);
            this.timeSpentPerQuestion[this.currentQuestionIndex] += timeSpent;
            this.questionStartTimes[this.currentQuestionIndex] = 0;
        }
    }

    startTimer() {
        this.resetTimer();
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            const timerElement = document.getElementById('timer');
            timerElement.textContent = this.timeRemaining;
            
            // Add warning class when time is low
            if (this.timeRemaining <= 10) {
                timerElement.classList.add('warning');
            }
            
            // Auto-submit when timer reaches 0
            if (this.timeRemaining <= 0) {
                this.handleTimerExpired();
            }
        }, 1000);
    }

    resetTimer() {
        this.timeRemaining = 30;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = this.timeRemaining;
        timerElement.classList.remove('warning');
    }

    handleTimerExpired() {
        clearInterval(this.timerInterval);
        
        // Move to next question or submit
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.recordTimeSpent();
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.startTimer();
        } else {
            this.submitQuiz();
        }
    }

    submitQuiz() {
        // Stop timer
        clearInterval(this.timerInterval);
        
        // Record time for last question
        this.recordTimeSpent();
        
        // Calculate results
        this.calculateResults();
        
        // Show results screen
        this.showScreen('results-screen');
        
        // Display results
        this.displayResults();
    }

    calculateResults() {
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer === null) {
                unanswered++;
            } else if (answer === this.questions[index].correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }
        });
        
        this.results = {
            correct,
            incorrect,
            unanswered,
            total: this.questions.length,
            percentage: Math.round((correct / this.questions.length) * 100)
        };
    }

    displayResults() {
        // Display score
        document.getElementById('final-score').textContent = 
            `${this.results.correct}/${this.results.total}`;
        document.getElementById('score-percentage').textContent = 
            `${this.results.percentage}%`;
        
        // Display stats
        document.getElementById('correct-count').textContent = this.results.correct;
        document.getElementById('incorrect-count').textContent = this.results.incorrect;
        document.getElementById('unanswered-count').textContent = this.results.unanswered;
        
        // Create chart
        this.createResultsChart();
        
        // Display time analysis
        this.displayTimeAnalysis();
        
        // Display question review
        this.displayQuestionReview();
    }

    createResultsChart() {
        const ctx = document.getElementById('resultsChart').getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Incorrect', 'Unanswered'],
                datasets: [{
                    data: [
                        this.results.correct,
                        this.results.incorrect,
                        this.results.unanswered
                    ],
                    backgroundColor: [
                        '#28a745',
                        '#dc3545',
                        '#ffc107'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            }
        });
    }

    displayTimeAnalysis() {
        const container = document.getElementById('time-analysis');
        container.innerHTML = '<h3>Time Spent Per Question</h3>';
        
        this.timeSpentPerQuestion.forEach((time, index) => {
            const timeItem = document.createElement('div');
            timeItem.className = 'time-item';
            timeItem.innerHTML = `
                <span>Question ${index + 1}</span>
                <span>${time} seconds</span>
            `;
            container.appendChild(timeItem);
        });
        
        // Calculate average time
        const avgTime = Math.round(
            this.timeSpentPerQuestion.reduce((a, b) => a + b, 0) / this.questions.length
        );
        
        const avgItem = document.createElement('div');
        avgItem.className = 'time-item';
        avgItem.style.fontWeight = 'bold';
        avgItem.innerHTML = `
            <span>Average Time</span>
            <span>${avgTime} seconds</span>
        `;
        container.appendChild(avgItem);
    }

    displayQuestionReview() {
        const container = document.getElementById('question-review');
        container.innerHTML = '<h3>Question-by-Question Review</h3>';
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            
            let status = '';
            if (userAnswer === null) {
                status = 'unanswered';
            } else if (userAnswer === correctAnswer) {
                status = 'correct';
            } else {
                status = 'incorrect';
            }
            
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${status}`;
            
            let answerText = '';
            if (userAnswer !== null) {
                answerText = `<div class="review-answer"><strong>Your Answer:</strong> ${question.options[userAnswer]}</div>`;
            } else {
                answerText = `<div class="review-answer"><strong>Your Answer:</strong> Not answered</div>`;
            }
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${question.question}
                </div>
                ${answerText}
                <div class="review-answer">
                    <strong>Correct Answer:</strong> ${question.options[correctAnswer]}
                </div>
                <div class="review-answer">
                    <strong>Time Spent:</strong> ${this.timeSpentPerQuestion[index]} seconds
                </div>
            `;
            
            container.appendChild(reviewItem);
        });
    }

    restartQuiz() {
        // Reset all state
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.questionStartTimes = [];
        this.timeSpentPerQuestion = [];
        
        // Clear timer
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        // Show setup screen
        this.showScreen('setup-screen');
    }
}

// Initialize the quiz app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const quizApp = new QuizApp();
});
