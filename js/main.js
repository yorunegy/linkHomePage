function toggleAnswer(element) {
    var answer = element.querySelector('.a');
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
    } else {
        answer.classList.add('hidden');
    }
}
