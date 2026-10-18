// Database of Workout Days & Exercises with direct YouTube links
const workoutData = {
    1: {
        title: "Day 1: Upper Body & Abs",
        focus: "Broad V-Taper, Back Width & Chiseled Core",
        exercises: [
            {
                id: "d1_ex1",
                name: "Pull-Ups (Band-Assisted)",
                meta: "4 Sets × AMRAP",
                target: "Lats, Upper Back & Biceps",
                sets: 4,
                instructions: "1. Loop band over pull-up bar, place foot in loop.<br>2. Grip bar slightly wider than shoulders.<br>3. Drive elbows down to lift chin over bar, squeezing lats.<br>4. Lower smoothly down to full hang in 2-3 seconds.",
                videoUrl: "https://www.youtube.com/watch?v=pZozI1iaW0k"
            },
            {
                id: "d1_ex2",
                name: "Banded Pulldowns",
                meta: "4 Sets × 12-15 reps",
                target: "Lat Width (V-Taper)",
                sets: 4,
                instructions: "1. Anchor band over high bar.<br>2. Kneel or sit beneath, holding band ends.<br>3. Drive elbows straight down into your sides.<br>4. Squeeze lats hard at bottom.",
                videoUrl: "https://www.youtube.com/watch?v=_97pmOC2tzE"
            },
            {
                id: "d1_ex3",
                name: "Pike Push-Ups",
                meta: "4 Sets × 8-12 reps",
                target: "Shoulders & Upper Chest",
                sets: 4,
                instructions: "1. Set up in push-up stance, walk feet forward into upside-down 'V'.<br>2. Lower top of head forward toward floor.<br>3. Press shoulders firmly to push back up.",
                videoUrl: "https://www.youtube.com/watch?v=V6BtY3Lt0Ys"
            },
            {
                id: "d1_ex4",
                name: "Banded Lateral Raises",
                meta: "3 Sets × 15-20 reps",
                target: "Side Delts (Broad Shoulders)",
                sets: 3,
                instructions: "1. Step on middle of resistance band.<br>2. Raise arms sideways to shoulder height with slight elbow bend.<br>3. Lower slowly back to thighs.",
                videoUrl: "https://www.youtube.com/watch?v=__0jIbOwnfI"
            },
            {
                id: "d1_ex5",
                name: "Hanging Knee/Leg Raises",
                meta: "4 Sets × 12-15 reps",
                target: "Lower Abs & V-Line",
                sets: 4,
                instructions: "1. Hang from bar with active shoulders.<br>2. Curl pelvis upward while raising knees toward chest.<br>3. Avoid swinging momentum.",
                videoUrl: "https://www.youtube.com/watch?v=2n4UqRIJyk4"
            },
            {
                id: "d1_ex6",
                name: "RKC Plank Hold",
                meta: "3 Sets × 45-60s",
                target: "Deep Core & Waist Tightness",
                sets: 3,
                instructions: "1. Forearm plank stance.<br>2. Squeeze glutes hard and pull elbows towards toes actively.<br>3. Maintain maximum isometric tension.",
                videoUrl: "https://www.youtube.com/watch?v=6TKktamzq4o"
            }
        ]
    },
    2: {
        title: "Day 2: Explosive Legs & Abs",
        focus: "Single-leg Strength, Quads & Lower Abs",
        exercises: [
            {
                id: "d2_ex1",
                name: "Bulgarian Split Squats",
                meta: "4 Sets × 10-12 reps/leg",
                target: "Quad & Glute Power",
                sets: 4,
                instructions: "1. Place rear foot elevated on chair or bed.<br>2. Drop back knee toward floor while keeping front foot flat.<br>3. Push through front heel to return up.",
                videoUrl: "https://www.youtube.com/watch?v=hiLF_pF3EJM"
            },
            {
                id: "d2_ex2",
                name: "Air Squats (2s Pause)",
                meta: "4 Sets × 15-20 reps",
                target: "Leg Hypertrophy & Calorie Burn",
                sets: 4,
                instructions: "1. Squat below parallel with chest upright.<br>2. Hold bottom position for 2 seconds.<br>3. Drive up forcefully through heels.",
                videoUrl: "https://www.youtube.com/watch?v=aclHkVaku9U"
            },
            {
                id: "d2_ex3",
                name: "Banded Glute Bridges",
                meta: "4 Sets × 15-20 reps",
                target: "Posterior Chain Power",
                sets: 4,
                instructions: "1. Lie flat on back with band across hips.<br>2. Drive through heels and lift hips up.<br>3. Squeeze glutes tightly at top.",
                videoUrl: "https://www.youtube.com/watch?v=m2C3-c_P_Yk"
            },
            {
                id: "d2_ex4",
                name: "Banded Standing Calf Raises",
                meta: "4 Sets × 20 reps",
                target: "Calf Muscle & Ankle Power",
                sets: 4,
                instructions: "1. Step on band center, holding handles at shoulders.<br>2. Raise up onto toes as high as possible.<br>3. Squeeze calves at top for 1s.",
                videoUrl: "https://www.youtube.com/watch?v=3R3m_mZJtq0"
            },
            {
                id: "d2_ex5",
                name: "Hanging Knee Raises",
                meta: "3 Sets × 12-15 reps",
                target: "Lower Abs",
                sets: 3,
                instructions: "1. Hang strict from pull-up bar.<br>2. Curl knees toward chest without swinging.<br>3. Lower smoothly.",
                videoUrl: "https://www.youtube.com/watch?v=2n4UqRIJyk4"
            }
        ]
    },
    3: {
        title: "Day 3: Active Recovery & Fat Loss",
        focus: "Mobility, Muscle Repair & High Calorie Burn",
        isRecovery: true,
        recoveryItems: [
            { id: "d3_rec1", title: "Walk 8,000 to 10,000 Steps", desc: "Low-impact calorie burn for abdominal fat loss." },
            { id: "d3_rec2", title: "10-15 Min Full Body Stretch", desc: "Focus on lats, hamstrings, chest, and hip flexors." },
            { id: "d3_rec3", title: "Hydrate & Hit Protein Goal", desc: "Ensure 135g+ protein intake to rebuild muscle tissue." }
        ]
    },
    4: {
        title: "Day 4: Full Body & Core Hypertrophy",
        focus: "Compound Overload & Full Body Muscle Growth",
        exercises: [
            {
                id: "d4_ex1",
                name: "Pull-Ups (Band-Assisted)",
                meta: "4 Sets × AMRAP",
                target: "Back & Lats",
                sets: 4,
                instructions: "1. Clean full range pull-up from dead hang.<br>2. Squeeze lats at top.",
                videoUrl: "https://www.youtube.com/watch?v=pZozI1iaW0k"
            },
            {
                id: "d4_ex2",
                name: "Banded Push-Ups",
                meta: "4 Sets × 10-15 reps",
                target: "Chest & Triceps Overload",
                sets: 4,
                instructions: "1. Wrap band behind upper back, hold ends under palms.<br>2. Perform standard push-up against band elastic load.",
                videoUrl: "https://www.youtube.com/watch?v=1334k0fH8uA"
            },
            {
                id: "d4_ex3",
                name: "Bulgarian Split Squats",
                meta: "4 Sets × 12-15 reps",
                target: "Quads & Glutes",
                sets: 4,
                instructions: "1. Perform controlled single-leg squats with focus on quad load.",
                videoUrl: "https://www.youtube.com/watch?v=hiLF_pF3EJM"
            },
            {
                id: "d4_ex4",
                name: "Banded Overhead Press",
                meta: "3 Sets × 12-15 reps",
                target: "Shoulders & Upper Chest",
                sets: 3,
                instructions: "1. Step on band, press handles straight overhead until lockout.<br>2. Lower back to chin smoothly.",
                videoUrl: "https://www.youtube.com/watch?v=aG3m3LwS7J0"
            },
            {
                id: "d4_ex5",
                name: "Banded Seated/Standing Rows",
                meta: "3 Sets × 15 reps",
                target: "Mid Back & Upper Lats",
                sets: 3,
                instructions: "1. Anchor band at waist level.<br>2. Pull elbows back squeezing shoulder blades together.",
                videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f68"
            },
            {
                id: "d4_ex6",
                name: "Banded Ab Crunches",
                meta: "4 Sets × 15 reps",
                target: "Upper & Middle Abs",
                sets: 4,
                instructions: "1. Kneel beneath high anchor, pull band down curling upper spine.<br>2. Squeeze abs tightly at bottom.",
                videoUrl: "https://www.youtube.com/watch?v=1u1fX6yqS-A"
            }
        ]
    },
    5: {
        title: "Day 5: Leg Power & Core Finisher",
        focus: "Athletic Leg Strength & Core Definition",
        exercises: [
            {
                id: "d5_ex1",
                name: "Bodyweight Air Squats",
                meta: "4 Sets × 15-20 reps",
                target: "Quads & Calorie Burn",
                sets: 4,
                instructions: "1. Deep air squats with strict tempo.",
                videoUrl: "https://www.youtube.com/watch?v=aclHkVaku9U"
            },
            {
                id: "d5_ex2",
                name: "Single-Leg Glute Bridges",
                meta: "3 Sets × 12 reps/leg",
                target: "Glutes & Hamstrings",
                sets: 3,
                instructions: "1. Elevate one leg in air, drive through opposite heel to lift hips.",
                videoUrl: "https://www.youtube.com/watch?v=8q3zR31L-l4"
            },
            {
                id: "d5_ex3",
                name: "Banded Standing Calf Raises",
                meta: "4 Sets × 20 reps",
                target: "Calves",
                sets: 4,
                instructions: "1. Full stretch and squeeze on toes with band load.",
                videoUrl: "https://www.youtube.com/watch?v=3R3m_mZJtq0"
            },
            {
                id: "d5_ex4",
                name: "Hanging Knee Raises",
                meta: "4 Sets × 12-15 reps",
                target: "Abs & Core",
                sets: 4,
                instructions: "1. Strict hip flexor & lower ab leg curls.",
                videoUrl: "https://www.youtube.com/watch?v=2n4UqRIJyk4"
            },
            {
                id: "d5_ex5",
                name: "RKC Plank Hold",
                meta: "3 Sets × 60s",
                target: "Waist Compression",
                sets: 3,
                instructions: "1. Maximum tension plank hold.",
                videoUrl: "https://www.youtube.com/watch?v=6TKktamzq4o"
            }
        ]
    }
};

