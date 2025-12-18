// ==========================================
// Senaryo Modülü
// ==========================================

class ScenarioManager {
    constructor() {
        this.scenarios = [...scenariosData];
        this.currentScenario = null;
    }

    // Senaryo seçim ekranını göster
    showScenarioSelection() {
        const container = document.getElementById('scenarioSelection');
        container.innerHTML = '';

        this.scenarios.forEach(scenario => {
            const card = document.createElement('div');
            card.className = 'scenario-card hover-lift';
            
            const isCompleted = this.isScenarioCompleted(scenario.id);
            const completedBadge = isCompleted ? '<div style="color: var(--color-success); font-weight: 600; margin-top: var(--spacing-xs);">✓ Tamamlandı</div>' : '';
            
            card.innerHTML = `
                <h3>
                    <span class="scenario-icon">${scenario.icon}</span>
                    ${scenario.title}
                </h3>
                <span class="scenario-difficulty">${scenario.difficulty}</span>
                <p style="margin-top: var(--spacing-sm);">${scenario.description}</p>
                ${completedBadge}
                <button class="btn btn-primary mt-2" style="width: 100%;">Senaryoyu Başlat</button>
            `;
            
            card.querySelector('button').addEventListener('click', () => {
                this.startScenario(scenario.id);
            });
            
            container.appendChild(card);
        });

        document.getElementById('scenarioSelection').classList.remove('hidden');
        document.getElementById('scenarioGame').classList.add('hidden');
    }

    // Senaryonun tamamlanıp tamamlanmadığını kontrol et
    isScenarioCompleted(scenarioId) {
        const progress = progressManager.loadProgress();
        return progress.completedScenarios.includes(scenarioId);
    }

    // Senaryoyu başlat
    startScenario(scenarioId) {
        this.currentScenario = this.scenarios.find(s => s.id === scenarioId);
        
        if (!this.currentScenario) return;

        document.getElementById('scenarioSelection').classList.add('hidden');
        document.getElementById('scenarioGame').classList.remove('hidden');

        this.showScenarioContent();
    }

    // Senaryo içeriğini göster
    showScenarioContent() {
        const container = document.getElementById('scenarioGame');
        container.innerHTML = '';

        const content = document.createElement('div');
        content.className = 'scenario-content animate-fadeIn';
        
        content.innerHTML = `
            <h3>${this.currentScenario.title}</h3>
            <div class="scenario-situation">
                ${this.currentScenario.situation}
            </div>
            <h4 class="mt-3">Ne yapmalısınız?</h4>
            <div class="choices-container" id="choicesContainer"></div>
        `;

        container.appendChild(content);

        // Seçenekleri oluştur
        this.showChoices();
    }

    // Seçenekleri göster
    showChoices() {
        const choicesContainer = document.getElementById('choicesContainer');
        choicesContainer.innerHTML = '';

        this.currentScenario.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.onclick = () => this.selectChoice(index);
            choicesContainer.appendChild(button);
        });
    }

    // Seçim yapıldığında
    selectChoice(choiceIndex) {
        const choice = this.currentScenario.choices[choiceIndex];
        
        // Butonları devre dışı bırak
        const buttons = document.querySelectorAll('.choice-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === choiceIndex) {
                // Class-based styling için
                if (choice.isCorrect) {
                    btn.classList.add('choice-correct');
                } else {
                    btn.classList.add('choice-wrong');
                }
            }
        });

        // İlerlemeyi güncelle
        progressManager.updateScenarioProgress(this.currentScenario.id, choice.isCorrect);

        // Sonucu göster
        this.showOutcome(choice);
    }

    // Sonucu göster
    showOutcome(choice) {
        const container = document.getElementById('scenarioGame');
        
        const outcome = document.createElement('div');
        outcome.className = 'scenario-outcome animate-slideInRight';
        outcome.style.marginTop = 'var(--spacing-md)';
        
        const icon = choice.isCorrect ? '✓' : '✗';
        const color = choice.isCorrect ? 'var(--color-success)' : 'var(--color-error)';
        
        outcome.innerHTML = `
            <h4 style="color: ${color};">${icon} ${choice.isCorrect ? 'Doğru Karar!' : 'Yanlış Karar'}</h4>
            <p><strong>Sonuç:</strong> ${choice.outcome}</p>
            <p><strong>Açıklama:</strong> ${choice.explanation}</p>
            <div class="mt-3" style="display: flex; gap: var(--spacing-sm); flex-wrap: wrap;">
                <button id="backToScenariosBtn" class="btn btn-secondary">Senaryolara Dön</button>
                <button id="retryScenarioBtn" class="btn btn-primary">Tekrar Dene</button>
            </div>
        `;

        container.appendChild(outcome);

        // Event listeners
        document.getElementById('backToScenariosBtn').addEventListener('click', () => {
            this.showScenarioSelection();
        });

        document.getElementById('retryScenarioBtn').addEventListener('click', () => {
            this.startScenario(this.currentScenario.id);
        });
    }
}

// Global scenario manager instance
let scenarioManager;

// Scenario event listeners
document.addEventListener('DOMContentLoaded', () => {
    scenarioManager = new ScenarioManager();
});
