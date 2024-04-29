document.getElementById('search-mai').addEventListener('input', function() {
    var word = this.value.toLowerCase();
    var LI = document.querySelectorAll('.slide-mai ul li');
    LI.forEach(function(li) {
        var text = li.textContent.toLowerCase();
        if (text.includes(word)) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    });
});

function validpasswords() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password'); 
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

var userIcon = document.getElementById('user-mai');
userIcon.addEventListener('click', function() {
window.location.href = "user.html"; 
});


const nightModeToggle = document.getElementById('nightModeToggle');
const body = document.body;

nightModeToggle.addEventListener('click', function() {
    body.classList.toggle('night-mode');
    nightModeToggle.classList.toggle('fa-moon');
    nightModeToggle.classList.toggle('fa-sun');
    // Save user preference to localStorage
    localStorage.setItem('nightModeEnabled', body.classList.contains('night-mode'));
});
window.onload = function () {
    const nightModeEnabled = localStorage.getItem('nightModeEnabled') === 'true';
    if (nightModeEnabled) {
        body.classList.add('night-mode');
        nightModeToggle.classList.add('fa-moon');
        nightModeToggle.classList.remove('fa-sun');
    } else {
        body.classList.remove('night-mode');
        nightModeToggle.classList.remove('fa-moon');
        nightModeToggle.classList.add('fa-sun');
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Clicked = false;
        function Click() {
            if (!Clicked) {
                alert('Booking confirmed!');
                Clicked = true;
            } else {
                var check = prompt('You already booked one! Would you like to choose another one? (Type "yes" to continue)');
                if (check.toLowerCase() === 'yes') {
                    alert('Booking confirmed!');
                    Clicked = true;
                } else if (check.toLowerCase() === 'no') {
                    var confirmNo = prompt('Sure? You would not change (Type "yes" to continue)');
                    if (confirmNo.toLowerCase() === 'yes') {
                        alert('<3');
                    }
                }
            }
        }
            var bookButton1 = document.getElementById('book');
            var bookButton2 = document.getElementById('book1');
            var bookButton3 = document.getElementById('book2');
    
            if (bookButton1) {
                bookButton1.addEventListener('click', Click);
            }
            if (bookButton2) {
                bookButton2.addEventListener('click', Click);
            }
            if (bookButton3) {
                bookButton3.addEventListener('click', Click);
            }
        ;




        const questions = [
            {
                question: "يتركب معدن الماالكيت من",
                options: ["كربونات النحاس المائية", "كبريتيد النحاس", "كبريتات النحاس"],
                answer: "كربونات النحاس المائية"
            },
            {
                question: "تبلغ صلادة معدن الكالسيت",
                options: ["3", "7", "5"],
                answer: "3"
            },
            {
                question: "يتلون الكوارتز باللون الوردي عندما يحتوي على شوائب",
                options: ["اكاسيد الحديد", "المنجنيز", "الكربون"],
                answer: "المنجنيز"
            },
            {
                question: "من أمثلة البريق اللافلزي",
                options: ["البريق الزجاجي", "الجالينا", "النيكل"],
                answer: "البريق الزجاجي"
            },
            {
                question: "من المعادن الاقتصادية الكبريتيدات ومنها",
                options: ["الدولوميت", "البيريت", "الهيماتيت"],
                answer: "البيريت"
            },
            {
                question: "يتركب معدن السفاليريت من",
                options: ["كبريتيد النحاس", "كبريتيد الزنك", "أكسيد السيليكون"],
                answer: "كبريتيد الزنك"
            },
            {
                question: "تشكل 8 عناصر أكثر من ....% من وزن صخور القشرة الأرضية",
                options: ["76", "98.5", "82.5"],
                answer: "98.5"
            },
        ];
        
        const questionElement = document.getElementById("question");
        const submitButton = document.getElementById("btn");
        const resultElement = document.getElementById("result");
        const optionsContainer = document.getElementById("options-container");
        
        let score = 0;
        let ind = 0;
        
        function genquest() {
            const questionind = questions[ind];
            questionElement.innerText = questionind.question;
            optionsContainer.innerHTML = "";
            questionind.options.forEach(option => {
                const optionButton = document.createElement("button");
                optionButton.classList.add("button-2-mai");
                optionButton.innerText = option;
                optionButton.addEventListener("click", () => selectOption(option, questionind.answer));
                optionsContainer.appendChild(optionButton);
            });
        }
        
        function selectOption(selectedOption, correctAnswer) {
            const optionButtons = document.querySelectorAll("#options-container button");
            optionButtons.forEach(button => {
                button.disabled = true;
                if (button.innerText === correctAnswer) {
                    button.style.backgroundColor = "green";
                    if (selectedOption === correctAnswer) {
                        score++;
                    }
                } else if (button.innerText === selectedOption) {
                    button.style.backgroundColor = "red";
                }
            });
        
            setTimeout(() => {
                ind++;
                if (ind < questions.length) {
                    genquest();
                }
            }, 1000);
        }
        
        submitButton.addEventListener("click", () => {
            resultElement.innerText = `You scored ${score} out of ${questions.length}`;
        
        });
        
        genquest(); // Initially load the first question
        
        /////////////////////////////////////////////////////////////////////////////////
        