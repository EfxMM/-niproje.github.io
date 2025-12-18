// ==========================================
// Quiz Modülü - İleri/Geri Özellikli
// ==========================================

class QuizManager {
    constructor() {
        this.questions = [...quizData];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.shuffledQuestions = [];
        this.userAnswers = [];
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    startQuiz() {
        this.shuffledQuestions = this.shuffleArray([...this.questions]);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.userAnswers = new Array(this.shuffledQuestions.length).fill(null);

        document.getElementById('quizStart').classList.add('hidden');
        document.getElementById('quizGame').classList.remove('hidden');
        document.getElementById('quizResults').classList.add('hidden');

        this.showQuestion();
        this.updateNavigationButtons();
    }

    showQuestion() {
        const question = this.shuffledQuestions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.shuffledQuestions.length;
        document.getElementById('currentScore').textContent = this.score;
        document.getElementById('questionText').textContent = question.question;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            
            if (userAnswer !== null) {
                button.disabled = true;
                if (index === question.correctAnswer) {
                    button.classList.add('correct');
                } else if (index === userAnswer) {
                    button.classList.add('wrong');
                }
            } else {
                button.onclick = () => this.checkAnswer(index);
            }
            
            optionsContainer.appendChild(button);
        });

        const feedback = document.getElementById('feedback');
        if (userAnswer !== null) {
            const isCorrect = userAnswer === question.correctAnswer;
            this.showFeedback(isCorrect, question.explanation);
        } else {
            feedback.classList.add('hidden');
        }
        
        this.updateNavigationButtons();
    }

    checkAnswer(selectedIndex) {
        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            return;
        }

        const question = this.shuffledQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correctAnswer;
        
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;
        
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        if (isCorrect) {
            this.correctCount++;
            this.score += 100;
            document.getElementById('currentScore').textContent = this.score;
        } else {
            this.wrongCount++;
        }

        this.showFeedback(isCorrect, question.explanation);
        this.updateNavigationButtons();

        const allAnswered = this.userAnswers.every(answer => answer !== null);
        if (allAnswered) {
            setTimeout(() => {
                this.showResults();
            }, 3000);
        }
    }

    showFeedback(isCorrect, explanation) {
        const feedback = document.getElementById('feedback');
        feedback.classList.remove('hidden', 'correct', 'wrong');
        feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        
        const title = isCorrect ? '✓ Doğru!' : '✗ Yanlış!';
        
        feedback.innerHTML = `
            <div class="feedback-title">${title}</div>
            <div class="feedback-text">${explanation}</div>
        `;

        feedback.classList.add(isCorrect ? 'animate-success' : 'animate-error');
    }

    showResults() {
        progressManager.updateQuizProgress(this.score, this.correctCount, this.shuffledQuestions.length);

        document.getElementById('quizGame').classList.add('hidden');
        document.getElementById('quizResults').classList.remove('hidden');

        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('correctCount').textContent = this.correctCount;
        document.getElementById('wrongCount').textContent = this.wrongCount;

        const resultsTitle = document.querySelector('.results-title');
        const percentage = Math.round((this.correctCount / this.shuffledQuestions.length) * 100);
        
        if (percentage >= 80) {
            resultsTitle.textContent = 'Mükemmel! 🎉';
        } else if (percentage >= 60) {
            resultsTitle.textContent = 'Harika! 👏';
        } else if (percentage >= 40) {
            resultsTitle.textContent = 'İyi! 👍';
        } else {
            resultsTitle.textContent = 'Tekrar Dene!';
        }
    }

    retryQuiz() {
        this.startQuiz();
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevQuestionBtn');
        const nextBtn = document.getElementById('nextQuestionBtn');
        
        if (this.currentQuestionIndex > 0) {
            prevBtn.style.display = 'inline-block';
        } else {
            prevBtn.style.display = 'none';
        }
        
        if (this.userAnswers[this.currentQuestionIndex] !== null && 
            this.currentQuestionIndex < this.shuffledQuestions.length - 1) {
            nextBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'none';
        }
    }

    goToPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
            this.updateNavigationButtons();
        }
    }

    goToNextQuestion() {
        if (this.currentQuestionIndex < this.shuffledQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
            this.updateNavigationButtons();
        }
    }
}

let quizManager;

document.addEventListener('DOMContentLoaded', () => {
    quizManager = new QuizManager();

    document.getElementById('startQuizBtn')?.addEventListener('click', () => {
        quizManager.startQuiz();
    });

    document.getElementById('retryQuizBtn')?.addEventListener('click', () => {
        quizManager.retryQuiz();
    });

    document.getElementById('homeFromQuizBtn')?.addEventListener('click', () => {
        showPage('homePage');
    });

    document.getElementById('prevQuestionBtn')?.addEventListener('click', () => {
        quizManager.goToPreviousQuestion();
    });

    document.getElementById('nextQuestionBtn')?.addEventListener('click', () => {
        quizManager.goToNextQuestion();
    });
});