let currentTab = 1;

function getStoredData() {
    try {
        const raw = localStorage.getItem('toji_routine_state');
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.error("Failed to parse local storage", e);
    }
    return {
        lastResetDate: new Date().toDateString(),
        lastResetTime: Date.now(),
        streak: 0,
        completedToday: false,
        habits: {},
        checks: {}
    };
}

function saveState(state) {
    try {
        localStorage.setItem('toji_routine_state', JSON.stringify(state));
    } catch (e) {
        console.error("Failed to save to local storage", e);
    }
}

function checkAutoReset() {
    const state = getStoredData();
    const now = new Date();
    const todayReset = new Date(now);
    todayReset.setHours(12, 0, 0, 0);

    const lastReset = new Date(state.lastResetTime || 0);

    if (now >= todayReset && lastReset < todayReset) {
        if (state.completedToday) {
            state.streak += 1;
        } else {
            state.streak = 0;
        }

        state.checks = {};
        state.habits = {};
        state.completedToday = false;
        state.lastResetTime = Date.now();
        state.lastResetDate = now.toDateString();

        saveState(state);
    }

    updateStreakDisplay(state.streak);
}

function updateStreakDisplay(streak) {
    const el = document.getElementById('streak-counter');
    if (el) el.innerText = `${streak} ${streak === 1 ? 'Day' : 'Days'}`;
}

function switchTab(tabId) {
    currentTab = tabId;
    document.querySelectorAll('.tab-btn').forEach((btn, index) => {
        if (index + 1 === tabId) {
            btn.className = "tab-btn px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 bg-sky-600 text-white shadow-lg shadow-sky-600/30 touch-manipulation min-h-[44px]";
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            btn.className = "tab-btn px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 bg-slate-800 text-slate-400 hover:bg-slate-700 touch-manipulation min-h-[44px]";
        }
    });
    renderWorkout(tabId);
}

function renderWorkout(dayId) {
    const data = workoutData[dayId];
    const container = document.getElementById('workout-content');
    const state = getStoredData();

    if (data.isRecovery) {
        container.innerHTML = `
            <div class="space-y-4">
                <div class="border-b border-slate-700 pb-3">
                    <h3 class="text-base sm:text-lg font-black text-white uppercase">${data.title}</h3>
                    <p class="text-xs sm:text-sm text-sky-400 font-semibold">${data.focus}</p>
                </div>
                <div class="space-y-3">
                    ${data.recoveryItems.map(item => `
                        <label class="flex items-start space-x-3 p-3.5 sm:p-4 bg-slate-900/90 rounded-xl border border-slate-700/60 cursor-pointer touch-manipulation min-h-[48px]">
                            <input type="checkbox" id="${item.id}" ${state.checks[item.id] ? 'checked' : ''} 
                                onchange="toggleCheck('${item.id}')" class="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 accent-sky-500 rounded cursor-pointer shrink-0">
                            <div>
                                <div class="text-xs sm:text-sm font-bold text-white">${item.title}</div>
                                <div class="text-[11px] sm:text-xs text-slate-400 mt-0.5">${item.desc}</div>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="space-y-5">
            <div class="border-b border-slate-700 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                    <h3 class="text-base sm:text-lg font-black text-white uppercase">${data.title}</h3>
                    <p class="text-xs sm:text-sm text-sky-400 font-semibold">${data.focus}</p>
                </div>
                <span class="self-start sm:self-auto text-[11px] sm:text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md font-semibold">
                    Rest 60-90s between sets
                </span>
            </div>

            <div class="space-y-4">
                ${data.exercises.map(ex => `
                    <div class="bg-slate-900/90 border border-slate-700/60 rounded-xl p-3.5 sm:p-4 space-y-3 hover:border-slate-600 transition">
                        <div class="flex items-start sm:items-center justify-between flex-wrap gap-2">
                            <label class="flex items-center space-x-3 cursor-pointer touch-manipulation min-h-[40px] flex-1">
                                <input type="checkbox" id="${ex.id}_main" ${state.checks[ex.id + '_main'] ? 'checked' : ''} 
                                    onchange="toggleCheck('${ex.id}_main')" class="w-5 h-5 sm:w-6 sm:h-6 accent-sky-500 rounded cursor-pointer shrink-0">
                                <div>
                                    <span class="text-xs sm:text-sm font-bold text-white block leading-snug">${ex.name}</span>
                                    <span class="text-[10px] sm:text-xs text-sky-400 font-semibold">${ex.target}</span>
                                </div>
                            </label>
                            <div class="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end mt-1 sm:mt-0">
                                <span class="text-xs font-mono font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2 py-1 rounded">
                                    ${ex.meta}
                                </span>
                                <a href="${ex.videoUrl}" target="_blank" rel="noopener noreferrer" 
                                    class="text-xs bg-slate-800 hover:bg-red-600 active:bg-red-700 text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition touch-manipulation min-h-[36px]">
                                    <i class="fa-brands fa-youtube text-red-500"></i> Tutorial <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-70"></i>
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center space-x-2 pt-2 border-t border-slate-800 flex-wrap gap-y-2">
                            <span class="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">Set Tracker:</span>
                            <div class="flex space-x-2 overflow-x-auto py-1">
                                ${Array.from({length: ex.sets}).map((_, setIdx) => {
                                    const setKey = `${ex.id}_set_${setIdx + 1}`;
                                    return `
                                        <button onclick="toggleCheck('${setKey}')" 
                                            class="w-8 h-8 sm:w-7 sm:h-7 rounded border text-xs font-mono font-bold transition flex items-center justify-center touch-manipulation shrink-0
                                            ${state.checks[setKey] 
                                                ? 'bg-sky-600 border-sky-400 text-white' 
                                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 active:bg-slate-700'}">
                                            ${setIdx + 1}
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function toggleCheck(key) {
    const state = getStoredData();
    state.checks[key] = !state.checks[key];
    
    checkRoutineCompletion(state);
    saveState(state);
    renderWorkout(currentTab);
}

function updateHabitState() {
    const state = getStoredData();
    const habits = ['protein', 'steps', 'deficit', 'water'];
    let cleared = 0;

    habits.forEach(h => {
        const el = document.getElementById(`habit-${h}`);
        if (el) {
            const checked = el.checked;
            state.habits[h] = checked;
            if (checked) cleared++;
        }
    });

    const progressEl = document.getElementById('habits-progress');
    if (progressEl) progressEl.innerText = `${cleared} / 4 Cleared`;
    checkRoutineCompletion(state);
    saveState(state);
}

function checkRoutineCompletion(state) {
    const currentExs = workoutData[currentTab].exercises || [];
    let totalChecks = 0;
    let checkedCount = 0;

    currentExs.forEach(ex => {
        totalChecks++;
        if (state.checks[`${ex.id}_main`]) checkedCount++;
    });

    if (totalChecks > 0 && (checkedCount / totalChecks) >= 0.8) {
        state.completedToday = true;
    }
}

function resetTodayChecklist(confirmUser = false) {
    if (confirmUser && !confirm("Reset today's checked progress?")) return;
    const state = getStoredData();
    state.checks = {};
    state.habits = {};
    state.completedToday = false;
    saveState(state);
    loadHabitState();
    renderWorkout(currentTab);
}

function loadHabitState() {
    const state = getStoredData();
    const habits = ['protein', 'steps', 'deficit', 'water'];
    let cleared = 0;

    habits.forEach(h => {
        const isChecked = !!state.habits[h];
        const el = document.getElementById(`habit-${h}`);
        if (el) {
            el.checked = isChecked;
            if (isChecked) cleared++;
        }
    });

    const progressEl = document.getElementById('habits-progress');
    if (progressEl) progressEl.innerText = `${cleared} / 4 Cleared`;
}

document.addEventListener('DOMContentLoaded', () => {
    checkAutoReset();
    loadHabitState();
    switchTab(1);
});
